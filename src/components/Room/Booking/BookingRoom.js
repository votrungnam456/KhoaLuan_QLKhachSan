import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { APIRoom, APITypeRoom, APICustomer,APIDelegation } from '../../../constanst/API';
import * as CallAPI from "../../../constanst/CallAPI";
import Title from '../../Home/Title';
import RoomCard from './RoomCard';
export default class BookingRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listRoom: [],
            listTypeRoom: [],
            idTypeRoom: "",
            checkInDate: "",
            checkOutDate: "",
            message: 0,
            listCustomer: [],
            listDelegation: [],
            listChooseRoom:[]
        }
    }
    componentDidMount() {
        this.loadData();
    }
    onChange = (ev) => {
        this.setState({
            message: 0
        })
        let name = ev.target.name;
        let value = ev.target.value;
        console.log(name,value)
        this.setState({
            [name]: value
        })
    }
    loadData = () => {
        CallAPI.GET(APIRoom).then(res => {
            if (res.status === 200) {
                this.setState({
                    listRoom: res.data
                })
            }
        });
        CallAPI.GET(APITypeRoom).then(res => {
            if (res.status === 200) {
                this.setState({
                    listTypeRoom: res.data
                })
            }
        });
        CallAPI.GET(APICustomer).then(res => {
            if (res.status === 200) {
                this.setState({
                    listCustomer: res.data
                })
            }
        });
        CallAPI.GET(APIDelegation).then(res => {
            if (res.status === 200) {
                this.setState({
                    listDelegation: res.data
                })
            }
        });
    }
    bookingAction = () => {
        let {listChooseRoom} = this.state;
        const {history} = this.props;
        listChooseRoom = [];
        const rooms = document.getElementsByClassName("profile-header")
        Array.from(rooms).forEach(room => {
            if (room.classList.contains("bg-primary")) {
                listChooseRoom.push(room.id);
            }
        })
        if(listChooseRoom.length <= 0){
            alert("Vui lòng chọn phòng để đặt");
        }else if(listChooseRoom.length === 1){
            history.push("/booking-room/booking-detail-one/"+listChooseRoom[0])
        }
        else{
            history.push("/booking-room/booking-detail-delegation/"+listChooseRoom.join(";"))
        }
    }
    render() {
        const { listRoom, listTypeRoom,checkInDate,checkOutDate } = this.state;
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                <Title title="Đặt phòng"></Title>
                    <div className="row">
                        <div className="col-md-3">
                            <label>Ngày đến: </label>
                            <input onChange={this.onChange} value={checkInDate} name="checkInDate" type="datetime-local" />
                        </div>
                        <div className="col-md-3">
                            <label>Ngày đi: </label>
                            <input onChange={this.onChange} value={checkOutDate} name="checkOutDate" type="datetime-local" />
                        </div>
                        <div className="col-md-3">
                            <label>Loại phòng: </label>
                            <select name="idTypeRoom" onChange={this.onChange} className="mdl-textfield__input">
                                <option value="">Chọn loại phòng</option>
                                {listTypeRoom.length > 0 ? listTypeRoom.map((typeRoom, index) => {
                                    if (typeRoom.details.length > 0) {
                                        return (
                                            <option key={index} value={typeRoom.id}>{typeRoom.nameTypeRoom}</option>
                                        )
                                    }
                                }) : <option value="">Loading data....</option>}
                            </select>
                        </div>
                        <div className="col-md-3">
                            <button className="btn btn-primary"> Tìm kiếm </button>
                        </div>
                        <div className="col-md-3">
                            <button onClick={this.bookingAction} className="btn btn-primary"> Đặt phòng </button>
                        </div>
                    </div>
                    <div className="row">
                        {
                            listRoom.length > 0 ? listRoom.map((value, index) => {
                                return (
                                    <RoomCard room={value} index={index} key={index}></RoomCard>
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
