import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class RoomDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="page-content-wrapper">
        <div className="page-content">
          <div className="page-bar">
            <div className="page-title-breadcrumb">
              <div className=" pull-left">
                <div className="page-title">Phòng</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card-box">
                <div className="card-head">
                  <header>Chi tiết phòng</header>
                </div>
                <div className="card-body row">
                  <div className="col-lg-6 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <label className="">Tên phòng </label>

                    </div>
                  </div>
                  <div className="col-lg-6 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <label className="">Mô tả</label>

                    </div>
                  </div>
                  <div className="col-lg-6 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <label className="">Loại phòng</label>

                    </div>
                  </div>

                  <div className="col-lg-6 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <label className="">Người phụ trách dọn dẹp</label>

                    </div>
                  </div>
                  <div className="col-lg-6 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <label className="">Tình trạng</label>
                    </div>
                  </div>
                  <div className="col-lg-6 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <label className="">Thông tin khách đang ở</label>
                    </div>
                  </div>
                  <div className="col-lg-12 p-t-20 text-center">
                    <Link to="/edit-room" type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Sửa thông tin phòng</Link>
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
