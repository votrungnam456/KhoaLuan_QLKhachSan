import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { APIRoom } from '../../../constanst/API';
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
    console.log(this.state.listRoom);
    let listRoomConvert = [];
    this.state.listRoom.map(room => {
      if (room.housekeepingOrder === null) {
        room.housekeepingOrder = 0
      }
      listRoomConvert = [...listRoomConvert, room];
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
    });
  }
  deleteItem = (id) => {
    CallAPI.DELETE(APIRoom + "/" + id).then(res => {
      if (res.status === 200) {
        this.loadData();
      }
    });
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
    // this.setState({
    //   [name]: value
    // })
  }
  render() {
    const { listRoom } = this.state;
    return (
      <div className="page-content-wrapper">
        <div className="page-content">
          <Title title="Sắp xếp thứ tự dọn phòng"></Title>
          <div className="row">
            <div className="col-md-12">
              <div className="card card-box">
                <div className="card-head">
                  <header>Thứ tự dọn phòng</header>
                  <div className="tools">
                    <i className="fa fa-repeat btn-color box-refresh" />
                    <i className="t-collapse btn-color fa fa-chevron-down" />
                  </div>
                </div>
                <div className="card-body ">
                  <div className="row p-b-20">
                    <div className="col-md-6 col-sm-6 col-6">
                      <div className="btn-group">
                        <button id="addRow" className="btn btn-success">
                          Làm mới <i className="fa fa-repeat" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    {
                      listRoom.map((room, index) => {
                        return (
                          <div key={index} className="row">
                            <div className="col-lg-6 p-t-20">
                              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width text-center">
                                <label className="">{room.nameRoom}</label>
                              </div>
                            </div>
                            <div className="col-lg-6 p-t-20">
                              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width text-center">
                                {room.housekeepingOrder !== null ? <input className="" value={room.housekeepingOrder} onChange={this.onChange} type="number" name={'Order' + index} /> : ''}
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
