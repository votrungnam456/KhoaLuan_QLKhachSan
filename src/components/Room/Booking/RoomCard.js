import React, { Component } from 'react'
import { convertStatus } from '../../../constanst/Methods';
export default class RoomCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  toggleChose = () => {
    const card = document.getElementById(this.props.room.id);
    if (card.classList.contains("bg-b-purple")) {
      card.classList.remove("bg-b-purple")
      card.classList.add("bg-primary")
    }
    else if (card.classList.contains("bg-primary")) {
      card.classList.add("bg-b-purple")
      card.classList.remove("bg-primary")
    }
  }
  render() {
    const { room } = this.props;
    return (
      <div className="room-card col-md-3">
        <div className="card">
          <div onClick={this.toggleChose} className="m-b-20">
            <div className="doctor-profile">
              <div id={room.id} className="profile-header bg-b-purple">
                <div className="user-name">{room.nameRoom}</div>
              </div>
              <img src="./assets/img/room.png" className="user-img" alt="" />
              {/* <p>
                {room.description}
              </p> */}
              <div>
                <p>
                  Loại phòng: {room.nameTypeRoom}
                </p>
                <p>
                  Tình Trạng: {convertStatus(room.status)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
