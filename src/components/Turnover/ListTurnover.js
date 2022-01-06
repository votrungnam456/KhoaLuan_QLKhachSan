import React, { Component } from 'react'
import { APITurnover, APIRoom, APITypeRoom } from '../../constanst/API';
import * as CallAPI from "../../constanst/CallAPI";
import Title from '../Home/Title';
import { convertDate2, getNow, convertDate } from '../../constanst/Methods';
import ExportExcel from '../Excel/ExportExcel';
export default class ListTurnover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTurnover: [],
      idTypeRoom: "",
      checkInDate: "",
      checkOutDate: "",
      total: 0,
      total2: 0,
      listRoom: [],
      nameRoom: "",
      listTurnoverName: [],
      baseListTurnover: [],
      listTypeRoom: [],
    }
  }
  componentDidMount = () => {
    this.loadData();
  }
  onChange = (ev) => {
    let name = ev.target.name;
    let value = ev.target.value;
    this.setState({
      [name]: value
    })
  }
  search = () => {
    const { checkInDate, checkOutDate } = this.state;
    let data = {};
    if (checkInDate === '' && checkOutDate === '') {
      data = {
        dayStart: '',
        dayEnd: ''
      }
    }
    else if (checkInDate === '' || checkOutDate === '') {
      alert("Vui lòng chọn ngày đầy đủ để tìm kiếm");
      return;
    }
    else if (convertDate2(checkInDate) >= convertDate2(checkOutDate)) {
      alert("Ngày đến không được lớn hơn hoặc bằng ngày đi");
      return;
    }
    else {
      data = {
        dayStart: convertDate2(checkInDate),
        dayEnd: convertDate2(checkOutDate),
      }
    }
    CallAPI.POST(APITurnover, data).then(res => {
      if (res.status === 200) {
        let total = 0;
        res.data.map(data => total += data.totalPrice)
        this.setState({
          listTurnover: res.data,
          total: total
        })
      }
    });
  }
  loadData = () => {
    CallAPI.GET(APIRoom).then(res => {
      if (res.status === 200) {
        this.setState({
          listRoom: res.data
        })
      }
    })
    CallAPI.POST(APITurnover, {
      dayStart: "",
      dayEnd: "",
    }).then(res => {
      if (res.status === 200) {
        this.setState({
          baseListTurnover: res.data
        })
      }
    })
    CallAPI.GET(APITypeRoom).then(res => {
      if (res.status === 200) {
        this.setState({
          listTypeRoom: res.data
        })
      }
    })

  }
  searchFE = () => {
    const { baseListTurnover, nameRoom, idTypeRoom } = this.state;
    const listSearch = [];
    if (nameRoom === '' && idTypeRoom === '') {
      this.setState({
        listTurnoverName: baseListTurnover
      })
    } else {
      if (nameRoom === '') {
        baseListTurnover.map(room => {
          if (room.idTypeRoom === idTypeRoom) {
            listSearch.push(room)
          }
          return true;
        })
      }
      else if (idTypeRoom === '') {
        baseListTurnover.map(room => {
          if (room.nameRoom === nameRoom) {
            listSearch.push(room)
          }
          return true;
        })
      }
      else {
        baseListTurnover.map(room => {
          if (room.nameRoom === nameRoom && room.idTypeRoom === idTypeRoom) {
            listSearch.push(room)
          }
          return true;
        })
      }
      let total = 0;
      this.setState({
        listTurnoverName: listSearch
      }, () => {
        this.state.listTurnoverName.map(data => total += data.totalPrice)
        this.setState({
          total2: total
        })
      })

    }


  }
  render() {
    const { listTurnover, checkInDate, checkOutDate, total, total2, listRoom, nameRoom, listTurnoverName, listTypeRoom, idTypeRoom } = this.state;
    return (
      <div className="page-content-wrapper">
        <div className="page-content">
          <Title title="Doanh Thu"></Title>

          <div className="row">
            <div className="col-md-12">
              <div className="card card-box">
                <div className="card-head">
                  <header>Doanh Thu Theo Ngày</header>
                  <div className="tools">
                    <i className="t-collapse btn-color fa fa-chevron-down" />
                  </div>
                </div>
                <div className="card-body ">
                  <div className="row p-b-20">
                    <div className="col-md-6 col-sm-6 col-6">
                      <div className="btn-group">
                        <ExportExcel tableName="table" fileName={"listTurnoverForDate" + checkInDate + '-' + checkOutDate + getNow(true)}></ExportExcel>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12 col-12">
                    <div className="row">
                      <div className="col-md-4">
                        <span>Ngày đến: </span>
                        <input onChange={this.onChange} value={checkInDate} name="checkInDate" type="date" />
                      </div>
                      <div className="col-md-4">
                        <span>Ngày đi: </span>
                        <input onChange={this.onChange} value={checkOutDate} name="checkOutDate" type="date" />
                      </div>
                      <div className="col-md-4">
                        <button onClick={this.search} className="btn btn-primary"> Tìm kiếm </button>
                      </div>
                    </div>
                  </div>
                  <div className="table-scrollable">
                    <table className="table table-hover table-checkable order-column full-width" id="table">
                      <thead>
                        <tr>
                          <th className="center"> Phòng </th>
                          <th className="center"> Ngày nhận phòng </th>
                          <th className="center"> Ngày trả phòng </th>
                          <th className="center"> Ngày thanh toán </th>
                          <th className="center"> Tiền thuê phòng </th>
                          <th className="center"> Tiền dịch vụ </th>
                          <th className="center"> Tổng tiền </th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          listTurnover.length > 0 ? listTurnover.map((turnover, index) => {
                            return (
                              <tr key={index} className="center">
                                <td>{turnover.nameRoom}</td>
                                <td>{convertDate(turnover.dayCheckIn)}</td>
                                <td>{convertDate(turnover.dayCheckOut)}</td>
                                <td>{convertDate(turnover.dayOfPayment, false)}</td>
                                <td>{turnover.roomRent}</td>
                                <td>{turnover.serviceFee}</td>
                                <td>{turnover.totalPrice}</td>
                              </tr>
                            )
                          }) : <tr>
                            <td colSpan={9}>Không tìm thấy thông tin doanh thu </td>
                          </tr>
                        }
                        <tr><td colSpan={9}>Tổng doanh thu: {total} đồng</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="card card-box">
                <div className="card-head">
                  <header>Doanh Thu Theo Phòng/Loại phòng</header>
                  <div className="tools">
                    <i className="t-collapse btn-color fa fa-chevron-down" />
                  </div>
                </div>
                <div className="card-body ">
                  <div className="row p-b-20">
                    <div className="col-md-6 col-sm-6 col-6">
                      <div className="btn-group">
                        <ExportExcel tableName="table" fileName={"listTurnoverForRoomOrTypeRoom" + getNow(true)}></ExportExcel>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12 col-12">
                    <div className="row">
                      <div className="col-md-4">
                        <select name="nameRoom" onChange={this.onChange} value={nameRoom} className="mdl-textfield__input">
                          <option value="">Chọn phòng</option>
                          {
                            listRoom.map((room, index) => {
                              return (
                                <option key={index} value={room.nameRoom}>{room.nameRoom}</option>
                              )
                            })
                          }
                        </select>
                      </div>
                      <div className="col-md-4">
                        <select name="idTypeRoom" onChange={this.onChange} value={idTypeRoom} className="mdl-textfield__input">
                          <option value="">Chọn loại phòng</option>
                          {
                            listTypeRoom.map((room, index) => {
                              return (
                                <option key={index} value={room.id}>{room.nameTypeRoom}</option>
                              )
                            })
                          }
                        </select>
                      </div>
                      <div className="col-md-4">
                        <button onClick={this.searchFE} className="btn btn-primary"> Tìm kiếm </button>
                      </div>
                    </div>
                  </div>
                  <div className="table-scrollable">
                    <table className="table table-hover table-checkable order-column full-width" id="table">
                      <thead>
                        <tr>
                          <th className="center"> Phòng </th>
                          <th className="center"> Ngày nhận phòng </th>
                          <th className="center"> Ngày trả phòng </th>
                          <th className="center"> Ngày thanh toán </th>
                          <th className="center"> Tiền thuê phòng </th>
                          <th className="center"> Tiền dịch vụ </th>
                          <th className="center"> Tổng tiền </th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          listTurnoverName.length > 0 ? listTurnoverName.map((turnover, index) => {
                            return (
                              <tr key={index} className="center">
                                <td>{turnover.nameRoom}</td>
                                <td>{convertDate(turnover.dayCheckIn)}</td>
                                <td>{convertDate(turnover.dayCheckOut)}</td>
                                <td>{convertDate(turnover.dayOfPayment, false)}</td>
                                <td>{turnover.roomRent}</td>
                                <td>{turnover.serviceFee}</td>
                                <td>{turnover.totalPrice}</td>
                              </tr>
                            )
                          }) : <tr>
                            <td colSpan={9}>Không tìm thấy thông tin doanh thu </td>
                          </tr>
                        }
                        <tr><td colSpan={9}>Tổng doanh thu: {total2} đồng</td></tr>
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
