import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class ListRoom extends Component {
    render() {
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                    <div className="page-bar">
                        <div className="page-title-breadcrumb">
                            <div className=" pull-left">
                                <div className="page-title">Danh sách phòng</div>
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
                                    <header>Danh sách phòng</header>
                                    <div className="tools">
                                        <a className="fa fa-repeat btn-color box-refresh" href="javascript:;" />
                                        <a className="t-collapse btn-color fa fa-chevron-down" href="javascript:;" />
                                    </div>
                                </div>
                                <div className="card-body ">
                                    <div className="row p-b-20">
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="btn-group">
                                                <Link to="/addroom" id="addRow" className="btn btn-info">
                                                    Add New <i className="fa fa-plus" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="btn-group pull-right">
                                                <a className="btn deepPink-bgcolor  btn-outline dropdown-toggle" data-toggle="dropdown">Tools
                                                    <i className="fa fa-angle-down" />
                                                </a>
                                                <ul className="dropdown-menu pull-right">
                                                    <li>
                                                        <a href="javascript:;">
                                                            <i className="fa fa-print" /> Print </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;">
                                                            <i className="fa fa-file-pdf-o" /> Save as PDF </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;">
                                                            <i className="fa fa-file-excel-o" /> Export to Excel </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-scrollable">
                                        <table className="table table-hover table-checkable order-column full-width" id="example4">
                                            <thead>
                                                <tr>
                                                    <th className="center"> img </th>
                                                    <th className="center"> # </th>
                                                    <th className="center"> Type </th>
                                                    <th className="center"> AC/Non AC </th>
                                                    <th className="center"> Meal </th>
                                                    <th className="center"> Bad Capacity </th>
                                                    <th className="center"> Phone </th>
                                                    <th className="center"> Rent </th>
                                                    <th className="center"> Action </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="odd gradeX">
                                                    <td className="user-circle-img">
                                                        <img src="assets/img/user/user1.jpg" alt />
                                                    </td>
                                                    <td className="center">101</td>
                                                    <td className="center">Single</td>
                                                    <td className="center">AC</td>
                                                    <td className="center">Free Dinner</td>
                                                    <td className="center">2</td>
                                                    <td className="center">123456789</td>
                                                    <td className="center">25$</td>
                                                    <td className="center">
                                                        <a href="edit_room.html" className="btn btn-tbl-edit btn-xs">
                                                            <i className="fa fa-pencil" />
                                                        </a>
                                                        <a className="btn btn-tbl-delete btn-xs">
                                                            <i className="fa fa-trash-o " />
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr className="odd gradeX">
                                                    <td className="user-circle-img">
                                                        <img src="assets/img/user/user2.jpg" alt />
                                                    </td>
                                                    <td className="center">102</td>
                                                    <td className="center">Double</td>
                                                    <td className="center">Non AC</td>
                                                    <td className="center">Free Lunch</td>
                                                    <td className="center">3</td>
                                                    <td className="center">123456789</td>
                                                    <td className="center">35$</td>
                                                    <td className="center">
                                                        <a href="edit_room.html" className="btn btn-tbl-edit btn-xs">
                                                            <i className="fa fa-pencil" />
                                                        </a>
                                                        <a className="btn btn-tbl-delete btn-xs">
                                                            <i className="fa fa-trash-o " />
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr className="odd gradeX">
                                                    <td className="user-circle-img">
                                                        <img src="assets/img/user/user3.jpg" alt />
                                                    </td>
                                                    <td className="center">103</td>
                                                    <td className="center">King</td>
                                                    <td className="center">AC</td>
                                                    <td className="center">None</td>
                                                    <td className="center">5</td>
                                                    <td className="center">123456789</td>
                                                    <td className="center">65$</td>
                                                    <td className="center">
                                                        <a href="edit_room.html" className="btn btn-tbl-edit btn-xs">
                                                            <i className="fa fa-pencil" />
                                                        </a>
                                                        <a className="btn btn-tbl-delete btn-xs">
                                                            <i className="fa fa-trash-o " />
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr className="odd gradeX">
                                                    <td className="user-circle-img">
                                                        <img src="assets/img/user/user1.jpg" alt />
                                                    </td>
                                                    <td className="center">101</td>
                                                    <td className="center">Single</td>
                                                    <td className="center">AC</td>
                                                    <td className="center">Free Dinner</td>
                                                    <td className="center">2</td>
                                                    <td className="center">123456789</td>
                                                    <td className="center">25$</td>
                                                    <td className="center">
                                                        <a href="edit_room.html" className="btn btn-tbl-edit btn-xs">
                                                            <i className="fa fa-pencil" />
                                                        </a>
                                                        <a className="btn btn-tbl-delete btn-xs">
                                                            <i className="fa fa-trash-o " />
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr className="odd gradeX">
                                                    <td className="user-circle-img">
                                                        <img src="assets/img/user/user2.jpg" alt />
                                                    </td>
                                                    <td className="center">102</td>
                                                    <td className="center">Double</td>
                                                    <td className="center">Non AC</td>
                                                    <td className="center">Free Lunch</td>
                                                    <td className="center">3</td>
                                                    <td className="center">123456789</td>
                                                    <td className="center">35$</td>
                                                    <td className="center">
                                                        <a href="edit_room.html" className="btn btn-tbl-edit btn-xs">
                                                            <i className="fa fa-pencil" />
                                                        </a>
                                                        <a className="btn btn-tbl-delete btn-xs">
                                                            <i className="fa fa-trash-o " />
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr className="odd gradeX">
                                                    <td className="user-circle-img">
                                                        <img src="assets/img/user/user3.jpg" alt />
                                                    </td>
                                                    <td className="center">103</td>
                                                    <td className="center">King</td>
                                                    <td className="center">AC</td>
                                                    <td className="center">None</td>
                                                    <td className="center">5</td>
                                                    <td className="center">123456789</td>
                                                    <td className="center">65$</td>
                                                    <td className="center">
                                                        <a href="edit_room.html" className="btn btn-tbl-edit btn-xs">
                                                            <i className="fa fa-pencil" />
                                                        </a>
                                                        <a className="btn btn-tbl-delete btn-xs">
                                                            <i className="fa fa-trash-o " />
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr className="odd gradeX">
                                                    <td className="user-circle-img">
                                                        <img src="assets/img/user/user1.jpg" alt />
                                                    </td>
                                                    <td className="center">101</td>
                                                    <td className="center">Single</td>
                                                    <td className="center">AC</td>
                                                    <td className="center">Free Dinner</td>
                                                    <td className="center">2</td>
                                                    <td className="center">123456789</td>
                                                    <td className="center">25$</td>
                                                    <td className="center">
                                                        <a href="edit_room.html" className="btn btn-tbl-edit btn-xs">
                                                            <i className="fa fa-pencil" />
                                                        </a>
                                                        <a className="btn btn-tbl-delete btn-xs">
                                                            <i className="fa fa-trash-o " />
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr className="odd gradeX">
                                                    <td className="user-circle-img">
                                                        <img src="assets/img/user/user2.jpg" alt />
                                                    </td>
                                                    <td className="center">102</td>
                                                    <td className="center">Double</td>
                                                    <td className="center">Non AC</td>
                                                    <td className="center">Free Lunch</td>
                                                    <td className="center">3</td>
                                                    <td className="center">123456789</td>
                                                    <td className="center">35$</td>
                                                    <td className="center">
                                                        <a href="edit_room.html" className="btn btn-tbl-edit btn-xs">
                                                            <i className="fa fa-pencil" />
                                                        </a>
                                                        <a className="btn btn-tbl-delete btn-xs">
                                                            <i className="fa fa-trash-o " />
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr className="odd gradeX">
                                                    <td className="user-circle-img">
                                                        <img src="assets/img/user/user3.jpg" alt />
                                                    </td>
                                                    <td className="center">103</td>
                                                    <td className="center">King</td>
                                                    <td className="center">AC</td>
                                                    <td className="center">None</td>
                                                    <td className="center">5</td>
                                                    <td className="center">123456789</td>
                                                    <td className="center">65$</td>
                                                    <td className="center">
                                                        <a href="edit_room.html" className="btn btn-tbl-edit btn-xs">
                                                            <i className="fa fa-pencil" />
                                                        </a>
                                                        <a className="btn btn-tbl-delete btn-xs">
                                                            <i className="fa fa-trash-o " />
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr className="odd gradeX">
                                                    <td className="user-circle-img">
                                                        <img src="assets/img/user/user1.jpg" alt />
                                                    </td>
                                                    <td className="center">101</td>
                                                    <td className="center">Single</td>
                                                    <td className="center">AC</td>
                                                    <td className="center">Free Dinner</td>
                                                    <td className="center">2</td>
                                                    <td className="center">123456789</td>
                                                    <td className="center">25$</td>
                                                    <td className="center">
                                                        <a href="edit_room.html" className="btn btn-tbl-edit btn-xs">
                                                            <i className="fa fa-pencil" />
                                                        </a>
                                                        <a className="btn btn-tbl-delete btn-xs">
                                                            <i className="fa fa-trash-o " />
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr className="odd gradeX">
                                                    <td className="user-circle-img">
                                                        <img src="assets/img/user/user2.jpg" alt />
                                                    </td>
                                                    <td className="center">102</td>
                                                    <td className="center">Double</td>
                                                    <td className="center">Non AC</td>
                                                    <td className="center">Free Lunch</td>
                                                    <td className="center">3</td>
                                                    <td className="center">123456789</td>
                                                    <td className="center">35$</td>
                                                    <td className="center">
                                                        <a href="edit_room.html" className="btn btn-tbl-edit btn-xs">
                                                            <i className="fa fa-pencil" />
                                                        </a>
                                                        <a className="btn btn-tbl-delete btn-xs">
                                                            <i className="fa fa-trash-o " />
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr className="odd gradeX">
                                                    <td className="user-circle-img">
                                                        <img src="assets/img/user/user3.jpg" alt />
                                                    </td>
                                                    <td className="center">103</td>
                                                    <td className="center">King</td>
                                                    <td className="center">AC</td>
                                                    <td className="center">None</td>
                                                    <td className="center">5</td>
                                                    <td className="center">123456789</td>
                                                    <td className="center">65$</td>
                                                    <td className="center">
                                                        <a href="edit_room.html" className="btn btn-tbl-edit btn-xs">
                                                            <i className="fa fa-pencil" />
                                                        </a>
                                                        <a className="btn btn-tbl-delete btn-xs">
                                                            <i className="fa fa-trash-o " />
                                                        </a>
                                                    </td>
                                                </tr>
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
