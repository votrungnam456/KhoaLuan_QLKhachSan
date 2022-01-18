import React, { Component } from 'react'
import { APIClean, APIEmployee, APIRoom } from '../../constanst/API';
import * as CallAPI from "../../constanst/CallAPI";
import { getNow } from '../../constanst/Methods';
import ExportExcel from '../Excel/ExportExcel';
import Title from '../Home/Title';
export default class LogCleaning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSchedule: [],
      listEmployee: [],
      listRoom: [],
      daySearch: '',
      idEmployee: '',
      idRoom: '',
    }
  }
  componentDidMount() {
    this.loadData(true);
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
  }
  loadData = (firstRun = false) => {
    const data = {
      day: '', idEmployee: '', idRoom: ''
    }
    if (firstRun) { data.day = getNow() }
    CallAPI.POST(APIClean+"/log", data).then(res => {
      if (res.status === 200) {
        this.setState({
          listSchedule: res.data
        })
      } else { alert('get schedule failed') }
    });
    CallAPI.GET(APIRoom).then(res => {
      if (res.status === 200) {
        this.setState({
          listRoom: res.data
        })
      } else { alert('get list room failed') }
    })
    CallAPI.GET(APIEmployee).then(res => {
      if (res.status === 200) {
        let listCleaner = [];
        res.data.map(data => {
          if (data.nameRole === 'Nhân viên dọn dẹp') {
            listCleaner.push(data);
          }
          return true;
        })
        this.setState({
          listEmployee: listCleaner
        })
      } else { alert('get list employee failed') }
    })
  }
  search = () => {
    const { daySearch, idEmployee, idRoom } = this.state
    const data = { day: daySearch, idEmployee, idRoom }
    CallAPI.POST(APIClean+"/log", data).then(res => {
      if (res.status === 200) {
        this.setState({
          listSchedule: res.data
        })
      } else { alert('get schedule failed') }
    });
  }
  convertCleanStatus = (status) => {
    switch (status) {
      case 0:
        return 'Đang dọn dẹp'
      case 1:
        return 'Đã dọn dẹp'
      default:
        return 'Chưa dọn dẹp'
    }
  }
  render() {
    const { listEmployee, listSchedule, daySearch, listRoom, idRoom, idEmployee } = this.state;
    return (
      <div className="page-content-wrapper">
        <div className="page-content">
          <Title title="Lịch sử dọn dẹp của nhân viên"></Title>
          <div className="row">
            <div className="col-md-12">
              <div className="card card-box">
                <div className="card-head">
                  <header>Lịch sử dọn dẹp của nhân viên</header>
                  <div className="tools">
                    <i className="t-collapse btn-color fa fa-chevron-down" />
                  </div>
                </div>
                <div className="card-body ">
                  <div className="row p-b-20">
                    <div className="col-md-6 col-sm-6 col-6">
                      <div className="btn-group">
                        <ExportExcel tableName="table" fileName={"CleanScheduling" + getNow(true)}></ExportExcel>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className="col-md-3 col-sm-3 col-3">
                      <label>Ngày: </label>
                      <input onChange={this.onChange} value={daySearch} name="daySearch" type="date" />
                    </div>
                    <div className="col-md-3 col-sm-3 col-3">
                      Phòng: <select name="idRoom" onChange={this.onChange} value={idRoom} className="mdl-textfield__input">
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
                    <div className="col-md-3 col-sm-3 col-3">
                      Nhân viên: <select name="idEmployee" onChange={this.onChange} value={idEmployee} className="mdl-textfield__input">
                        <option value="">Chọn nhân viên dọn dẹp</option>
                        {
                          listEmployee.map((room, index) => {
                            return (
                              <option key={index} value={room.id}>{room.nameEmployee}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                    <div className="col-md-3 col-sm-3 col-3">
                      <button onClick={this.search} className="btn btn-info">Search</button>
                    </div>
                  </div>

                  <div className="table-scrollable">
                    <table className="table table-hover table-checkable order-column full-width" id="table">
                      <thead>
                        <tr>
                          <th className="center"> Tên nhân viên </th>
                          <th className="center"> Phòng </th>
                          <th className="center"> Ngày làm việc </th>
                          <th className="center"> Tình trạng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          listSchedule.length > 0 ? listSchedule.map((value, index) => {
                            return (
                              <tr key={index}>
                                <td className='text-center'>{value.employee.nameEmployee}</td>
                                <td className='text-center'>{value.room.nameRoom}</td>
                                <td className='text-center'>{value.dayWork}</td>
                                <td className='text-center'>{this.convertCleanStatus(value.status)}</td>
                              </tr>
                            )
                          }) : (
                            <tr>
                              <td className="sr-only">Không có dữ liệu dọn dẹp</td>
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
