import React, { Component } from 'react'
import Title from '../../Home/Title'
import { APIBookingRoom, APICustomer, APICheckOutRoom } from '../../../constanst/API';
import * as CallAPI from "../../../constanst/CallAPI";
import { Link } from 'react-router-dom';
import { convertDate, convertDisplayCustomer } from '../../../constanst/Methods';
export default class CheckoutRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listRegister: [],
            listBookingOne: [],
            listBookingDelegation: [],
            listCustomer: [],
            idCustomer: "",
            baseListBookingOne: [],
            baseListBookingDelegation: [],
        }
    }
    componentDidMount() {
        this.getData();
    }
    getData = async () => {
        this.setState({
            listBookingDelegation: [],
            listBookingOne: [],
        })
        await CallAPI.GET(APIBookingRoom).then(res => {
            if (res.status === 200) {
                let filterData = [];
                res.data.map(data => {
                    if (data.status === 1) {
                        filterData.push(data);
                    }
                    return true;
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
                    listBookingDelegation: [...this.state.listBookingDelegation, x],
                    baseListBookingDelegation:[...this.state.baseListBookingDelegation, x],
                })
            } else {
                this.setState({
                    listBookingOne: [...this.state.listBookingOne, x],
                    baseListBookingOne:[...this.state.baseListBookingOne, x],
                })
            }
            return true;
        })
        CallAPI.GET(APICustomer).then(res => {
            if (res.status === 200) {
                this.setState({
                    listCustomer: res.data
                })
            }
        })
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
    checkOutRoom = (idRegister) => {
        CallAPI.POST(APICheckOutRoom + idRegister).then(res => {
            if (res.status === 200) {
                alert("Trả phòng thành công");
                this.getData();
            }
            else {
                alert("Thất bại")
                this.getData();
            }
        })
    }
    search = (ev)=>{
        const keySearch = ev.target.value
        const name = ev.target.name;
        if(name === "one"){
            if(keySearch === '') {
                this.setState({
                    listBookingOne:this.state.baseListBookingOne
                })
                return;
            }
            const listSearch = [];
            this.state.baseListBookingOne.map(list =>{
                const customer = convertDisplayCustomer(list.customers)
                if(customer.includes(keySearch)){
                    listSearch.push(list);
                }
                return true
            })
            this.setState({
                listBookingOne:listSearch
            })
        }
        else if(name === "delegation"){
            if(keySearch === '') {
                this.setState({
                    listBookingDelegation:this.state.baseListBookingDelegation
                })
                return;
            }
            const listSearch = [];
            this.state.baseListBookingDelegation.map(list =>{
                if(list.delegation.nameManager.includes(keySearch)){
                    listSearch.push(list);
                }
                return true
            })
            this.setState({
                listBookingDelegation:listSearch
            })
        }
    }
    render() {
        const { listBookingOne, listBookingDelegation} = this.state
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                    <Title title="Trả phòng"></Title>
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
                                <div className="col-md-6 col-sm-6 col-6">
                                        <label className="search-bar">
                                            Search: <input type="text" style={{ display: "inline-block", width: "80%" }} name="one" onChange={this.search} className="form-control form-control-sm" />
                                        </label>
                                    </div>
                                    <div className="table-scrollable">
                                        <table className="table table-hover table-checkable order-column full-width" id="table">
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
                                                                <td className="center">{convertDate(value.bookingDate, false)}</td>
                                                                <td className="center">{convertDate(value.checkInDate)}</td>
                                                                <td className="center">{convertDate(value.checkOutDate)}</td>
                                                                <td className="center">{convertDisplayCustomer(value.customers)}</td>
                                                                <td className="center">
                                                                    <Link to={"/check-out-room/detail/" + value.idRegistration} className="btn btn-success">
                                                                        Trả phòng <i title="Trả phòng" className="fa fa-plus" />
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }) : <tr>
                                                        <td className="center" colSpan="7"> Không có phòng nào đang ở </td>
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
                                <div className="card-body">
                                <div className="col-md-6 col-sm-6 col-6">
                                        <label className="search-bar">
                                            Search: <input type="text" style={{ display: "inline-block", width: "80%" }} name="delegation" onChange={this.search} className="form-control form-control-sm" />
                                        </label>
                                    </div>
                                    <div className="table-scrollable">
                                        <table className="table table-hover table-checkable order-column full-width" id="table">
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
                                                                <td className="center">{convertDate(value.bookingDate, false)}</td>
                                                                <td className="center">{convertDate(value.checkInDate)}</td>
                                                                <td className="center">{convertDate(value.checkOutDate)}</td>
                                                                <td className="center">{value.delegation.nameManager}</td>
                                                                <td className="center">
                                                                    <Link to={"/check-out-room/detail/" + value.idRegistration} className="btn btn-success">
                                                                        Trả phòng <i title="Trả phòng" className="fa fa-plus" />
                                                                    </Link>
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
