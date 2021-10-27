import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { APITypeRoom } from '../../constanst/API';
import * as CallAPI from "../../constanst/CallAPI";
import TypeRoomItem from './TypeRoomItem';
export default class ListTypeRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listTypeRoom:[]
        }
    }
    componentDidMount(){
        this.loadTypeRoom();
    }
    loadTypeRoom = () =>{
        CallAPI.GET(APITypeRoom).then(res=>{
            if(res.status === 200){
                this.setState({
                    listTypeRoom:res.data
                })
            }
        });
    }
    deleteItem = (id) =>{
        CallAPI.DELETE(APITypeRoom + "/" + id).then(res=>{
            if(res.status == 200){
                this.loadTypeRoom();
            }
        });
    }
    render() {
        const {listTypeRoom} = this.state;
        
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                    <div className="page-bar">
                        <div className="page-title-breadcrumb">
                            <div className=" pull-left">
                                <div className="page-title">Phòng</div>
                            </div>
                            {/* <ol className="breadcrumb page-breadcrumb pull-right">
                                <li><i className="fa fa-home" />&nbsp;<a className="parent-item" href="index.html">Home</a>&nbsp;<i className="fa fa-angle-right" />
                                </li>
                                <li><a className="parent-item" href>Booking</a>&nbsp;<i className="fa fa-angle-right" />
                                </li>
                                <li className="active">All Bookings</li>
                            </ol> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card card-box">
                                <div className="card-head">
                                    <header>Danh sách loại phòng</header>
                                    <div className="tools">
                                        <i className="fa fa-repeat btn-color box-refresh" />
                                        <i className="t-collapse btn-color fa fa-chevron-down" />
                                    </div>
                                </div>
                                <div className="card-body ">
                                    <div className="row p-b-20">
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="btn-group">
                                                <Link to="/add-type-room" id="addRow" className="btn btn-info">
                                                    Thêm loại phòng <i className="fa fa-plus" />
                                                </Link>
                                            </div>
                                            <div className="btn-group">
                                                <button id="" className="btn btn-success">
                                                    Làm mới <i className="fa fa-repeat" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="btn-group pull-right">
                                                <i className="btn deepPink-bgcolor  btn-outline dropdown-toggle" data-toggle="dropdown">Tools
                                                    <i className="fa fa-angle-down" />
                                                </i>
                                                <ul className="dropdown-menu pull-right">
                                                    <li>
                                                        <a href=" ">
                                                            <i className="fa fa-print" /> Print </a>
                                                    </li>
                                                    <li>
                                                        <a href=" ">
                                                            <i className="fa fa-file-pdf-o" /> Save as PDF </a>
                                                    </li>
                                                    <li>
                                                        <a href=" ">
                                                            <i className="fa fa-file-excel-o" /> Export to Excel </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-6">
                                        <label className="search-bar">
                                            Search: <input type="text" style={{ display: "inline-block", width: "80%" }} className="form-control form-control-sm" />
                                        </label>
                                    </div>

                                    <div className="table-scrollable">
                                        <table className="table table-hover table-checkable order-column full-width" id="example4">
                                            <thead>
                                                <tr>
                                                    <th className="center"> Tên loại phòng </th>
                                                    <th className="center"> Giá </th>
                                                    <th className="center"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                    listTypeRoom.length >0 ? listTypeRoom.map((value,index)=>{
                                                        return (
                                                            <TypeRoomItem deleteItem={this.deleteItem} typeRoom={value} key={index}></TypeRoomItem>
                                                        )
                                                    }):(
                                                        <tr className="spinner-border" role="status">
                                                            <td className="sr-only">Loading...</td>
                                                        </tr>
                                                    )
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
