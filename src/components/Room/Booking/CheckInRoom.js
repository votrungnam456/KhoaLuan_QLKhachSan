import React, { Component } from 'react'
import Title from '../../Home/Title'
import { APIBookingRoom,APICheckInRoom} from '../../../constanst/API';
import * as CallAPI from "../../../constanst/CallAPI";
import { Link } from 'react-router-dom';
export default class CheckInRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listRegister: [],
            listBookingOne: [],
            listBookingDelegation: [],
        }
    }
    componentDidMount() {
        this.getData();
    }
    getData = async () => {
        this.setState({
            listBookingDelegation: [],
            listBookingOne: []
        })
        await CallAPI.GET(APIBookingRoom).then(res => {
            console.log(res.data);
            if (res.status === 200) {
                let filterData = [];
                res.data.map(data =>{
                    if(data.status === 0){
                        filterData.push(data);
                    }
                })
                this.setState({
                    listRegister: filterData
                })
            }
            else {
                alert("Get data failed");
            }
        })
        this.state.listRegister.map(x => {
            if (x.type === 0) {
                this.setState({
                    listBookingDelegation: [...this.state.listBookingDelegation, x]
                })
            } else {
                this.setState({
                    listBookingOne: [...this.state.listBookingOne, x]
                })
            }
        })
    }
    convertDate = (longTime, type = true) => {
        const date = new Date(longTime);
        if (type) {
            return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        }
        else {
            return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        }
    }
    convertDisplayCustomer = (data) => {
        let result = "";
        data.map((x, index) => {
            index === data.length - 1 ? result += x.name : result += x.name + ",";;
        });
        return result;
    }
    checkInRoom = (idRegister) => {
        CallAPI.POST(APICheckInRoom + idRegister).then(res=>{
            if(res.status === 200){
                alert("Nhận phòng thành công");
                this.getData();
            }
            else{
                alert("Thất bại")
                this.getData();
            }
        })
    }
    render() {
        const { listBookingOne,listBookingDelegation } = this.state
        // console.log(this.state.listBookingOne)
        // console.log(this.state.listBookingDelegation)
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                    <Title title="Nhận phòng"></Title>
                    <div className="row">
                        <div className="col-md-4">
                            <label>Tên khách hàng: </label>
                            <select className="mdl-textfield__input">
                                <option value="1">Nguyễn Văn A</option>
                                <option value="2">Cao Quang Sơn</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label>CMND: </label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-primary"> Tìm kiếm </button>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card card-box">
                                <div className="card-head">
                                    <header>Danh sách đặt phòng khách đơn</header>
                                    <div className="tools">
                                        <i className="t-collapse btn-color fa fa-chevron-down" />
                                    </div>
                                </div>
                                <div className="card-body ">
                                    <div className="table-scrollable">
                                        <table className="table table-hover table-checkable order-column full-width" id="example4">
                                            <thead>
                                                <tr>
                                                    <th className="center"> Phòng </th>
                                                    <th className="center"> Nhân viên thực hiện </th>
                                                    <th className="center"> Ngày đặt </th>
                                                    <th className="center"> Ngày nhận phòng </th>
                                                    <th className="center"> Ngày trả phòng </th>
                                                    <th className="center"> Khách hàng </th>
                                                    <th className="center"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    listBookingOne.length > 0 ? listBookingOne.map((value, index) => {
                                                        return (
                                                            <tr key={index} className="odd gradeX">
                                                                <td className="center">{value.rooms[0].nameRoom}</td>
                                                                <td className="center">{value.employee.nameEmployee}</td>
                                                                <td className="center">{this.convertDate(value.bookingDate, false)}</td>
                                                                <td className="center">{this.convertDate(value.checkInDate)}</td>
                                                                <td className="center">{this.convertDate(value.checkOutDate)}</td>
                                                                <td className="center">{this.convertDisplayCustomer(value.customers)}</td>
                                                                <td className="center">
                                                                    <button onClick={()=> this.checkInRoom(value.idRegistration)} className="btn btn-success btn-tbl-edit btn-xs">
                                                                        <i title="Nhận phòng" className="fa fa-plus" />
                                                                    </button>
                                                                    <Link to={"/check-in-room/detail/"+ value.idRegistration} className="btn btn-primary btn-tbl-edit btn-xs">
                                                                        <i className="fa fa-info" />
                                                                    </Link>
                                                                    <button className="btn btn-tbl-delete btn-xs">
                                                                        <i className="t-close btn-color fa fa-times" />
                                                                    </button>
                                                                </td>
                                                            </tr>

                                                        )
                                                    }) : <tr>
                                                        <td className="center" colSpan="7"> Không có phòng nào đã đặt </td>
                                                    </tr>
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card card-box">
                                <div className="card-head">
                                    <header>Danh sách đặt phòng khách đoàn</header>
                                    <div className="tools">
                                        <i className="t-collapse btn-color fa fa-chevron-down" />
                                    </div>
                                </div>
                                <div className="card-body ">
                                    <div className="table-scrollable">
                                        <table className="table table-hover table-checkable order-column full-width" id="example4">
                                            <thead>
                                                <tr>
                                                    <th className="center"> Phòng </th>
                                                    <th className="center"> Nhân viên thực hiện </th>
                                                    <th className="center"> Ngày đặt </th>
                                                    <th className="center"> Ngày nhận phòng </th>
                                                    <th className="center"> Ngày trả phòng </th>
                                                    <th className="center"> Trưởng đoàn </th>
                                                    <th className="center"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    listBookingDelegation.length > 0 ? listBookingDelegation.map((value, index) => {
                                                        return (
                                                            <tr key={index} className="odd gradeX">
                                                                <td className="center">{value.rooms[0].nameRoom}</td>
                                                                <td className="center">{value.employee.nameEmployee}</td>
                                                                <td className="center">{this.convertDate(value.bookingDate, false)}</td>
                                                                <td className="center">{this.convertDate(value.checkInDate)}</td>
                                                                <td className="center">{this.convertDate(value.checkOutDate)}</td>
                                                                <td className="center">{this.convertDisplayCustomer(value.customers)}</td>
                                                                <td className="center">
                                                                    <button onClick={()=>this.checkInRoom(value.idRegistration)}  className="btn btn-success btn-tbl-edit btn-xs">
                                                                        <i title="Nhận phòng" className="fa fa-plus" />
                                                                    </button>
                                                                    <Link to={"/check-in-room/detail/"+ value.idRegistration} className="btn btn-primary btn-tbl-edit btn-xs">
                                                                        <i className="fa fa-info" />
                                                                    </Link>
                                                                    <button className="btn btn-tbl-delete btn-xs">
                                                                        <i className="t-close btn-color fa fa-times" />
                                                                    </button>
                                                                </td>
                                                            </tr>

                                                        )
                                                    }) : <tr>
                                                        <td className="center" colSpan="7"> Không có phòng nào đã đặt </td>
                                                    </tr>
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
