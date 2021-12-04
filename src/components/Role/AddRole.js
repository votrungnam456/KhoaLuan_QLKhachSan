import React, { Component } from 'react'
import * as CallAPI from "../../constanst/CallAPI";
import { APIRole } from '../../constanst/API';
import Title from '../Home/Title';
export default class AddRole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      nameRole: "",
      message: 0
    }
  }
  componentDidMount() {

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
  clearData = () => {
    this.setState({
      code: "",
      nameRole: "",
    })
  }
  addRole = (ev) => {
    const { nameRole, code } = this.state
    ev.preventDefault();
    if (nameRole === "" || code === "") {
      this.setState({
        message: 1
      })
    }
    else {

      const roleAdd = {
        nameRole, code
      }
      CallAPI.POST(APIRole, roleAdd).then(res => {
        if (res.status === 200) {
          this.setState({
            message: 3
          })
          this.clearData();
        }
        else {
          this.setState({
            message: 2
          })
        }
      }).catch(err=>console.log(err.response));
    }
  }
  render() {
    const { nameRole, code,message } = this.state
    return (
      <div className="page-content-wrapper">
        <div className="page-content">
        <Title title="Phân quyền / chức vụ"></Title>
          <div className="row">
            <div className="col-sm-12">
              <div className="card-box">
                <div className="card-head">
                  <header>Thêm quyền / chức vụ</header>
                </div>
                <div className="card-body row">
                  <div className="col-lg-6 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <label className="">Tên quyền/chức vụ</label>
                      <input className="mdl-textfield__input" type="text" value={nameRole} name="nameRole" onChange={this.onChange} />
                    </div>
                  </div>
                  <div className="col-lg-6 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <label className="">Mã Code quyền</label>
                      <input className="mdl-textfield__input" type="text" name="code" value={code} onChange={this.onChange} />
                    </div>
                  </div>
                  <div className="col-lg-12 p-t-20 text-center">
                    <button onClick={this.addRole} type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Thêm nhân viên</button>
                    <p style={message === 3 ? { color: "green" } : { color: "red" }}>{message === 1 ? "Thông tin không được để trống" : message === 2 ? "Thêm thất bại, vui lòng kiểm tra lại thông tin và thử lại" : message === 3 ? "Thêm thành công" : ""}</p>
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
