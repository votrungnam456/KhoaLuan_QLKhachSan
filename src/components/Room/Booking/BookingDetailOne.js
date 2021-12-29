import React, { Component } from 'react'
import Title from '../../Home/Title'
import { APICustomer, APIRoom, APITypeRoom, APIBookingRoom } from '../../../constanst/API';
import * as CallAPI from "../../../constanst/CallAPI";
import RoomDetailItem from '../RoomDetailItem';
export default class BookingDetailOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCustomer: [],
      name1: "",
      card1: "",
      nationality1: "",
      phone1: "",
      email1: "",
      idCustomer1: "",
      name2: "",
      card2: "",
      nationality2: "",
      phone2: "",
      email2: "",
      idCustomer2: "",
      numOfChild: 0,
      checkInDate: "",
      checkOutDate: "",
      note: "",
      message: 0,
      idTypeRoom: "",
      price: 0,
      now: "",
      isProtect: false,
      user: {}
    }
  }
  componentDidMount() {
    const date = new Date();
    const userLocal = JSON.parse(localStorage.getItem("userLogin"));
    const userSession = JSON.parse(sessionStorage.getItem("userLogin"));
    const checkDate = JSON.parse(localStorage.getItem("date"));
    this.setState({
      user: userLocal || userSession,
      checkInDate: checkDate.checkInDate || "",
      checkOutDate: checkDate.checkOutDate || "",
      now: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    })
    CallAPI.GET(APICustomer).then(res => {
      if (res.status === 200) {
        this.setState({
          listCustomer: res.data
        })
      }
    });
    CallAPI.GET(APIRoom + "/" + this.props.match.params.idRoom).then(res => {
      if (res.status === 200) {
        this.setState({
          idTypeRoom: res.data.idTypeRoom
        }, () => {
          CallAPI.GET(APITypeRoom + "/" + this.state.idTypeRoom).then(res => {
            if (res.status === 200) {
              this.setState({
                price: res.data.price
              })
            }
          })
        })
      }
    });
  }
  onChange = (ev) => {
    this.setState({
      message: 0
    })
    let name = ev.target.name;
    let value = ev.target.value;
    this.setState({
      [name]: value
    })
    if (name === "idCustomer1") {
      if (value !== "") {
        CallAPI.GET(APICustomer + "/" + value).then(res => {
          if (res.status === 200) {
            this.setState({
              name1: res.data.name,
              card1: res.data.card,
              nationality1: res.data.nationality,
              phone1: res.data.phone,
              email1: res.data.email,
            })
          }
        });
      }
      else {
        this.setState({
          name1: "",
          card1: "",
          nationality1: "",
          phone1: "",
          email1: "",
        })
      }
    }
    if (name === "idCustomer2") {
      if (value !== "") {
        CallAPI.GET(APICustomer + "/" + value).then(res => {
          if (res.status === 200) {
            this.setState({
              name2: res.data.name,
              card2: res.data.card,
              nationality2: res.data.nationality,
              phone2: res.data.phone,
              email2: res.data.email,
            })
          }
        });
      }
      else {
        this.setState({
          name2: "",
          card2: "",
          nationality2: "",
          phone2: "",
          email2: "",
        })
      }
    }
  }
  handleChecked = (ev) => {
    const name = ev.target.name;
    const value = ev.target.checked;
    this.setState({
      [name]: value
    })
  }
  bookingRoom = () => {
    const { isProtect, user, idCustomer1, idCustomer2, numOfChild, note, checkOutDate, checkInDate } = this.state
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    if (checkInDate === "" || checkOutDate === "") {
      this.setState({
        message: 1
      })
    }
    else if (idCustomer1 === "" && idCustomer2 === "") {
      this.setState({
        message: 2
      })
    }
    else if (checkIn.getTime() > checkOut.getTime()) {
      this.setState({
        message: 3
      })
    }
    else {
      const dataBooking = {
        bookingDate: Date.now(),
        checkInDate: checkIn.getTime(),
        checkOutDate: checkOut.getTime(),
        idCustomer: [idCustomer1, idCustomer2],
        idEmployee: user.id,
        idRoom: [this.props.match.params.idRoom],
        note,
        numberOfChild: parseInt(numOfChild),
        type: 1,
        isGuaranteed: isProtect
      }
      CallAPI.POST(APIBookingRoom, dataBooking).then(res => {
        if (res.status === 200) {
          alert("Đặt phòng thành công");
          this.props.history.push("/booking-room");
        }
        else {
          this.setState({
            message: 4
          })
        }
      })
    }
  }
  render() {
    const { isProtect, message, now, listCustomer, name1, card1, nationality1, phone1, email1, idCustomer1, name2, card2, nationality2, phone2, email2, idCustomer2, numOfChild, note, checkOutDate, checkInDate, price } = this.state
    return (
      <div className="page-content-wrapper">
        <div className="page-content">
          <Title title="Đặt phòng"></Title>
          <div className="row">
            <div className="col-sm-12">
              <div className="card-box">
                <div className="card-head">
                  <header>Đặt phòng</header>
                </div>
                <div className="card-body row">
                  <div className="col-lg-2 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <label className="">Khách hàng 1</label>
                      <select name="idCustomer1" value={idCustomer1} onChange={this.onChange} className="mdl-textfield__input">
                        <option value="">Chọn khách hàng</option>
                        {listCustomer.map((customer, index) => {
                          return (
                            <option key={index} value={customer.id}>{customer.name}</option>
                          )
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-2 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <label className="">Tên khách hàng</label>
                      <input className="mdl-textfield__input" type="text" onChange={this.onChange} name="name1" value={name1} disabled={idCustomer1 === "" ? false : true} />
                    </div>
                  </div>
                  <div className="col-lg-2 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <label className="">Chứng minh thư</label>
                      <input className="mdl-textfield__input" type="number" onChange={this.onChange} name="card1" value={card1} disabled={idCustomer1 === "" ? false : true} />
                    </div>
                  </div>
                  <div className="col-lg-2 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <label className="">Quốc tịch</label>
                      <input className="mdl-textfield__input" type="text" onChange={this.onChange} name="nationality1" value={nationality1} disabled={idCustomer1 === "" ? false : true} />
                    </div>
                  </div>
                  <div className="col-lg-2 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <label className="">Số điện thoại</label>
                      <input className="mdl-textfield__input" type="number" onChange={this.onChange} name="phone1" value={phone1} disabled={idCustomer1 === "" ? false : true} />
                    </div>
                  </div>
                  <div className="col-lg-2 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <label className="">Email</label>
                      <input className="mdl-textfield__input" type="text" onChange={this.onChange} name="email1" value={email1} disabled={idCustomer1 === "" ? false : true} />
                    </div>
                  </div>
                </div>
                <div className="card-body row">
                  <div className="col-lg-2 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <label className="">Khách hàng 2</label>
                      <select name="idCustomer2" value={idCustomer2} onChange={this.onChange} className="mdl-textfield__input">
                        <option value="">Chọn khách hàng</option>
                        {listCustomer.map((customer, index) => {
                          return (
                            <option key={index} value={customer.id}>{customer.name}</option>
                          )
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-2 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <label className="">Tên khách hàng</label>
                      <input className="mdl-textfield__input" type="text" onChange={this.onChange} name="name2" value={name2} disabled={idCustomer2 === "" ? false : true} />
                    </div>
                  </div>
                  <div className="col-lg-2 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <label className="">Chứng minh thư</label>
                      <input className="mdl-textfield__input" type="number" onChange={this.onChange} name="card1" value={card2} disabled={idCustomer2 === "" ? false : true} />
                    </div>
                  </div>
                  <div className="col-lg-2 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <label className="">Quốc tịch</label>
                      <input className="mdl-textfield__input" type="text" onChange={this.onChange} name="nationality2" value={nationality2} disabled={idCustomer2 === "" ? false : true} />
                    </div>
                  </div>
                  <div className="col-lg-2 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <label className="">Số điện thoại</label>
                      <input className="mdl-textfield__input" type="number" onChange={this.onChange} name="phone2" value={phone2} disabled={idCustomer2 === "" ? false : true} />
                    </div>
                  </div>
                  <div className="col-lg-2 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <label className="">Email</label>
                      <input className="mdl-textfield__input" type="text" onChange={this.onChange} name="email2" value={email2} disabled={idCustomer2 === "" ? false : true} />
                    </div>
                  </div>
                </div>
                <div className="card-body row">
                  <div className="col-lg-2 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width text-center">
                      <label className="">Số lượng trẻ em</label>
                    </div>
                  </div>
                  <div className="col-lg-4 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <input className="mdl-textfield__input" type="number" onChange={this.onChange} name="numOfChild" value={numOfChild} />
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
                      <input onChange={this.onChange} value={checkInDate} name="checkInDate" type="date" min={now} />
                    </div>
                  </div>
                  <div className="col-lg-2 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width text-center">
                      <label className="">Ngày trả phòng</label>
                    </div>
                  </div>
                  <div className="col-lg-4 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <input onChange={this.onChange} value={checkOutDate} name="checkOutDate" type="date" min={now} />
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
                      <textarea rows="4" cols="50" style={{ border: "1px solid black" }} onChange={this.onChange} value={note} name="note" type="text" />
                    </div>
                  </div>
                  <div className="col-lg-6 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width text-center">
                      <label className="">Số tiền:{price} đồng</label>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width text-center">
                      <label className="">Đặt phòng đảm bảo: <input name="isProtect" onChange={this.handleChecked} type="checkbox" checked={isProtect}></input></label>
                    </div>
                  </div>
                </div>
                <div className="card-body row">
                  <RoomDetailItem idRoom={this.props.match.params.idRoom}></RoomDetailItem>
                </div>
                <div className="card-body row">
                  <div className="col-lg-12 p-t-20 text-center">
                    <button onClick={this.bookingRoom} type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Đặt phòng</button>
                    <p style={{ color: "red" }}>{message === 1 ? "Vui lòng nhập ngày check-in và check-out" : message === 2 ? "Vui lòng chọn khách hàng vào ở trong phòng" : message === 3 ? "Ngày check-in không được lớn hơn ngày check-out" : message === 4 ? "Có lỗi trong quá trình xử lý, vui lòng thử lại" : ""}</p>
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
