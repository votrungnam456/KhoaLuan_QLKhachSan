import React, { Component } from 'react'
import * as CallAPI from "../../constanst/CallAPI";
import { APIRoom } from '../../constanst/API';
export default class RoomDetailItem extends Component {
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
    CallAPI.GET(APIRoom + "/"+this.props.idRoom).then(res => {
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
        if(res.data.infoCustomerBooking){
          this.setState({
            listCustomer:res.data.infoCustomerBooking.customers
          })
        }
      }
    })
  }
  convertStatus = (status) => {
    switch (status) {
      case 0:
        return "Trống"
      case 1:
        return "Đã đặt"
      case 2:
        return "Đang ở"
      case 3:
        return "Đang sửa"
      case 4:
        return "Đang dọn dẹp"
      default:
        break;
    }
  }
  getCustomers = (customers)=>{
    let result = "";
    customers.map(x=> result+= x.name + ",")
    return result;
  }
  render() {
    const { description, housekeepingOrder, nameEmployee, nameRoom, nameTypeRoom, status, details,listCustomer} = this.state;
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
                <label className="">Tình trạng: {this.convertStatus(status)}</label>
              </div>
            </div>
            <div className="col-lg-6 p-t-20">
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                <label className="">Thông tin khách đang ở: {listCustomer.length > 0 ? this.getCustomers(listCustomer) : "không có"}</label>
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
              <table className="table table-hover table-checkable order-column full-width" id="example4">
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
          </div>
        </div>
      </div>
    )
  }
}
