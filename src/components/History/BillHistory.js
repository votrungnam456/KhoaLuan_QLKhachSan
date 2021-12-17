import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { APIBill, APICheckOutRoom } from '../../constanst/API';
import * as CallAPI from "../../constanst/CallAPI";
import Title from '../Home/Title';
import { convertDate, convertDisplayRoomName, convertDisplayCustomer } from '../../constanst/Methods';
export default class BillHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listBill: [],
      listBillOne: [],
      listBillDelegation: [],
    }
  }
  async componentDidMount() {
    await this.loadData();

  }
  loadData = async () => {
    this.clearData();
    await CallAPI.GET(APIBill).then(res => {
      if (res.status === 200) {
        console.log(res.data);
        res.data.map(bill => {
          if (bill.infoRegistration.type === 0) {
            this.setState({
              listBillDelegation: [...this.state.listBillDelegation, bill]
            })
          } else if (bill.infoRegistration.type === 1) {
            this.setState({
              listBillOne: [...this.state.listBillOne, bill]
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
    })
  }
  testCall = (id) => {
    CallAPI.GET(APICheckOutRoom + id).then(res => {
      if (res.status === 200) {
        console.log(res.data)
      }
      else {
        alert('get data failed')
      }
    });
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
                    <div className="col-md-6 col-sm-6 col-6 offset-md-6 offset-sm-6 offset-6">
                      <div className="btn-group pull-right">
                        <i className="btn deepPink-bgcolor  btn-outline dropdown-toggle" data-toggle="dropdown">Tools
                          <i className="fa fa-angle-down" />
                        </i>
                        <ul className="dropdown-menu pull-right">
                          <li>
                            <a href=" ">
                              <i className="fa fa-file-excel-o" /> Export to Excel </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-6">
                    <label className="search-bar">
                      Search: <input type="text" style={{ display: "inline-block", width: "80%" }} className="form-control form-control-sm" />
                    </label>
                  </div>

                  <div className="table-scrollable">
                    <table className="table table-hover table-checkable order-column full-width" id="example4">
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
                                  <button onClick={() => this.testCall(bill.infoRegistration.idRegistration)} className="btn btn-primary btn-tbl-edit btn-xs">
                                    <i className="fa fa-info" />
                                  </button>
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
                    <div className="col-md-6 col-sm-6 col-6 offset-md-6 offset-sm-6 offset-6">
                      <div className="btn-group pull-right">
                        <i className="btn deepPink-bgcolor  btn-outline dropdown-toggle" data-toggle="dropdown">Tools
                          <i className="fa fa-angle-down" />
                        </i>
                        <ul className="dropdown-menu pull-right">
                          <li>
                            <a href=" ">
                              <i className="fa fa-file-excel-o" /> Export to Excel </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-6">
                    <label className="search-bar">
                      Search: <input type="text" style={{ display: "inline-block", width: "80%" }} className="form-control form-control-sm" />
                    </label>
                  </div>

                  <div className="table-scrollable">
                    <table className="table table-hover table-checkable order-column full-width" id="example4">
                      <thead>
                        <tr>
                          <th className="center"> Khách đoàn </th>
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
                                  <button onClick={() => this.testCall(bill.infoRegistration.idRegistration)} className="btn btn-primary btn-tbl-edit btn-xs">
                                    <i className="fa fa-info" />
                                  </button>
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
