import React, { Component } from 'react'
import * as CallAPI from "../../constanst/CallAPI";
import { APIRole } from '../../constanst/API';
import Title from '../Home/Title';
export default class EditRole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      nameRole: "",
      message: 0
    }
  }
  componentDidMount() {
    CallAPI.GET(APIRole + "/" + this.props.match.params.idRole).then(res => {
      if (res.status === 200) {
        this.setState({
          code: res.data.codeRole,
          nameRole: res.data.nameRole
        })
      }
      else {
        alert("Load data failed!");
      }
    })
  }
  onChange = (ev) => {
    let name = ev.target.name;
    let value = ev.target.value;
    this.setState({
      [name]: value
    })
  }
  editRoom = (ev) => {
    const { code, nameRole } = this.state
    const { history } = this.props
    ev.preventDefault();
    if (code === "" || nameRole === "") {
      this.setState({
        message: 1
      })
    }
    else {
      const roleEdit = {
        code, nameRole
      }
      CallAPI.PUT(APIRole + "/" + this.props.match.params.idRole, roleEdit).then(res => {
        if (res.status === 200) {
          history.push("/list-role");
        }
        else {
          this.setState({
            message: 2
          })
        }

      });
    }

  }
  render() {
    const { code, nameRole, message } = this.state
    return (
      <div className="page-content-wrapper">
        <div className="page-content">
        <Title title="Phân quyền / chức vụ"></Title>
          <div className="row">
            <div className="col-sm-12">
              <div className="card-box">
                <div className="card-head">
                  <header>Sửa thông tin quyền / chức vụ</header>
                  <button id="panel-button" className="mdl-button mdl-js-button mdl-button--icon pull-right" data-upgraded=",MaterialButton">
                    <i className="material-icons">more_vert</i>
                  </button>
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
                    <button onClick={this.editRoom} type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Sửa thông tin phòng</button>
                    <p style={{ color: "red" }} >{message === 1 ? "Thông tin không được để trống" : message === 2 ? "Sửa thông tin thất bại, vui lòng kiểm tra lại thông tin và thử lại" : ""}</p>
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
