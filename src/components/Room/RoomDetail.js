import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Title from '../Home/Title';
import RoomDetailItem from './RoomDetailItem';
export default class RoomDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="page-content-wrapper">
        <div className="page-content">
          <Title title="Phòng"></Title>
          <div className="row">
            <RoomDetailItem idRoom={this.props.match.params.idRoom}></RoomDetailItem>
            <div className="col-lg-12 p-t-20 text-center">
              <Link to={"/edit-room/" + this.props.match.params.idRoom} type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Sửa thông tin phòng</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
