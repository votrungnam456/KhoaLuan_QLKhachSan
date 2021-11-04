import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class RoomCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
}
  render() {
    const {room} = this.props;
    return (
      <div className="col-md-4">
        <div className="card">
          <div className="m-b-20">
            <div className="doctor-profile">
              <div className="profile-header bg-b-purple">
                <div className="user-name">{room.nameRoom}</div>
                {/* <div className="name-center">General Manager</div> */}
              </div>
              <img src="./assets/img/room.png" className="user-img" alt="" />
              <p>
              {room.description}
              </p>
              <div>
                <p>
                  Tình Trạng: {room.status === 1 ? "Trống" :room.status === 2 ? "Đang ở" :room.status === 3 ? "Đã đặt" : ""}
                </p>
              </div>
              <div className="profile-userbuttons">
                <Link to={"/room-detail/"+ room.id} className="btn btn-circle deepPink-bgcolor btn-sm">Xem chi tiết</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
