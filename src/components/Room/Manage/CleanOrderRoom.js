import React, { Component } from 'react'
import { APIRoom,APIClean } from '../../../constanst/API';
import Title from '../../Home/Title'
import * as CallAPI from "../../../constanst/CallAPI";
export default class CleanOrderRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listRoom: []
    }
  }
  async componentDidMount() {
    await this.loadData();
    let listRoomConvert = [];
    this.state.listRoom.map(room => {
      if (room.housekeepingOrder === null) {
        room.housekeepingOrder = 0
      }
      listRoomConvert = [...listRoomConvert, room];
      return true;
    })
    this.setState({
      listRoom: listRoomConvert
    })
  }
  loadData = async () => {
    await CallAPI.GET(APIRoom).then(res => {
      if (res.status === 200) {
        this.setState({
          listRoom: res.data
        })
      }
    })
  }
  onChange = (ev) => {
    this.setState({
      message: 0
    })
    let name = ev.target.name;
    let value = ev.target.value;

    if (name.includes('Order')) {
      let listRoomTemp = this.state.listRoom;
      let index = parseInt(name.split('Order').join(''));
      listRoomTemp[index].housekeepingOrder = value;
      this.setState({
        listRoom: listRoomTemp
      })
    }
  }
  updateSchedule = () =>{
    CallAPI.POST(APIClean + "/save").then(res=>{
      res.status === 200 ? alert("update thông tin thành công") : alert("update thông tin thất bại");
    }).catch(err=>{
      if(err.response.data.code === -23){
        alert("Thông tin chỉ được cập nhật 1 lần trong ngày");
      }
    })
    this.loadData();
  }
  render() {
    const { listRoom } = this.state;
    return (
      <div className="page-content-wrapper">
        <div className="page-content">
          <Title title="Sắp xếp nhân viên dọn phòng"></Title>
          <div className="row">
            <div className="col-md-12">
              <div className="card card-box">
                <div className="card-head">
                  <header>Sắp xếp nhân viên dọn phòng</header>
                  <div className="tools">
                    <i className="t-collapse btn-color fa fa-chevron-down" />
                  </div>
                </div>
                <div className="card-body ">
                  <div className="row p-b-20">
                    <div className="col-md-6 col-sm-6 col-6">
                      <div className="btn-group">
                        <button onClick={this.updateSchedule} id="addRow" className="btn btn-success">
                          Cập nhật nhân viên dọn phòng <i className="fa fa-repeat" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    {
                      listRoom.map((room, index) => {
                        return (
                          <div key={index} className="row">
                            <div className="col-lg-4 p-t-20">
                              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width text-center">
                                <label className="">{room.nameRoom}</label>
                              </div>
                            </div>
                            <div className="col-lg-4 p-t-20">
                              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width text-center">
                                {room.nameEmployee !== null ? <input className="text-center" value={room.nameEmployee} onChange={this.onChange} type="text" name={'Employee' + index} disabled={true}/> : <input className="text-center" value="" type="text" disabled={true}/>}
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
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
