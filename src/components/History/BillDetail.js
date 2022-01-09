import React, { Component } from 'react'
import Title from '../Home/Title'
import { APICheckOutRoom,APIBill } from '../../constanst/API';
import * as CallAPI from "../../constanst/CallAPI";
import { convertDate } from '../../constanst/Methods';
import RoomBillItem from './RoomBillItem';
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
      dataBill:{},
    }
  }
  componentDidMount() {
    CallAPI.GET(APIBill + "/" + this.props.match.params.idRegisterForm).then(res => {
      if (res.status === 200) {
        this.setState({
          dataBill:res.data,
          listCustomer:res.data.infoRegistration.customers,
          numberOfChild: res.data.infoRegistration.numberOfChild,
          bookingDate: convertDate(res.data.infoRegistration.bookingDate, false),
          checkInDate: convertDate(res.data.infoRegistration.checkInDate),
          checkOutDate: convertDate(res.data.infoRegistration.checkOutDate),
          note: res.data.infoRegistration.note,
          price: res.data.infoRegistration.intoMoney,
          rooms: res.data.infoRoom,
          totalPrice: res.data.totalMoney,
        })
      }
    })
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
                      <RoomBillItem customers={room.customers} logCustomer={room.logCustomers} key={index} idRoom={room.idRoom}></RoomBillItem>                     
                    )
                  })}
                </div>
                <div className="card-body row">
                  <div className="col-lg-12 p-t-20 text-center">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <label className="">Tổng tiền: {totalPrice} đồng</label>
                    </div>
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
