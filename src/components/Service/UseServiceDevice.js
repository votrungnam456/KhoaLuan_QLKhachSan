import React, { Component } from 'react'
import { APIBookingRoom, APIService, APIRoom, APIDevice, APIUseServiceDevice } from '../../constanst/API';
import * as CallAPI from "../../constanst/CallAPI";
import Title from '../Home/Title';
export default class UseServiceDevice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listFilterData: [],
      listService: [],
      listChoseService: [],
      listRoom: [],
      listCustomers: [],
      listDevice: [],
      idRoom: "",
      idCustomer: "",
      quantity: 0,
      type: -1,
      idType: ""
    }
  }
  componentDidMount() {
    CallAPI.GET(APIService).then(res => {
      if (res.status === 200) {
        this.setState({
          listService: res.data
        })
      }
      else {
        alert("get data service failed");
      }
    })
    CallAPI.GET(APIDevice).then(res => {
      if (res.status === 200) {
        this.setState({
          listDevice: res.data
        })
      }
      else {
        alert("get data device failed");
      }
    })
    this.getData();
  }
  getData = async () => {
    this.setState({
      listRoomHasCheckIn: [],
    })
    await CallAPI.GET(APIBookingRoom).then(res => {
      if (res.status === 200) {
        let filterData = [];
        res.data.map(data => {
          if (data.status === 1) {
            filterData.push(data);
          }
          return true;
        })
        this.setState({
          listFilterData: filterData
        })
      }
      else {
        alert("Get data failed");
      }
    })
    this.state.listFilterData.map(data => {
      data.rooms.map(room => {
        this.setState({
          listRoom: [...this.state.listRoom, room]
        })
        return true;
      })
      return true;
    })
  }
  registerService = () => {
    const { idRoom, listFilterData, idCustomer, quantity, type, idType } = this.state;
    if (idRoom === '') {
      alert("Vui lòng chọn phòng");
    }
    else if (idCustomer === '') {
      alert("Vui lòng chọn khách hàng");
    }
    else if (type === -1) {
      alert("Vui lòng chọn loại hình dịch vụ hoặc thiết bị")
    }
    else if (idType === "") {
      alert("Vui lòng chọn dịch vụ hoặc thiết bị")
    }
    else if (quantity === 0) {
      alert("Số lượng phải lớn hơn 0")
    }
    else {
      //Đăng ký dịch vụ
      let idRegister = "";
      listFilterData.map(register => {
        let index = register.rooms.findIndex(room => room.id === idRoom)
        if (index !== -1) {
          idRegister = register.idRegistration;
        }
        return true;
      })
      const data = {
        idRegistration: idRegister,
        idCustomer: idCustomer,
        idType,
        quantity: parseInt(quantity),
        type: parseInt(type),
        description: "",
      }
      CallAPI.POST(APIUseServiceDevice, data).then(res => {
        if (res.status === 200) {
          alert("Đăng ký sử dụng thành công");
          this.setState({
            idRoom: "",
            idCustomer: "",
            quantity: 0,
            type: -1,
            idType: ""
          })
        }
        else {
          alert("get data service failed");
        }
      })
    }
  }
  onChange = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;
    this.setState({
      [name]: value
    })
    if (name === "idRoom") {
      CallAPI.GET(APIRoom + "/" + value).then(res => {
        if (res.status === 200) {
          this.setState({
            listCustomers: res.data.infoCustomerBooking.customers
          })
        } else {
          alert("Lấy data khách hàng thất bại")
        }
      })
    }
  }
  render() {
    const { listService, listRoom, listCustomers, quantity, listDevice, idCustomer, type, idRoom, idType } = this.state;
    return (
      <div className="page-content-wrapper">
        <div className="page-content">
          <Title title="Đặt dịch vụ/thiết bị cho khách"></Title>
          <div className="row">
            <div className="col-sm-12">
              <div className="card-box">
                <div className="card-header ">
                  <p className="text-center font-bold" style={{ fontSize: "20px" }}>Sử dụng dịch vụ/thiết bị</p>
                </div>

                <div className="card-body ">
                  <div className="row">
                    <div className="col-4 p-t-20">
                      <label className="">Phòng</label>
                      <select name="idRoom" onChange={this.onChange} value={idRoom} className="mdl-textfield__input">
                        <option value="">Chọn phòng</option>
                        {
                          listRoom.map((room, index) => {
                            return (
                              <option key={index} value={room.id}>{room.nameRoom}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                    <div className="col-4 p-t-20">
                      <label className="">Khách hàng</label>
                      <select name="idCustomer" onChange={this.onChange} value={idCustomer} className="mdl-textfield__input">
                        <option value="">Chọn khách hàng</option>
                        {
                          listCustomers.map((customer, index) => {
                            return (
                              <option key={index} value={customer.id}>{customer.name}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                    <div className="col-4 p-t-20">
                      <label className="">Loại hình</label>
                      <select name="type" onChange={this.onChange} value={type} className="mdl-textfield__input">
                        <option value={-1}>Chọn loại hình</option>
                        <option value={1}>Dịch vụ</option>
                        <option value={0}>Thiết bị</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6 p-t-20">
                      <label className="">Dịch vụ/Thiết bị</label>
                      <select name="idType" onChange={this.onChange} value={idType} className="mdl-textfield__input">
                        <option value="">Chọn dịch vụ/Thiết bị</option>
                        {
                          type === "1" ?
                            listService.map((service, index) => {
                              return (
                                <option key={index} value={service.id}>{service.nameService}</option>
                              )
                            }) : type === "0" ? listDevice.map((device, index) => {
                              return (
                                <option key={index} value={device.id}>{device.nameHotelDevice}</option>
                              )
                            }) : ""
                        }
                      </select>
                    </div>
                    <div className="col-6 p-t-20">
                      <label className="">Số lượng</label>
                      <input className="full-width" name="quantity" type="number" value={quantity} onChange={this.onChange}></input>
                    </div>
                  </div>
                  <div className="col-lg-12 p-t-20 text-center">
                    <button onClick={this.registerService} type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Sử dụng dịch vụ/thiết bị</button>
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
