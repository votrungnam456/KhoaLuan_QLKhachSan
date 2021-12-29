import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { APIRoom } from '../../../constanst/API';
import * as CallAPI from "../../../constanst/CallAPI";
import ExportExcel from '../../Excel/ExportExcel';
import Title from '../../Home/Title';
import RoomItem from './RoomItem';
import { getNow } from '../../../constanst/Methods';
export default class ListRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listRoom: [],
            baseListRoom: []
        }
    }
    componentDidMount() {
        this.loadData();
    }
    loadData = () => {
        CallAPI.GET(APIRoom).then(res => {
            if (res.status === 200) {
                this.setState({
                    listRoom: res.data,
                    baseListRoom: res.data
                })
            }
        });
    }
    deleteItem = (id) => {
        CallAPI.DELETE(APIRoom + "/" + id).then(res => {
            if (res.status === 200) {
                this.loadData();
            }
        });
    }
    search = (ev) => {
        const keySearch = ev.target.value
        if (keySearch === '') {
            this.setState({
                listRoom: this.state.baseListRoom
            })
            return;
        }
        const listSearch = [];
        this.state.baseListRoom.map(list => {
            if (list.nameRoom.includes(keySearch)) {
                listSearch.push(list);
            }
            return true;
        })
        this.setState({
            listRoom: listSearch
        })
    }
    render() {
        const { listRoom } = this.state;
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
                                                <button onClick={this.loadData} id="addRow" className="btn btn-success">
                                                    Làm mới <i className="fa fa-repeat" />
                                                </button>
                                            </div>
                                            <div className="btn-group">
                                                <ExportExcel tableName="table" fileName={"listRoom" + getNow(true)}></ExportExcel>
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
                                                    listRoom.length > 0 ? listRoom.map((value, index) => {
                                                        return (
                                                            <RoomItem deleteItem={this.deleteItem} room={value} key={index}></RoomItem>
                                                        )
                                                    }) : (
                                                        <tr>
                                                            <td colSpan={6} className="center">Không tìm thây dữ liệu</td>
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
