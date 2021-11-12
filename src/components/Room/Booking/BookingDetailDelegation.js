import React, { Component } from 'react'
import Title from '../../Home/Title'
import { APIDelegation } from '../../../constanst/API';
import * as CallAPI from "../../../constanst/CallAPI";
export default class BookingDetailDelegation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listDelegation: [],
      nameCompany: "",
      nameManager: "",
      nameDelegation: "",
      idDelegation: "",
      numOfChild: 0,
      numbOfAdult: 0,
      checkInDate: "",
      checkOutDate: "",
      note: "",
      message: 0
    }
  }
  componentDidMount() {
    CallAPI.GET(APIDelegation).then(res => {
      if (res.status === 200) {
        this.setState({
          listDelegation: res.data
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
    if (name === "idDelegation") {
      if (value !== "") {
        CallAPI.GET(APIDelegation + "/" + value).then(res => {
          if (res.status === 200) {
            this.setState({
              nameCompany: res.data.nameCompany,
              nameManager: res.data.nameManager,
              nameDelegation: res.data.nameDelegations,
              numbOfAdult:res.data.numberOfPeople
            })
          }
        });
      }
      else {
        this.setState({
          nameCompany: "",
          nameManager: "",
          nameDelegation: "",
          numbOfAdult:0
        })
      }
    }
  }
  render() {
    const { listDelegation, nameDelegation, nameManager, nameCompany, idDelegation, numOfChild, numbOfAdult, note, checkOutDate, checkInDate } = this.state
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
                      <label className="">Đoàn khách</label>
                      <select name="idDelegation" value={idDelegation} onChange={this.onChange} className="mdl-textfield__input">
                        <option value="">Chọn đoàn khách</option>
                        {listDelegation.length > 0 ? listDelegation.map((customer, index) => {
                          return (
                            <option key={index} value={customer.id}>{customer.name}</option>
                          )
                        }) : <option value="">Loading data....</option>}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-2 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <label className="">Tên đoàn khách</label>
                      <input className="mdl-textfield__input" type="text" onChange={this.onChange} name="nameDelegation" value={nameDelegation} disabled={true} />
                    </div>
                  </div>
                  <div className="col-lg-2 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <label className="">Trưởng đoàn</label>
                      <input className="mdl-textfield__input" type="number" onChange={this.onChange} name="nameManager" value={nameManager} disabled={true} />
                    </div>
                  </div>
                  <div className="col-lg-2 p-t-20">
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
                      <input className="mdl-textfield__input" type="number" onChange={this.onChange} name="numOfChild" value={numOfChild} disabled={true} />
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
                      <input onChange={this.onChange} value={checkInDate} name="checkInDate" type="datetime-local" />
                    </div>
                  </div>
                  <div className="col-lg-2 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width text-center">
                      <label className="">Ngày trả phòng</label>
                    </div>
                  </div>
                  <div className="col-lg-4 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <input onChange={this.onChange} value={checkOutDate} name="checkOutDate" type="datetime-local" />
                    </div>
                  </div>
                </div>
                <div className="card-body row">
                  <div className="col-lg-3 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width text-center">
                      <label className="">Ghi chú</label>
                    </div>
                  </div>
                  <div className="col-lg-7 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <textarea rows="4" cols="50" style={{ border: "1px solid black" }} onChange={this.onChange} value={note} name="note" type="text" />
                    </div>
                  </div>
                </div>
                <div className="card-body row">
                  </div>  
                <div className="card-body row">
                  <div className="col-lg-12 p-t-20 text-center">
                    <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Đặt phòng</button>
                    {/* <p style={message === 4 ? { color: "green" } : { color: "red" }}>{message === 1 ? "Thông tin không được để trống" : message === 2 ? "Số điện thoại phải 10 số":message === 3 ? "Thêm phòng thất bại, vui lòng kiểm tra lại thông tin và thử lại" : message === 4 ? "Thêm thành công" : message === 5 ? "Sai định dạng email" : ""}</p> */}
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
