import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { APIDelegation } from '../../../constanst/API';
import * as CallAPI from "../../../constanst/CallAPI";
import { getNow } from '../../../constanst/Methods';
import ExportExcel from '../../Excel/ExportExcel';
import Title from '../../Home/Title';
import DelegationItem from './DelegationItem';
export default class ListDelegation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listDelegation: [],
            baseListDelegation: []
        }
    }
    componentDidMount() {
        this.loadData();
    }
    loadData = () => {
        CallAPI.GET(APIDelegation).then(res => {
            if (res.status === 200) {
                this.setState({
                    listDelegation: res.data,
                    baseListDelegation: res.data
                })
            }
        });
    }
    deleteItem = (id) => {
        CallAPI.DELETE(APIDelegation + "/" + id).then(res => {
            if (res.status === 200) {
                this.loadData();
            }
        });
    }
    search = (ev) => {
        const keySearch = ev.target.value
        if (keySearch === '') {
            this.setState({
                listDelegation: this.state.baseListDelegation
            })
            return;
        }
        const listSearch = [];
        this.state.baseListDelegation.map(list => {
            if (list.nameDelegations.includes(keySearch) || list.nameManager.includes(keySearch) || list.nameCompany.includes(keySearch)) {
                listSearch.push(list);
            }
            return true
        })
        this.setState({
            listDelegation: listSearch
        })
    }
    render() {
        const { listDelegation } = this.state;
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
                                        <i className="fa fa-repeat btn-color box-refresh" />
                                        <i className="t-collapse btn-color fa fa-chevron-down" />
                                    </div>
                                </div>
                                <div className="card-body ">
                                    <div className="row p-b-20">
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="btn-group">
                                                <Link to="/add-delegation" id="addRow" className="btn btn-info">
                                                    Thêm đoàn <i className="fa fa-plus" />
                                                </Link>
                                            </div>
                                            <div className="btn-group">
                                                <button onClick={this.loadData} id="addRow" className="btn btn-success">
                                                    Làm mới <i className="fa fa-repeat" />
                                                </button>
                                            </div>
                                            <div className="btn-group">
                                                <ExportExcel tableName="table" fileName={"listDelegation" + getNow(true)}></ExportExcel>
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
                                                        <tr>
                                                            <td colSpan={5} className="center">Không tìm thây dữ liệu</td>
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
