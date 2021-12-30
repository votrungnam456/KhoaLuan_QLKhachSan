import React, { Component } from "react";
import {
  APIRoom,
  APIBookingRoom,
  APIChangeRoom,
  APIRoomOld,
  APIRoomNew,
} from "../../../constanst/API";
import * as CallAPI from "../../../constanst/CallAPI";
import Title from "../../Home/Title";

export default class ChangeRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listRoomNew: [],
      listRoomOld: [],
      idRoomOld: "",
      idRoomNew: "",
      idRegister: "",
      idCustomer: "",
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    CallAPI.GET(APIRoomOld).then((res) => {
      if (res.status === 200) {
        this.setState({
          listRoomOld: res.data,
        });
      } else {
        alert("get data device failed");
      }
    });
    await CallAPI.GET(APIRoomNew).then((res) => {
      if (res.status === 200) {
        this.setState({
          listRoomNew: res.data,
        });
      } else {
        alert("Get data failed");
      }
    });
  };
  changeRoomAction = () => {
    const { listRoomNew, listRoomOld, idRoomNew, idRoomOld } = this.state;
    
    if (idRoomNew === "") {
      alert("Vui lòng chọn phòng mới");
    } else if (idRoomOld === "") {
      alert("Vui lòng chọn phòng cũ");
    } else {
      //Change room
      let idRegister = "";
      listRoomOld.map(item => {
        let index = item.infoRegistration.rooms.findIndex(itemRoom => itemRoom.id === idRoomOld)
        if (index !== -1) {
          idRegister = item.infoRegistration.idRegistration;
        }
        return true;
      })
      const data = {
        idRegistration: idRegister,
        idRoomOld,
        idRoomNew,
      }
      console.log(data);
      CallAPI.POST(APIChangeRoom, data).then(res => {
        if (res.status === 200) {
          alert("Thay đổi phòng thành công");
        } else {
          alert("Thay đổi phòng thất bại");
        }
      })
    }
  };
  onChange = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { listRoomNew, listRoomOld, idRoomNew, idRoomOld } = this.state;
    return (
      <div className="page-content-wrapper">
        <div className="page-content">
          <Title title="Đổi phòng"></Title>
          <div className="row">
            <div className="col-sm-12">
              <div className="card-box">
                <div className="card-header ">
                  <p
                    className="text-center font-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Đổi phòng
                  </p>
                </div>
                <div className="card-body ">
                  <div className="row">
                    <div className="col-6 p-t-20">
                      <label className="">Phòng cũ</label>
                      <select
                        name="idRoomOld"
                        onChange={this.onChange}
                        value={idRoomOld}
                        className="mdl-textfield__input"
                      >
                        <option value="">Chọn phòng</option>
                        {listRoomOld.map((room, index) => {
                          return (
                            <option key={index} value={room.id}>
                              {room.nameRoom}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="col-6 p-t-20">
                      <label className="">Phòng mới</label>
                      <select
                        name="idRoomNew"
                        onChange={this.onChange}
                        value={idRoomNew}
                        className="mdl-textfield__input"
                      >
                        <option value="">Chọn phòng</option>
                        {listRoomNew.map((room, index) => {
                          if (room) {
                            return (
                              <option key={index} value={room.id}>
                                {room.nameRoom}
                              </option>
                            );
                          }
                          return true;
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12 p-t-20 text-center">
                    <button
                      onClick={this.changeRoomAction}
                      type="button"
                      className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink"
                    >
                      Đổi phòng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
