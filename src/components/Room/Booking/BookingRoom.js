import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { APIRoom } from '../../../constanst/API';
import * as CallAPI from "../../../constanst/CallAPI";
import RoomCard from './RoomCard';
export default class BookingRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listRoom: []
        }
    }
    componentDidMount() {
        this.loadData();
    }
    loadData = () => {
        CallAPI.GET(APIRoom).then(res => {
            if (res.status === 200) {
                this.setState({
                    listRoom: res.data
                })
            }
        });
    }
    render() {
        const { listRoom } = this.state;
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                    <div className="page-bar">
                        <div className="page-title-breadcrumb">
                            <div className=" pull-left">
                                <div className="page-title">Đặt phòng</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <label>Ngày đến: </label>
                            <input type="datetime-local" />
                        </div>
                        <div className="col-md-3">
                            <label>Ngày đi: </label>
                            <input type="datetime-local" />
                        </div>
                        <div className="col-md-3">
                            <label>Loại phòng: </label>
                            <select className="mdl-textfield__input">
                                <option value="1">Phòng đơn</option>
                                <option value="2">Phòng đôi</option>
                                <option value="3">Phòng đơn - VIP</option>
                                <option value="4">Phòng đôi - VIP</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <button className="btn btn-primary"> Tìm kiếm </button>
                        </div>
                    </div>
                    <div className="row">
                        {
                            listRoom.length > 0 ? listRoom.map((value, index) => {
                                return (
                                    <RoomCard room={value} key={index}></RoomCard>
                                )
                            }) : (

                                <div className="spinner-border" role="status">
                                    <i className="sr-only">Loading...</i>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

        )
    }
}
