import React, { Component } from 'react'
import Title from '../Home/Title'
import { APICheckOutRoom } from '../../constanst/API';
import * as CallAPI from "../../constanst/CallAPI";

export default class BillDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCustomer: [],
      numberOfChild: 0,
      checkInDate: "",
      checkOutDate: "",
      note: "",
      price: 0,
      user: {},
      bookingDate: "",
      totalPrice: 0,
      rooms: [],
    }
  }
  componentDidMount() {
    CallAPI.GET(APICheckOutRoom + "/" + this.props.match.params.idRegisterForm).then(res => {
      if (res.status === 200) {
        this.setState({
          listCustomer: res.data.infoRegistration.customers,
          numberOfChild: res.data.infoRegistration.numberOfChild,
          bookingDate: this.convertDate(res.data.infoRegistration.bookingDate, false),
          checkInDate: this.convertDate(res.data.infoRegistration.checkInDate),
          checkOutDate: this.convertDate(res.data.infoRegistration.checkOutDate),
          note: res.data.infoRegistration.note,
          price: res.data.infoRegistration.intoMoney,
          rooms: res.data.infoRoom,
          totalPrice: res.data.totalPrice,
        })
      }
    })
  }
  convertDisplayCustomer = (data) => {
    let result = "";
    data.map((x, index) => {
      index === data.length - 1 ? result += x.name : result += x.name + ",";
      return true;
    });
    return result;
  }
  checkOutRoom = (idRegister) => {
    CallAPI.POST(APICheckOutRoom + idRegister).then(res => {
      if (res.status === 200) {
        alert("Trả phòng thành công");
        this.props.history.goBack();
      }
      else {
        alert("Thất bại, có lỗi trong quá trình xử lý")
      }
    })
  }
  convertDate = (longTime, type = true) => {
    const date = new Date(longTime);
    if (type) {
      return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    }
    else {
      return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }
  }
  render() {
    const { numberOfChild, bookingDate, listCustomer, note, checkOutDate, checkInDate, price, rooms, totalPrice } = this.state
    return (
      <div className="page-content-wrapper">
        <div className="page-content">
          <Title title="Chi tiết phiếu thanh toán"></Title>
          <div className="row">
            <div className="col-sm-12">
              <div className="card-box">
                <div className="card-head">
                  <header>Phiếu thanh toán</header>
                </div>
                {
                  listCustomer.map((customer, index) => {
                    return (
                      <div key={index} className="card-body row text-center">
                        <div className="col-lg-3 p-t-20">
                          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                            <label>Tên khách hàng</label>
                            <p>{customer.name}</p>
                          </div>
                        </div>
                        <div className="col-lg-2 p-t-20">
                          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                            <label>Chứng minh thư</label>
                            <p>{customer.card}</p>
                          </div>
                        </div>
                        <div className="col-lg-2 p-t-20">
                          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                            <label>Quốc tịch</label>
                            <p>{customer.nationality}</p>
                          </div>
                        </div>
                        <div className="col-lg-2 p-t-20">
                          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                            <label>Số điện thoại</label>
                            <p>{customer.phone}</p>
                          </div>
                        </div>
                        <div className="col-lg-2 p-t-20">
                          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                            <label>Email</label>
                            <p>{customer.email}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                }
                <div className="card-body row">
                  <div className="col-lg-2 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width text-center">
                      <label className="">Số lượng trẻ em</label>
                    </div>
                  </div>
                  <div className="col-lg-4 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <p>{numberOfChild}</p>
                    </div>
                  </div>
                  <div className="col-lg-2 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width text-center">
                      <label className="">Ngày đặt phòng</label>
                    </div>
                  </div>
                  <div className="col-lg-4 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <p>{bookingDate}</p>
                    </div>
                  </div>
                </div>
                <div className="card-body row">
                  <div className="col-lg-2 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width text-center">
                      <label className="">Ngày nhận phòng</label>
                    </div>
                  </div>
                  <div className="col-lg-4 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <p>{checkInDate}</p>
                    </div>
                  </div>
                  <div className="col-lg-2 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width text-center">
                      <label className="">Ngày trả phòng</label>
                    </div>
                  </div>
                  <div className="col-lg-4 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <p>{checkOutDate}</p>
                    </div>
                  </div>
                </div>
                <div className="card-body row">
                  <div className="col-lg-2 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width text-center">
                      <label className="">Ghi chú</label>
                    </div>
                  </div>
                  <div className="col-lg-4 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <textarea rows="4" cols="50" style={{ border: "1px solid black" }} value={note} name="note" type="text" disabled={true} />
                    </div>
                  </div>
                  <div className="col-lg-6 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width text-center">
                      <label className="">Số tiền đã trả trước:{price} đồng</label>
                    </div>
                  </div>
                </div>
                <div className="card-body row">
                  {rooms.map((room, index) => {
                    return (
                      // <RoomDetailItem key={index} idRoom={room.id}></RoomDetailItem>
                      <div key={index} className="col-sm-12">
                        <div className="card-box">
                          <div className="card-head">
                            <header>Chi tiết phòng</header>
                          </div>
                          <div className="card-body row">
                            <div className="col-lg-6 p-t-20">
                              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                <label className="">Tên phòng: {room.nameRoom}</label>
                              </div>
                            </div>
                            <div className="col-lg-6 p-t-20">
                              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                <label className="">Loại phòng: {room.nameTypeRoom}</label>
                              </div>
                            </div>
                            <div className="col-lg-6 p-t-20">
                              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                <label className="">Khách ở: {this.convertDisplayCustomer(room.customers)}</label>
                              </div>
                            </div>
                            <div className="col-lg-6 p-t-20">
                              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                <label className="">Log: </label>
                              </div>
                            </div>
                            <div className="table-scrollable">
                              <table className="table table-hover table-checkable order-column full-width" id="example4">
                                <thead>
                                  <tr>
                                    <th className="center"> Tên khách hàng </th>
                                    <th className="center"> Loại hình </th>
                                    <th className="center"> Tên loại hình </th>
                                    <th className="center"> Giá </th>
                                    <th className="center"> Số lượng </th>
                                    <th className="center"> Thời gian thực hiện </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {room.logCustomers.length > 0 ? room.logCustomers.map((log, indexTemp) => {
                                    return (
                                      <tr key={indexTemp} className="center">
                                        <td>{log.customer.name}</td>
                                        <td>{log.type === 1 ? "Dịch vụ" : "Thiết bị"}</td>
                                        <td>{log.name}</td>
                                        <td>{log.totalPrice}</td>
                                        <td>{log.quantity}</td>
                                        <td>{this.convertDate(log.time, false)}</td>
                                      </tr>
                                    )
                                  }) : <tr>
                                    <td colSpan={6}>Không có dịch vụ hay thiết bị nào được sử dụng</td>
                                  </tr>}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="card-body row">
                  <div className="col-lg-12 p-t-20 text-center">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <label className="">Tổng tiền: {totalPrice} đồng</label>
                    </div>
                  </div>
                  <div className="col-lg-12 p-t-20 text-center">
                    <button onClick={() => this.checkOutRoom(this.props.match.params.idRegisterForm)} type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Trả phòng</button>
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
