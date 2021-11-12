import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { APIDelegation } from '../../../constanst/API';
import * as CallAPI from "../../../constanst/CallAPI";
import Title from '../../Home/Title';
import DelegationItem from './DelegationItem';
export default class ListDelegation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listDelegation:[]
        }
    }
    componentDidMount(){
        this.loadData();
    }
    loadData = () =>{
        CallAPI.GET(APIDelegation).then(res=>{
            if(res.status === 200){
                this.setState({
                    listDelegation:res.data
                })
            }
        });
    }
    deleteItem = (id) =>{
        CallAPI.DELETE(APIDelegation + "/" + id).then(res=>{
            if(res.status === 200){
                this.loadData();
            }
        });
    }
    render() {
        const {listDelegation} = this.state;
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                <Title title="Khách đoàn"></Title>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card card-box">
                                <div className="card-head">
                                    <header>Danh sách khách đoàn</header>
                                    <div className="tools">
                                        <i className="fa fa-repeat btn-color box-refresh"/>
                                        <i className="t-collapse btn-color fa fa-chevron-down"/>
                                    </div>
                                </div>
                                <div className="card-body ">
                                    <div className="row p-b-20">
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="btn-group">
                                                <Link to="/add-room" id="addRow" className="btn btn-info">
                                                    Thêm đoàn <i className="fa fa-plus" />
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
                                                        <button>
                                                            <i className="fa fa-print" /> Print </button>
                                                    </li>
                                                    <li>
                                                        <button>
                                                            <i className="fa fa-file-pdf-o" /> Save as PDF </button>
                                                    </li>
                                                    <li>
                                                        <button>
                                                            <i className="fa fa-file-excel-o" /> Export to Excel </button>
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
                                                    <th className="center"> Tên đoàn khách </th>
                                                    <th className="center"> Trưởng đoàn </th>
                                                    <th className="center"> Tên công ty </th>
                                                    <th className="center"> Số người </th>
                                                    <th className="center"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                    listDelegation.length > 0 ? listDelegation.map((value, index) => {
                                                        return (
                                                            <DelegationItem deleteItem={this.deleteItem} delegation={value} key={index}></DelegationItem>
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
