import React, { Component } from 'react'
import * as CallAPI from "../../../constanst/CallAPI";
import { APITypeRoom, APIDevice, APIService, APIDetailType } from '../../../constanst/API';
import Title from '../../Home/Title';
export default class DetailTypeRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listDetail: [],
      listDevice: [],
      listService: [],
      quantity: 0,
      typeDetail: 0,
      selectType: "",
      message: 0
    }
  }
  componentDidMount() {
    this.loadData();
    this.loadDevice();
    this.loadService();
  }
  onChange = (ev) => {
    const { listDetail } = this.state;
    let name = ev.target.name;
    let value = ev.target.value;
    if (name === "typeDetail") {
      value = parseInt(value);
      this.setState({
        quantity: 0,
        selectType: "",
        message: 0
      })
    }
    if (name === "selectType") {
      const index = listDetail.findIndex(item => item.idType === value);
      if (index !== -1) {
        const a = listDetail[index].quantity;
        this.setState({
          quantity: a
        })
      }
      else {
        this.setState({
          quantity: 0
        })
      }
    }
    this.setState({
      [name]: value
    })

  }
  loadData = () => {
    CallAPI.GET(APITypeRoom + "/" + this.props.match.params.idTypeRoom).then(res => {
      if (res.status === 200) {
        this.setState({
          listDetail: res.data.details
        })
      }
      else {
        alert("Load data failed!");
      }
    })
  }
  loadDevice = () => {
    CallAPI.GET(APIDevice).then(res => {
      if (res.status === 200) {
        this.setState({
          listDevice: res.data
        })
      }
      else {
        alert("Load data failed!");
      }
    })
  }
  loadService = () => {
    CallAPI.GET(APIService).then(res => {
      if (res.status === 200) {
        this.setState({
          listService: res.data
        })
      }
      else {
        alert("Load data failed!");
      }
    })
  }
  submitDetailTypeRoom = (type) => {
    const { typeDetail, quantity, selectType, listDetail } = this.state;
    if (parseInt(typeDetail) === 0 || selectType === "" || quantity === "") {
      this.setState({
        message: 1
      })
    }
    else {
      const data = {
        idDetailType: selectType,
        quantity: parseInt(quantity),
        typeDetail: parseInt(typeDetail),
        idTypeRoom: this.props.match.params.idTypeRoom
      }
      if (type === "add") {
        CallAPI.POST(APIDetailType, data).then(res => {
          if (res.status === 200) {
            this.setState({
              message: 3
            })
            this.loadData();
            this.loadDevice();
            this.loadService();
          }
          else {
            this.setState({
              message: 2
            })
          }
        })
      }
      else if (type === "edit") {
        const index = listDetail.findIndex(item => item.idType === selectType);
        if (index !== -1) {
          CallAPI.PUT(APIDetailType+"/" + selectType, data).then(res => {
            if (res.status === 200) {
              this.setState({
                message: 3
              })
              this.loadData();
              this.loadDevice();
              this.loadService();
            }
            else {
              this.setState({
                message: 2
              })
            }
          })
        }
        else {
          alert("Thông tin này chưa có để chỉnh sửa !");
        }
      }
    }

  }
  render() {
    const { listDetail, listService, listDevice, quantity, typeDetail, message } = this.state;
    return (
      <div className="page-content-wrapper">
        <div className="page-content">
          <Title title="Loại phòng"></Title>
          <div className="row">
            <div className="col-md-12">
              <div className="card card-box">

                <div className="card-head">
                  <header>Thêm chi tiết loại phòng</header>
                </div>
                <div className="card-body row">
                  <div className="col-lg-6 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">
                      <label htmlFor="list3" className="">Loại hình</label>
                      <select name="typeDetail" onChange={this.onChange} className="mdl-textfield__input">
                        <option value={0}>Chọn loại hình</option>
                        <option value={2}>Thiết bị</option>
                        <option value={1}>Dịch vụ</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">
                      <label htmlFor="list3" className="">Tên</label>
                      <select name="selectType" onChange={this.onChange} className="mdl-textfield__input" disabled={typeDetail === 0 ? true : false}>
                        <option value="">Chọn tên chi tiết</option>
                        {
                          typeDetail === 2 ?
                            listDevice.map((device, index) => {
                              return (<option key={index} value={device.id}>{device.nameHotelDevice}</option>)
                            })
                            :
                            typeDetail === 1 ?
                              listService.map((device, index) => {
                                return (
                                  <option key={index} value={device.id}>{device.nameService}</option>
                                )
                              })
                              : <option value=""></option>
                        }
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">
                      <label htmlFor="list3" className="">Số lượng</label>
                      <input className="mdl-textfield__input" type="number" name="quantity" onChange={this.onChange} value={quantity} disabled={typeDetail === 0 ? true : false} />
                    </div>
                  </div>
                  <div className="col-lg-12 p-t-20 text-center">
                    <button onClick={() => this.submitDetailTypeRoom("add")} type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Thêm chi tiết loại phòng</button>
                    <button onClick={() => this.submitDetailTypeRoom("edit")} type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Sửa chi tiết loại phòng</button>
                    <p style={message === 3 ? { color: "green" } : { color: "red" }}>{message === 1 ? "Vui lòng chọn và nhập đầy đủ thông tin" : message === 2 ? "Lỗi vui lòng thử lại" : message === 3 ? "Thực hiện thành công" : ""}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="card card-box">
                <div className="card-head">
                  <header>Chi tiết loại phòng</header>
                  <div className="tools">
                    <i className="t-collapse btn-color fa fa-chevron-down" />
                  </div>
                </div>
                <div className="card-body ">
                  <div className="table-scrollable">
                    <table className="table table-hover table-checkable order-column full-width" id="table">
                      <thead>
                        <tr>
                          <th className="center"> Tên </th>
                          <th className="center"> Loại hình </th>
                          <th className="center"> Số lượng </th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          listDetail.length > 0 ? listDetail.map((value, index) => {
                            return (
                              <tr key={index} className="odd gradeX">
                                <td className="center">{value.name}</td>
                                <td className="center">{value.typeDetail === 2 ? "Thiết bị" : value.typeDetail === 1 ? "Dịch vụ" : ""}</td>
                                <td className="center">{value.quantity}</td>
                              </tr>
                            )
                          }) : (<tr></tr>)
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
