import React, { Component } from 'react'
import { APITurnover } from '../../constanst/API';
import * as CallAPI from "../../constanst/CallAPI";
import Title from '../Home/Title';
import { convertDate2, getNow } from '../../constanst/Methods';
import ExportExcel from '../Excel/ExportExcel';

export default class ListTurnover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTurnover: [],
      idTypeRoom: "",
      checkInDate: "",
      checkOutDate: "",
    }
  }
  onChange = (ev) => {
    let name = ev.target.name;
    let value = ev.target.value;
    this.setState({
      [name]: value
    })
  }
  search = () => {
    const { checkInDate, checkOutDate } = this.state;
    if (checkInDate === '' || checkOutDate === '') {
      alert("Vui lòng chọn ngày để tìm kiếm");
      return;
    }
    else if (convertDate2(checkInDate) >= convertDate2(checkOutDate)) {
      alert("Ngày đến không được lớn hơn hoặc bằng ngày đi");
      return;
    }
    const data = {
      dayStart: convertDate2(checkInDate),
      dayEnd: convertDate2(checkOutDate),
    }
    CallAPI.POST(APITurnover, data).then(res => {
      if (res.status === 200) {
        this.setState({
          listTurnover: res.data
        })
      }
    });
  }
  render() {
    const { listTurnover, listTypeRoom, checkInDate, checkOutDate } = this.state;
    return (
      <div className="page-content-wrapper">
        <div className="page-content">
          <Title title="Doanh Thu"></Title>
          <div className="row">
            <div className="col-md-12">
              <div className="card card-box">
                <div className="card-head">
                  <header>Doanh Thu</header>
                  <div className="tools">
                    <i className="t-collapse btn-color fa fa-chevron-down" />
                  </div>
                </div>
                <div className="card-body ">
                  <div className="row p-b-20">
                    <div className="col-md-6 col-sm-6 col-6">
                      <div className="btn-group">
                        <ExportExcel tableName="table" fileName={"listTurnover" + getNow(true)}></ExportExcel>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12 col-12">
                    <div className="row">
                      <div className="col-md-4">
                        <span>Ngày đến: </span>
                        <input onChange={this.onChange} value={checkInDate} name="checkInDate" type="date" />
                      </div>
                      <div className="col-md-4">
                        <span>Ngày đi: </span>
                        <input onChange={this.onChange} value={checkOutDate} name="checkOutDate" type="date" />
                      </div>
                      <div className="col-md-4">
                        <button onClick={this.search} className="btn btn-primary"> Tìm kiếm </button>
                      </div>
                    </div>
                  </div>
                  <div className="table-scrollable">
                    <table className="table table-hover table-checkable order-column full-width" id="table">
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
                          listTurnover.length > 0 ? listTurnover.map((bill, index) => {
                            return (
                              <tr key={index} className="center">
                                {/* <td>{convertDisplayCustomer(bill.infoRegistration.customers)}</td>
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
                                </td> */}
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
