import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { APIEmployee } from '../../constanst/API';
import * as CallAPI from "../../constanst/CallAPI";
import Title from '../Home/Title';
import EmloyeeItem from './EmloyeeItem';
export default class ListEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listEmployee:[]
        }
    }
    componentDidMount(){
        this.loadData();
    }
    loadData = () =>{
        CallAPI.GET(APIEmployee).then(res=>{
            if(res.status === 200){
                this.setState({
                    listEmployee:res.data
                })
            }
        });
    }
    deleteItem = (id) =>{
        CallAPI.DELETE(APIEmployee + "/" + id).then(res=>{
            if(res.status === 200){
                this.loadData();
            }
        });
    }
    render() {
        const {listEmployee} = this.state;
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                <Title title="Nhân viên"></Title>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card card-box">
                                <div className="card-head">
                                    <header>Danh sách nhân viên</header>
                                    <div className="tools">
                                        <i className="t-collapse btn-color fa fa-chevron-down" />
                                    </div>
                                </div>
                                <div className="card-body ">
                                    <div className="row p-b-20">
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="btn-group">
                                                <Link to="/add-employee" id="addRow" className="btn btn-info">
                                                    Thêm nhân viên<i className="fa fa-plus" />
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
                                                    <th className="center"> Tên nhân viên </th>
                                                    <th className="center"> Giới tính </th>
                                                    <th className="center"> Chứng minh thư </th>
                                                    <th className="center"> Số điện thoại </th>
                                                    <th className="center"> Địa chỉ </th>
                                                    <th className="center"> Chức vụ </th>
                                                    <th className="center"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                    listEmployee.length >0 ? listEmployee.map((value,index)=>{
                                                        return (
                                                            <EmloyeeItem deleteItem={this.deleteItem} employee={value} key={index}></EmloyeeItem>
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
