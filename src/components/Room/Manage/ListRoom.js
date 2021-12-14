import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { APIRoom } from '../../../constanst/API';
import * as CallAPI from "../../../constanst/CallAPI";
import Title from '../../Home/Title';
import RoomItem from './RoomItem';
export default class ListRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listRoom:[]
        }
    }
    componentDidMount(){
        this.loadData();
    }
    loadData = () =>{
        CallAPI.GET(APIRoom).then(res=>{
            if(res.status === 200){
                console.log(res.data)
                this.setState({
                    listRoom:res.data
                })
            }
        });
    }
    deleteItem = (id) =>{
        CallAPI.DELETE(APIRoom + "/" + id).then(res=>{
            if(res.status === 200){
                this.loadData();
            }
        });
    }
    render() {
        const {listRoom} = this.state;
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                <Title title="Phòng"></Title>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card card-box">
                                <div className="card-head">
                                    <header>Danh sách phòng</header>
                                    <div className="tools">
                                        <i className="fa fa-repeat btn-color box-refresh" />
                                        <i className="t-collapse btn-color fa fa-chevron-down" />
                                    </div>
                                </div>
                                <div className="card-body ">
                                    <div className="row p-b-20">
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="btn-group">
                                                <Link to="/add-room" id="addRow" className="btn btn-info">
                                                    Thêm phòng <i className="fa fa-plus" />
                                                </Link>
                                            </div>
                                            <div className="btn-group">
                                                <button id="addRow" className="btn btn-success">
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
                                                    <th className="center"> Tên phòng </th>
                                                    <th className="center"> Loại phòng </th>
                                                    <th className="center"> Tình trạng phòng hiện tại </th>
                                                    <th className="center"> Nhân viên dọn phòng </th>
                                                    <th className="center"> Phiếu đăng ký </th>
                                                    <th className="center"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    listRoom.length >0 ? listRoom.map((value,index)=>{
                                                        return (
                                                            <RoomItem deleteItem={this.deleteItem} room={value} key={index}></RoomItem>
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
