import React, { Component } from 'react'
import Title from '../../Home/Title'
import { APIDelegation, APIRoom, APITypeRoom, APIBookingRoom } from '../../../constanst/API';
import * as CallAPI from "../../../constanst/CallAPI";

export default class BookingDetailDelegation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listRoomId: this.props.match.params.idRoom.split(";"),
      listRoom: [],
      listDelegation: [],
      listIdTypeRoom: [],
      price: 0,
      nameCompany: "",
      nameManager: "",
      nameDelegation: "",
      idDelegation: "",
      numOfChild: 0,
      numbOfAdult: 0,
      checkInDate: "",
      checkOutDate: "",
      note: "",
      message: 0,
      isProtect: false,
      user: {},
      now: "",
    }
  }
  async componentDidMount() {
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
    CallAPI.GET(APIDelegation).then(res => {
      if (res.status === 200) {
        this.setState({
          listDelegation: res.data
        })
      }
    });
    await this.getData();
    for (const id of this.state.listIdTypeRoom) {
      CallAPI.GET(APITypeRoom + "/" + id).then(res => {
        if (res.status === 200) {
          this.setState({
            price: this.state.price + res.data.price
          })
        }
      })
    }
    const list = this.state.listDelegation.filter(x => x.numberOfPeople <= this.state.listRoom.length * 2)
    this.setState({
      listDelegation: list
    })
  }
  async getData() {
    for (const id of this.state.listRoomId) {
      await CallAPI.GET(APIRoom + "/" + id).then(res => {
        this.setState({
          listRoom: [...this.state.listRoom, res.data],
          listIdTypeRoom: [...this.state.listIdTypeRoom, res.data.idTypeRoom]
        })
      })
    }
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
    if (name === "idDelegation") {
      if (value !== "") {
        CallAPI.GET(APIDelegation + "/" + value).then(res => {
          if (res.status === 200) {
            this.setState({
              nameCompany: res.data.nameCompany,
              nameManager: res.data.nameManager,
              nameDelegation: res.data.nameDelegations,
              numbOfAdult: res.data.numberOfPeople
            })
          }
        });
      }
      else {
        this.setState({
          nameCompany: "",
          nameManager: "",
          nameDelegation: "",
          numbOfAdult: 0
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
    const { isProtect, user, numOfChild, note, checkOutDate, checkInDate, listRoomId, idDelegation } = this.state
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    if (checkInDate === "" || checkOutDate === "") {
      this.setState({
        message: 1
      })
    }
    else if (idDelegation === "") {
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
        idDelegation,
        idEmployee: user.id,
        idRoom: listRoomId,
        note,
        numberOfChild: parseInt(numOfChild),
        type: 0,
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
  convertStatus = (status) => {
    switch (status) {
      case -1:
        return "Trống"
      case 0:
        return "Đã đặt"
      case 1:
        return "Đang ởt"
      case 2:
        return "Đang sửa"
      case 3:
        return "Đang sửa"
      case 4:
        return "Đang dọn dẹp"
      default:
        break;
    }
  }
  render() {
    const { now, message, isProtect, listDelegation, nameDelegation, nameManager, nameCompany, idDelegation, numOfChild, numbOfAdult, note, checkOutDate, checkInDate, listRoom, price } = this.state
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
                  <div className="col-lg-3 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <label className="">Đoàn khách</label>
                      <select name="idDelegation" value={idDelegation} onChange={this.onChange} className="mdl-textfield__input">
                        <option value="">Chọn đoàn khách</option>
                        {listDelegation.length > 0 ? listDelegation.map((delegation, index) => {
                          return (
                            <option key={index} value={delegation.id}>{delegation.nameDelegations}</option>
                          )
                        }) : <option value="">Loading data....</option>}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <label className="">Tên đoàn khách</label>
                      <input className="mdl-textfield__input" type="text" onChange={this.onChange} name="nameDelegation" value={nameDelegation} disabled={true} />
                    </div>
                  </div>
                  <div className="col-lg-3 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <label className="">Trưởng đoàn</label>
                      <input className="mdl-textfield__input" type="text" onChange={this.onChange} name="nameManager" value={nameManager} disabled={true} />
                    </div>
                  </div>
                  <div className="col-lg-3 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <label className="">Tên công ty</label>
                      <input className="mdl-textfield__input" type="text" onChange={this.onChange} name="nameCompany" value={nameCompany} disabled={true} />
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
                  <div className="col-lg-2 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width text-center">
                      <label className="">Số lượng người lớn</label>
                    </div>
                  </div>
                  <div className="col-lg-4 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <input className="mdl-textfield__input" type="number" onChange={this.onChange} name="numbOfAdult" value={numbOfAdult} disabled={true} />
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
                  <div className="table-scrollable">
                    <table className="table table-hover table-checkable order-column full-width" id="table">
                      <thead>
                        <tr>
                          <th className="center"> Tên phòng </th>
                          <th className="center"> Loại phòng </th>
                          <th className="center"> Tình trạng phòng hiện tại </th>
                          <th className="center"> Nhân viên dọn phòng </th>
                          <th className="center"> Phiếu đăng ký </th>
                          <th className="center"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          listRoom.length > 0 ? listRoom.map((value, index) => {
                            return (
                              <tr key={index} className="odd gradeX">
                                <td className="center">{value.nameRoom}</td>
                                <td className="center">{value.nameTypeRoom}</td>
                                <td className="center">{this.convertStatus(value.status)}</td>
                                <td className="center">{value.nameHousekeepingStaff}</td>
                                <td className="center">{value.idRegistationForm == null ? "" : value.idRegistationForm}</td>
                              </tr>
                            )
                          }) : (
                            <tr className="spinner-border" role="status">
                              <td className="sr-only">Loading...</td>
                            </tr>
                          )
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-body row">
                  <div className="col-lg-12 p-t-20 text-center">
                    <button onClick={this.bookingRoom} type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Đặt phòng</button>
                    <p style={{ color: "red" }}>{message === 1 ? "Vui lòng nhập ngày check-in và check-out" : message === 2 ? "Vui lòng chọn khách đoàn" : message === 3 ? "Ngày check-in không được lớn hơn ngày check-out" : message === 4 ? "Có lỗi trong quá trình xử lý, vui lòng thử lại" : ""}</p>
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
