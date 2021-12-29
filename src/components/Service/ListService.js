import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { APIService } from '../../constanst/API';
import * as CallAPI from "../../constanst/CallAPI";
import { getNow } from '../../constanst/Methods';
import ExportExcel from '../Excel/ExportExcel';
import Title from '../Home/Title';
import ServiceItem from './ServiceItem';
export default class ListService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listService: [],
            baseListService:[]
        }
    }
    componentDidMount() {
        this.loadService();
    }
    loadService = () => {
        CallAPI.GET(APIService).then(res => {
            if (res.status === 200) {
                this.setState({
                    listService: res.data,
                    baseListService:res.data
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
    search = (ev) => {
        const keySearch = ev.target.value
        if (keySearch === '') {
            this.setState({
                listService: this.state.baseListService
            })
            return;
        }
        const listSearch = [];
        this.state.baseListService.map(list => {
            if (list.nameService.includes(keySearch)) {
                listSearch.push(list);
            }
            return true
        })
        this.setState({
            listService: listSearch
        })
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
                                            <div className="btn-group">
                                                <ExportExcel tableName="table" fileName={"listService" + getNow(true)}></ExportExcel>
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
                                                        <tr >
                                                            <td colSpan={3} className="center">Không tìm thây dữ liệu</td>
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
