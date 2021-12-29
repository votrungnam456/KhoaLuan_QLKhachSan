import React, { Component } from 'react'
import * as CallAPI from "../../constanst/CallAPI";
import { APIRoom } from '../../constanst/API';
import { convertDate,convertDisplayCustomer } from '../../constanst/Methods';
export default class RoomBillItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      details: [],
      housekeepingOrder: "",
      nameEmployee: "",
      nameRoom: "",
      nameTypeRoom: "",
      listCustomer: [],
      status: 0
    }
  }
  componentDidMount() {
    CallAPI.GET(APIRoom + "/" + this.props.idRoom).then(res => {
      if (res.status === 200) {
        this.setState({
          description: res.data.description,
          details: res.data.details,
          housekeepingOrder: res.data.housekeepingOrder,
          nameEmployee: res.data.nameEmployee,
          nameRoom: res.data.nameRoom,
          nameTypeRoom: res.data.nameTypeRoom,
          status: res.data.status,
        })
        if (res.data.infoCustomerBooking) {
          this.setState({
            listCustomer: res.data.infoCustomerBooking.customers
          })
        }
      }
    })
  }
  getCustomers = (customers) => {
    let result = "";
    customers.map(x => result += x.name + ",")
    return result;
  }
  render() {
    const { description, housekeepingOrder, nameEmployee, nameRoom, nameTypeRoom, details } = this.state;
    const { logCustomer,customers } = this.props;
    return (
      <div className="col-sm-12">
        <div className="card-box">
          <div className="card-head">
            <header>Chi tiết phòng</header>
          </div>
          <div className="card-body row">
            <div className="col-lg-6 p-t-20">
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                <label className="">Tên phòng: {nameRoom}</label>
              </div>
            </div>
            <div className="col-lg-6 p-t-20">
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                <label className="">Mô tả : {description}</label>
              </div>
            </div>
            <div className="col-lg-6 p-t-20">
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                <label className="">Loại phòng: {nameTypeRoom}</label>
              </div>
            </div>
            <div className="col-lg-6 p-t-20">
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                <label className="">Người phụ trách dọn dẹp: {nameEmployee === null ? "chưa có" : nameEmployee}</label>
              </div>
            </div>
            <div className="col-lg-6 p-t-20">
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                <label className="">Tên khách ở: {customers.length > 0 ? convertDisplayCustomer(customers) : "không có"}</label>
              </div>
            </div>
            <div className="col-lg-6 p-t-20">
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                <label className="">Thứ tự dọn dẹp: {housekeepingOrder}</label>
              </div>
            </div>
            <div className="col-lg-6 p-t-20">
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                <label className="">Chi tiết phòng:</label>
              </div>
            </div>
            <div className="table-scrollable">
              <table className="table table-hover table-checkable order-column full-width" id="table">
                <thead>
                  <tr>
                    <th className="center"> Loại hình </th>
                    <th className="center"> Tên </th>
                    <th className="center"> Số lượng </th>
                  </tr>
                </thead>
                <tbody>
                  {details.map((value, index) => {
                    return (
                      <tr key={index} className="center">
                        <td>{value.typeDetail === 1 ? "Dịch vụ" : "Thiết bị"}</td>
                        <td>{value.name}</td>
                        <td>{value.quantity}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div className="col-lg-6 p-t-20">
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                <label className="">Log:</label>
              </div>
            </div>
            <div className="table-scrollable">
              <table className="table table-hover table-checkable order-column full-width" id="table">
                <thead>
                  <tr>
                    <th className="center"> Tên khách hàng </th>
                    <th className="center"> Dịch vụ/Thiết bị </th>
                    <th className="center"> Số lượng </th>
                    <th className="center"> Giá </th>
                    <th className="center"> Ngày thực hiện </th>
                    <th className="center"> Description </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    logCustomer.length > 0 ? logCustomer.map((value, index) => {
                      return (
                        <tr className="odd gradeX">
                          <td className="center">{value.customer.name}</td>
                          <td className="center">{value.name}</td>
                          <td className="center">{value.quantity}</td>
                          <td className="center">{value.totalPrice}</td>
                          <td className="center">{convertDate(value.time, false)}</td>
                          <td className="center">{value.description}</td>
                        </tr>
                      )
                    }) : (
                      <tr role="status">
                        <td className="sr-only">Không có log nào</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
