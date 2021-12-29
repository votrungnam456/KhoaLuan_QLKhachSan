import React, { Component } from 'react'
import { APIRoom,APIBookingRoom } from '../../../constanst/API';
import * as CallAPI from "../../../constanst/CallAPI";
import Title from '../../Home/Title';

export default class ChangeRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listRoom: [],
      listRegistation: [],
      idRoomOld:'',
      idRoomNew:'',
    }
  }
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    this.setState({
      listRoomHasCheckIn: [],
    })
    CallAPI.GET(APIRoom).then(res => {
      if (res.status === 200) {
        this.setState({
          listRoom: res.data
        })
      }
      else {
        alert("get data device failed");
      }
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
  changeRoomAction = () => {
   
    
  }
  onChange = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;
    this.setState({
      [name]: value
    })
  }
  render() {
    const { listRoom, listCustomers, quantity, listDevice, idCustomer, idRoom, idType } = this.state;
    return (
      <div className="page-content-wrapper">
        <div className="page-content">
          <Title title="Đổi phòng"></Title>
          <div className="row">
            <div className="col-sm-12">
              <div className="card-box">
                <div className="card-header ">
                  <p className="text-center font-bold" style={{ fontSize: "20px" }}>Đổi phòng</p>
                </div>
                <div className="card-body ">
                  <div className="row">
                    <div className="col-6 p-t-20">
                      <label className="">Phòng</label>
                      <select name="idRoom" onChange={this.onChange} value={idRoom} className="mdl-textfield__input">
                        <option value="">Chọn phòng</option>
                        {/* {
                          listRoom.map((room, index) => {
                            return (
                              <option key={index} value={room.id}>{room.nameRoom}</option>
                            )
                          })
                        } */}
                      </select>
                    </div>
                    <div className="col-6 p-t-20">
                      <label className="">Khách hàng</label>
                      <select name="idCustomer" onChange={this.onChange} value={idCustomer} className="mdl-textfield__input">
                        <option value="">Chọn khách hàng</option>
                        {/* {
                          listCustomers.map((customer, index) => {
                            if(customer){
                              return (
                                <option key={index} value={customer.id}>{customer.name}</option>
                              )
                            }
                            return true;
                          })
                        } */}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12 p-t-20 text-center">
                    <button onClick={this.changeRoomAction} type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Đổi phòng</button>
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
