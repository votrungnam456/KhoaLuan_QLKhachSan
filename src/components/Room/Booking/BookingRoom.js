import React, { Component } from 'react'
import { APIRoom, APITypeRoom, APICustomer, APIDelegation } from '../../../constanst/API';
import * as CallAPI from "../../../constanst/CallAPI";
import Title from '../../Home/Title';
import RoomCard from './RoomCard';
import { convertDate2 } from '../../../constanst/Methods';
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
            listChooseRoom: [],
            now: "",
        }
    }
    componentDidMount() {
        const date = new Date();
        this.setState({
            now: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
        })
        this.loadData();
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
    search = ()=>{
        const { checkInDate,checkOutDate} = this.state;
        if(checkInDate === '' || checkOutDate === ''){
            alert("Vui lòng chọn ngày để tìm kiếm");
            return;
        }
        else if(convertDate2(checkInDate) >= convertDate2(checkOutDate)){
            alert("Ngày đến không được lớn hơn hoặc bằng ngày đi");
            return;
        }
        const data = {
            dayCheckIn:convertDate2(checkInDate),
            dayCheckOut:convertDate2(checkOutDate),
            // idTypeRoom:idTypeRoom
        }
        CallAPI.POST(APIRoom +'/search',data).then(res => {
            if (res.status === 200) {
                this.setState({
                    listRoom: res.data
                })
            }
        });
        // CallAPI.GET(APIRoom + '/search')
    }
    bookingAction = () => {
        let { listChooseRoom,checkInDate,checkOutDate} = this.state;
        const { history } = this.props;
        listChooseRoom = [];
        const rooms = document.getElementsByClassName("profile-header")
        Array.from(rooms).forEach(room => {
            if (room.classList.contains("bg-primary")) {
                listChooseRoom.push(room.id);
            }
        })
        localStorage.setItem("date", JSON.stringify({checkInDate,checkOutDate}));
        if (listChooseRoom.length <= 0) {
            alert("Vui lòng chọn phòng để đặt");
        } else if (listChooseRoom.length === 1) {
            history.push("/booking-room/booking-detail-one/" + listChooseRoom[0])
        }
        else {
            history.push("/booking-room/booking-detail-delegation/" + listChooseRoom.join(";"))
        }
    }
    render() {
        const { listRoom, checkInDate, checkOutDate, now } = this.state;
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                    <Title title="Đặt phòng"></Title>
                    <div className="row">
                        <div className="col-md-3">
                            <label>Ngày đến: </label>
                            <input onChange={this.onChange} value={checkInDate} name="checkInDate" type="date" min={now} />
                        </div>
                        <div className="col-md-3">
                            <label>Ngày đi: </label>
                            <input onChange={this.onChange} value={checkOutDate} name="checkOutDate" type="date" min={now} />
                        </div>
                        <div className="col-md-3">
                            <button onClick={this.search} className="btn btn-primary"> Tìm kiếm </button>
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
                                <div role="status">
                                    <span>Không có thông tin phòng</span>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

        )
    }
}
