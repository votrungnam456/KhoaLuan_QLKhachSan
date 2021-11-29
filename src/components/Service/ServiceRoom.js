import React, { Component } from 'react'
import Title from '../Home/Title'
import { APIBookingRoom, APIService } from '../../constanst/API';
import * as CallAPI from "../../constanst/CallAPI";
import RoomCard from '../Room/Booking/RoomCard';
export default class ServiceRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listRegister: [],
      listRoomHasCheckIn: [],
      listService: [],
      listChoseService: []
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
          if (data.status === 1) {
            filterData.push(data);
          }
        })
        this.setState({
          listRegister: filterData
        })
      }
      else {
        alert("Get data failed");
      }
    })
    this.state.listRegister.map(x => {
      x.rooms.map(room => this.setState({
        listRoomHasCheckIn: [...this.state.listRoomHasCheckIn, room]
      }))
    })
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
  registerService = () =>{
    const {listChoseService} = this.state;
    let listChooseRoom = [];
    const rooms = document.getElementsByClassName("profile-header")
    Array.from(rooms).forEach(room => {
        if (room.classList.contains("bg-primary")) {
            listChooseRoom.push(room.id);
        }
    })
    if(listChooseRoom.length > 0){
      alert("Vui lòng chọn phòng để sử dụng dịch vụ");
    }
    else if(listChoseService.length >0){
      alert("Vui lòng chọn chọn dịch vụ cần sử dụng");
    }
    else{
      //Đăng ký dịch vụ
    }
  }
  render() {
    const { listRoomHasCheckIn, listService } = this.state;
    return (
      <div className="page-content-wrapper">
        <div className="page-content">
          <Title title="Đặt dịch vụ cho phòng"></Title>
          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                {listRoomHasCheckIn.map((room, index) => {
                  return (
                    <RoomCard room={room} key={index}></RoomCard>
                  )
                })}
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
