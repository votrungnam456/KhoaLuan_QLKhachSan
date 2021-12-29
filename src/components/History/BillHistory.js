import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { APIBill } from '../../constanst/API';
import * as CallAPI from "../../constanst/CallAPI";
import Title from '../Home/Title';
import { convertDate, convertDisplayRoomName, convertDisplayCustomer, getNow } from '../../constanst/Methods';
import ExportExcel from '../Excel/ExportExcel';
export default class BillHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listBill: [],
      listBillOne: [],
      listBillDelegation: [],
      baseListBillOne: [],
      baseListBillDelegation: [],
    }
  }
  async componentDidMount() {
    await this.loadData();
  }
  loadData = async () => {
    this.clearData();
    await CallAPI.GET(APIBill).then(res => {
      if (res.status === 200) {
        res.data.map(bill => {
          if (bill.infoRegistration.type === 0) {
            this.setState({
              listBillDelegation: [...this.state.listBillDelegation, bill],
              baseListBillDelegation: [...this.state.baseListBillDelegation, bill],
            })
          } else if (bill.infoRegistration.type === 1) {
            this.setState({
              listBillOne: [...this.state.listBillOne, bill],
              baseListBillOne: [...this.state.baseListBillOne, bill],
            })
          }
          return true;
        })
      }
      else {
        alert('get data failed')
      }
    });
  }
  clearData = () => {
    this.setState({
      listBillOne: [],
      listBillDelegation: [],
      baseListBillOne: [],
      baseListBillDelegation: [],
    })
  }
  search = (ev) => {
    const keySearch = ev.target.value
    const name = ev.target.name;
    if (name === "one") {
      if (keySearch === '') {
        this.setState({
          listBillOne: this.state.baseListBillOne
        })
        return;
      }
      const listSearch = [];
      this.state.baseListBillOne.map(list => {
        let dataFilter = {
          customers: convertDisplayCustomer(list.infoRegistration.customers),
          rooms: convertDisplayRoomName(list.infoRoom)
        }
        if (dataFilter.customers.includes(keySearch) || dataFilter.rooms.includes(keySearch)) {
          listSearch.push(list);
        }
        return true
      })
      this.setState({
        listBillOne: listSearch
      })
    }
    else if (name === "delegation") {
      if (keySearch === '') {
        this.setState({
          listBillDelegation: this.state.baseListBillDelegation
        })
        return;
      }
      const listSearch = [];
      this.state.baseListBillDelegation.map(list => {
        if (list.infoRegistration.delegation.nameDelegations.includes(keySearch)) {
          listSearch.push(list);
        }
        return true
      })
      this.setState({
        listBillDelegation: listSearch
      })
    }
  }
  render() {
    const { listBillDelegation, listBillOne } = this.state;
    return (
      <div className="page-content-wrapper">
        <div className="page-content">
          <Title title="Hoá đơn thanh toán"></Title>
          <div className="row">
            <div className="col-md-12">
              <div className="card card-box">
                <div className="card-head">
                  <header>Lịch sử hoá đơn thanh toán khách lẻ</header>
                  <div className="tools">
                    <i className="t-collapse btn-color fa fa-chevron-down" />
                  </div>
                </div>
                <div className="card-body ">
                  <div className="row p-b-20">
                    <div className="col-md-6 col-sm-6 col-6">
                      <div className="btn-group">
                        <ExportExcel tableName="table-one" fileName={"historyBillOne" + getNow(true)}></ExportExcel>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-6">
                    <label className="search-bar">
                      Search: <input type="text" style={{ display: "inline-block", width: "80%" }} name="one" onChange={this.search} className="form-control form-control-sm" />
                    </label>
                  </div>

                  <div className="table-scrollable">
                    <table className="table table-hover table-checkable order-column full-width" id="table-one">
                      <thead>
                        <tr>
                          <th className="center"> Khách hàng </th>
                          <th className="center"> Phòng </th>
                          <th className="center"> Ngày nhận phòng </th>
                          <th className="center"> Ngày trả phòng </th>
                          <th className="center"> Ngày thanh toán </th>
                          <th className="center"> Tiền thuê phòng </th>
                          <th className="center"> Tiền dịch vụ </th>
                          <th className="center"> Tổng tiền </th>
                          <th className="cneter"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          listBillOne.length > 0 ? listBillOne.map((bill, index) => {
                            return (
                              <tr key={index} className="center">
                                <td>{convertDisplayCustomer(bill.infoRegistration.customers)}</td>
                                <td>{convertDisplayRoomName(bill.infoRoom)}</td>
                                <td>{convertDate(bill.dayCheckIn)}</td>
                                <td>{convertDate(bill.dayCheckOut)}</td>
                                <td>{convertDate(bill.dayOfPayment, false)}</td>
                                <td>{bill.roomRent}</td>
                                <td>{bill.serviceFee}</td>
                                <td>{bill.totalMoney}</td>
                                <td>
                                  <Link to={'/history-bill-detail/' + bill.infoRegistration.idRegistration} className="btn btn-primary btn-tbl-edit btn-xs">
                                    <i className="fa fa-info" />
                                  </Link>
                                </td>
                              </tr>
                            )
                          }) : <tr>
                            <td colSpan={9}>Không có phiếu thanh toán </td>
                          </tr>
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card card-box">
                <div className="card-head">
                  <header>Lịch sử hoá đơn thanh toán khách đoàn</header>
                  <div className="tools">
                    <i className="t-collapse btn-color fa fa-chevron-down" />
                  </div>
                </div>
                <div className="card-body ">
                  <div className="row p-b-20">
                    <div className="col-md-6 col-sm-6 col-6">
                      <div className="btn-group">
                        <ExportExcel tableName="table-delegation" fileName={"historyBillDelegation" + getNow(true)}></ExportExcel>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-6">
                    <label className="search-bar">
                      Search: <input type="text" style={{ display: "inline-block", width: "80%" }} name="delegation" onChange={this.search} className="form-control form-control-sm" />
                    </label>
                  </div>

                  <div className="table-scrollable">
                    <table className="table table-hover table-checkable order-column full-width" id="table-delegation">
                      <thead>
                        <tr>
                          <th className="center"> Tên đoàn </th>
                          <th className="center"> Ngày nhận phòng </th>
                          <th className="center"> Ngày trả phòng </th>
                          <th className="center"> Ngày thanh toán </th>
                          <th className="center"> Tiền thuê phòng </th>
                          <th className="center"> Tiền dịch vụ </th>
                          <th className="center"> Tổng tiền </th>
                          <th className="center"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          listBillDelegation.length > 0 ? listBillDelegation.map((bill, index) => {
                            return (
                              <tr key={index} className="center">
                                <td>{bill.infoRegistration.delegation.nameDelegations}</td>
                                <td>{convertDate(bill.dayCheckIn)}</td>
                                <td>{convertDate(bill.dayCheckOut)}</td>
                                <td>{convertDate(bill.dayOfPayment, false)}</td>
                                <td>{bill.roomRent}</td>
                                <td>{bill.serviceFee}</td>
                                <td>{bill.totalMoney}</td>
                                <td>
                                  <Link to={'/history-bill-detail/' + bill.infoRegistration.idRegistration} className="btn btn-primary btn-tbl-edit btn-xs">
                                    <i className="fa fa-info" />
                                  </Link>
                                </td>
                              </tr>
                            )
                          }) : <tr>
                            <td colSpan={9}>Không có phiếu thanh toán </td>
                          </tr>
                        }

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
