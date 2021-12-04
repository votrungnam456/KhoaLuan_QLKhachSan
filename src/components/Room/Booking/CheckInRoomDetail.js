import React, { Component } from 'react'
import Title from '../../Home/Title'
import { APIBookingRoom, APICheckInRoom } from '../../../constanst/API';
import * as CallAPI from "../../../constanst/CallAPI";
import RoomDetailItem from '../RoomDetailItem';
export default class CheckInRoomDetail extends Component {
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
      rooms: []
    }
  }
  componentDidMount() {
    CallAPI.GET(APIBookingRoom + "/" + this.props.match.params.idRegisterForm).then(res => {
      if (res.status === 200) {
        this.setState({
          listCustomer: res.data.customers,
          numberOfChild: res.data.numberOfChild,
          bookingDate: this.convertDate(res.data.bookingDate, false),
          checkInDate: this.convertDate(res.data.checkInDate),
          checkOutDate: this.convertDate(res.data.checkOutDate),
          note: res.data.note,
          price: res.data.intoMoney,
          rooms: res.data.rooms
        })
      }
    })
  }
  checkInRoom = (idRegister) => {
    CallAPI.POST(APICheckInRoom + idRegister).then(res=>{
        if(res.status === 200){
            alert("Nhận phòng thành công");
            this.getData();
        }
        else{
            alert("Thất bại")
            this.getData();
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
    const { numberOfChild, bookingDate, listCustomer, note, checkOutDate, checkInDate, price, rooms } = this.state
    return (
      <div className="page-content-wrapper">
        <div className="page-content">
          <Title title="Nhận phòng"></Title>
          <div className="row">
            <div className="col-sm-12">
              <div className="card-box">
                <div className="card-head">
                  <header>Nhận phòng</header>
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
                      <RoomDetailItem key={index} idRoom={room.id}></RoomDetailItem>
                    )
                  })}
                </div>
                <div className="card-body row">
                  <div className="col-lg-12 p-t-20 text-center">
                    <button onClick={()=>this.checkInRoom(this.props.match.params.idRegisterForm)} type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Nhận phòng</button>
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
