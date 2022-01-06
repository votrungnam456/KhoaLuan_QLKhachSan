import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { APIEmployee } from '../../constanst/API';
import * as CallAPI from "../../constanst/CallAPI";
import { getNow } from '../../constanst/Methods';
import ExportExcel from '../Excel/ExportExcel';
import Title from '../Home/Title';
import EmloyeeItem from './EmloyeeItem';
export default class ListEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listEmployee:[],
            baseListEmployee:[]
        }
    }
    componentDidMount(){
        this.loadData();
    }
    loadData = () =>{
        CallAPI.GET(APIEmployee).then(res=>{
            if(res.status === 200){
                this.setState({
                    listEmployee:res.data,
                    baseListEmployee:res.data
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
    search = (ev)=>{
        const keySearch = ev.target.value
        if(keySearch === '') {
            this.setState({
                listEmployee:this.state.baseListEmployee
            })
            return;
        }
        const listSearch = [];
        this.state.baseListEmployee.map(list =>{
            if(list.nameEmployee.includes(keySearch)){
                listSearch.push(list);
            }
            return true;
        })
        this.setState({
            listEmployee:listSearch
        })
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
                                            <div className="btn-group">
                                                <ExportExcel tableName="table" fileName={"listEmployee" + getNow(true)}></ExportExcel>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-6">
                                        <label className="search-bar">
                                            Search: <input type="text" style={{ display: "inline-block", width: "80%" }} onChange={this.search} className="form-control form-control-sm" />
                                        </label>
                                    </div>

                                    <div className="table-scrollable">
                                        <table className="table table-hover table-checkable order-column full-width" id="table">
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
                                                        <tr >
                                                            <td colSpan={7} className="center">Không tìm thây dữ liệu</td>
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
