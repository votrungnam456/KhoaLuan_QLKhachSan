import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { APIRoom, APIUseServiceDevice } from '../../constanst/API';
import * as CallAPI from "../../constanst/CallAPI";
import Title from '../Home/Title';
import RoomItem from '../Room/Manage/RoomItem';

export default class LogServiceDevice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listRoom: [],
      listLogServiceDevice: [],
    }
  }
  componentDidMount() {
    this.loadData();
  }
  loadData = () => {
    CallAPI.GET(APIRoom).then(res => {
      if (res.status === 200) {
        this.setState({
          listRoom: res.data
        })
      }
    });
    CallAPI.GET(APIUseServiceDevice).then(res => {
      if (res.status === 200) {
        this.setState({
          listLogServiceDevice: res.data
        })
      }
    });
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
  deleteItem = (id) => {
    CallAPI.DELETE(APIRoom + "/" + id).then(res => {
      if (res.status === 200) {
        this.loadData();
      }
    });
  }
  render() {
    const { listRoom,listLogServiceDevice } = this.state;
    console.log(listLogServiceDevice);
    return (
      <div className="page-content-wrapper">
        <div className="page-content">
          <Title title="Log dịch vụ/thiết bị"></Title>
          <div className="row">
            <div className="col-md-12">
              <div className="card card-box">
                <div className="card-head">
                  <header>Log list</header>
                  <div className="tools">
                    <i className="t-collapse btn-color fa fa-chevron-down" />
                  </div>
                </div>
                <div className="card-body ">
                  <div className="row p-b-20">
                    <div className="col-md-6 col-sm-6 col-6">
                      <div className="btn-group">
                        <Link to="/add-room" id="addRow" className="btn btn-info">
                          Thêm phòng <i className="fa fa-plus" />
                        </Link>
                      </div>
                      <div className="btn-group">
                        <button id="addRow" className="btn btn-success">
                          Làm mới <i className="fa fa-repeat" />
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-6">
                      <div className="btn-group pull-right">
                        <i className="btn deepPink-bgcolor  btn-outline dropdown-toggle" data-toggle="dropdown">Tools
                          <i className="fa fa-angle-down" />
                        </i>
                        <ul className="dropdown-menu pull-right">
                          <li>
                            <a href=" ">
                              <i className="fa fa-print" /> Print </a>
                          </li>
                          <li>
                            <a href=" ">
                              <i className="fa fa-file-pdf-o" /> Save as PDF </a>
                          </li>
                          <li>
                            <a href=" ">
                              <i className="fa fa-file-excel-o" /> Export to Excel </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-6">
                    <label className="search-bar">
                      Search: <input type="text" style={{ display: "inline-block", width: "80%" }} className="form-control form-control-sm" />
                    </label>
                  </div>

                  <div className="table-scrollable">
                    <table className="table table-hover table-checkable order-column full-width" id="example4">
                      <thead>
                        <tr>
                          <th className="center"> Tên khách hàng </th>
                          <th className="center"> Tên phòng </th>
                          <th className="center"> Dịch vụ/Thiết bị </th>
                          <th className="center"> Số lượng </th>
                          <th className="center"> Giá </th>
                          <th className="center"> Ngày thực hiện </th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          listLogServiceDevice.length > 0 ? listLogServiceDevice.map((value, index) => {
                            return (
                              <tr className="odd gradeX">
                                <td className="center">{value.infoCustomer.name}</td>
                                <td className="center">{value.infoRoom.nameRoom}</td>
                                <td className="center">{value.name}</td>
                                <td className="center">{value.quantity}</td>
                                <td className="center">{value.totalPrice}</td>
                                <td className="center">{this.convertDate(value.time,false)}</td>
                              </tr>
                              // <RoomItem deleteItem={this.deleteItem} room={value} key={index}></RoomItem>
                            )
                          }) : (
                            <tr role="status">
                              <td className="sr-only">Không có log nào</td>
                            </tr>
                          )
                        }

                      </tbody>
                    </table>
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
