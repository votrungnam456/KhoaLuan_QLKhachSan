import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { APIService } from '../../constanst/API';
import * as CallAPI from "../../constanst/CallAPI";
import Title from '../Home/Title';
import ServiceItem from './ServiceItem';
export default class ListService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listService: []
        }
    }
    componentDidMount() {
        this.loadService();
    }
    loadService = () => {
        CallAPI.GET(APIService).then(res => {
            if (res.status === 200) {
                this.setState({
                    listService: res.data
                })
            }
        });
    }
    deleteItem = (id) => {
        CallAPI.DELETE(APIService + "/" + id).then(res => {
            if (res.status === 200) {
                this.loadService();
            }
        });
    }


    render() {
        const { listService } = this.state;
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                    <Title title="Dịch vụ"></Title>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card card-box">
                                <div className="card-head">
                                    <header>Danh sách dịch vụ</header>
                                    <div className="tools">
                                        <i className="fa fa-repeat btn-color box-refresh" />
                                        <i className="t-collapse btn-color fa fa-chevron-down" />
                                    </div>
                                </div>
                                <div className="card-body ">
                                    <div className="row p-b-20">
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="btn-group">
                                                <Link to="/add-service" id="addRow" className="btn btn-info">
                                                    Thêm dịch vụ <i className="fa fa-plus" />
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
                                                    <th className="center"> Tên dịch vụ </th>
                                                    <th className="center"> Giá </th>
                                                    <th className="center"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    listService.length > 0 ? listService.map((value, index) => {
                                                        return (
                                                            <ServiceItem deleteItem={this.deleteItem} service={value} key={index}></ServiceItem>
                                                        )
                                                    }) : (
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
