import React, { Component } from 'react'
import { APIUseServiceDevice } from '../../constanst/API';
import * as CallAPI from "../../constanst/CallAPI";
import { getNow } from '../../constanst/Methods';
import ExportExcel from '../Excel/ExportExcel';
import Title from '../Home/Title';

export default class LogServiceDevice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listLogServiceDevice: [],
      baseListLogServiceDevice:[],
    }
  }
  componentDidMount() {
    this.loadData();
  }
  loadData = () => {
    CallAPI.GET(APIUseServiceDevice).then(res => {
      if (res.status === 200) {
        this.setState({
          listLogServiceDevice: res.data,
          baseListLogServiceDevice:res.data
        })
      }
    });
  }
  search = (ev) => {
    const keySearch = ev.target.value
    if (keySearch === '') {
      this.setState({
        listLogServiceDevice: this.state.baseListLogServiceDevice
      })
      return;
    }
    const listSearch = [];
    this.state.baseListLogServiceDevice.map(list => {
      if (list.infoCustomer.name.includes(keySearch) || list.infoRoom.nameRoom.includes(keySearch) || list.name.includes(keySearch)|| list.description.includes(keySearch)) {
        listSearch.push(list);
      }
      return true;
    })
    this.setState({
      listLogServiceDevice: listSearch
    })
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
x
  render() {
    const { listLogServiceDevice } = this.state;
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
                        <ExportExcel tableName="table" fileName={"logCustomerServiceDevice" + getNow(true)}></ExportExcel>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-6">
                    <label className="search-bar">
                      Search: <input type="text" style={{ display: "inline-block", width: "80%" }} onChange={this.search} className="form-control form-control-sm" />
                    </label>
                  </div>

                  <div className="table-scrollable">
                    <table className="table table-hover table-checkable order-column full-width" id="table">
                      <thead>
                        <tr>
                          <th className="center"> Tên khách hàng </th>
                          <th className="center"> Tên phòng </th>
                          <th className="center"> Dịch vụ/Thiết bị </th>
                          <th className="center"> Số lượng </th>
                          <th className="center"> Giá </th>
                          <th className="center"> Ngày thực hiện </th>
                          <th className="center"> Description </th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          listLogServiceDevice.length > 0 ? listLogServiceDevice.map((value, index) => {
                            return (
                              <tr key={index} className="odd gradeX">
                                <td className="center">{value.infoCustomer.name}</td>
                                <td className="center">{value.infoRoom.nameRoom}</td>
                                <td className="center">{value.name}</td>
                                <td className="center">{value.quantity}</td>
                                <td className="center">{value.totalPrice}</td>
                                <td className="center">{this.convertDate(value.time, false)}</td>
                                <td className="center">{value.description}</td>
                              </tr>
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
