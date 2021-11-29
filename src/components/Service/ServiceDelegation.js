import React, { Component } from 'react'
import { APIBookingRoom, APIService, APIDelegation, APIRoom } from '../../constanst/API';
import * as CallAPI from "../../constanst/CallAPI";
import Title from '../Home/Title';
import RoomCard from '../Room/Booking/RoomCard';
export default class ServiceDelegation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listFilterData: [],
      listService: [],
      listChoseService: [],
      listDelegation: [],
      idDelegation: "",
      idRoom:"",
      listRoom:[],
      listCustomers:[],
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
          if (data.status === 1 && data.type === 0) {
            filterData.push(data);
          }
        })
        this.setState({
          listFilterData: filterData
        })
      }
      else {
        alert("Get data failed");
      }
    })
    console.log(this.state.listFilterData)
    this.state.listFilterData.map(data => {
      this.setState({
        listDelegation: [...this.state.listDelegation, data.delegation]
      })
    })
    console.log(this.state.listDelegation)
    // this.state.listRegister.map(x => {
    //   x.rooms.map(room => this.setState({
    //     listRoomHasCheckIn: [...this.state.listRoomHasCheckIn, room]
    //   }))
    // })
  }
  handleChecked = (ev) => {
    // console.log(ev.target.value);
    if (ev.target.checked) {
      this.setState({
        listChoseService: [...this.state.listChoseService, ev.target.value]
      }, () => console.log(this.state.listChoseService))
    }
    else if (!ev.target.checked) {
      this.setState({
        listChoseService: this.state.listChoseService.filter((serviceID) => serviceID !== ev.target.value)
      }, () => console.log(this.state.listChoseService))
    }
  }
  registerService = () => {
    const { listChoseService } = this.state;
    let listChooseRoom = [];
    const rooms = document.getElementsByClassName("profile-header")
    Array.from(rooms).forEach(room => {
      if (room.classList.contains("bg-primary")) {
        listChooseRoom.push(room.id);
      }
    })
    if (listChooseRoom.length > 0) {
      alert("Vui lòng chọn phòng để sử dụng dịch vụ");
    }
    else if (listChoseService.length > 0) {
      alert("Vui lòng chọn chọn dịch vụ cần sử dụng");
    }
    else {
      //Đăng ký dịch vụ
    }
  }
  onChange = (ev) => {
    console.log(ev.target.name,ev.target.value);
    const name = ev.target.name;
    const value = ev.target.value;
    this.setState({
      [name]:value
    })
    if(name === "idDelegation"){
      let index = this.state.listFilterData.findIndex(data => data.delegation.id === value)
      if(index !== -1){
        this.setState({
          listRoom:this.state.listFilterData[index].rooms
        })
      }
      else{
        this.setState({
          listRoom:[]
        })
      }
    }
    else if(name === "idRoom"){
      CallAPI.GET(APIRoom + "/" + value).then(res=>{
        if(res.status === 200){
          this.setState({
            listCustomers:res.data.infoCustomerBooking.customers
          })
        }else{
          alert("Lấy data khách hàng thất bại")
        }
      })
    }
  }
  render() {
    const { listService, idDelegation, listDelegation,listRoom,listCustomers } = this.state;
    return (
      <div className="page-content-wrapper">
        <div className="page-content">
          <Title title="Đặt dịch vụ cho khách đoàn"></Title>
          <div className="row">
            <div className="col-sm-12">
              <div className="card-box">
                <div className="card-header ">
                  <p className="text-center font-bold" style={{ fontSize: "20px" }}>Danh sách dịch vụ</p>
                </div>

                <div className="card-body ">
                  <div className="row">
                    <div className="col-4">
                      <select name="idDelegation" onChange={this.onChange} className="mdl-textfield__input">
                        <option value="">Chọn đoàn khách đã nhận phòng</option>
                        {
                          listDelegation.map((delegation, index) => {
                            return (
                              <option key={index} value={delegation.id}>{delegation.nameDelegations}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                    <div className="col-4">
                      <select name="idRoom" onChange={this.onChange} className="mdl-textfield__input">
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
                    <div className="col-4">
                      <select name="idCustomer" onChange={this.onChange} className="mdl-textfield__input">
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
                  </div>

                </div>
              </div>
              <div className="card-box">
                <div className="card-header ">
                  <p className="text-center font-bold" style={{ fontSize: "20px" }}>Danh sách dịch vụ</p>
                </div>

                <div className="card-body ">
                  <div className="row">
                    {
                      listService.map((service, index) => {
                        return (
                          <div key={index} className="col-2">
                            <span>{service.nameService} </span>
                            <input value={service.id} onChange={this.handleChecked} type="checkbox"></input>
                          </div>

                        )
                      })
                    }
                  </div>
                  <div className="col-lg-12 p-t-20 text-center">
                    <button onClick={this.registerService} type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Sử dụng dịch vụ</button>
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
