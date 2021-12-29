import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { APITypeRoom } from '../../../constanst/API';
import * as CallAPI from "../../../constanst/CallAPI";
import { getNow } from '../../../constanst/Methods';
import ExportExcel from '../../Excel/ExportExcel';
import Title from '../../Home/Title';
import TypeRoomItem from './TypeRoomItem';
export default class ListTypeRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listTypeRoom: [],
            baseListTypeRoom:[]
        }
    }
    componentDidMount() {
        this.loadData();
    }
    loadData = () => {
        CallAPI.GET(APITypeRoom).then(res => {
            if (res.status === 200) {
                this.setState({
                    listTypeRoom: res.data,
                    baseListTypeRoom:res.data
                })
            }
        });
    }
    deleteItem = (id) => {
        CallAPI.DELETE(APITypeRoom + "/" + id).then(res => {
            if (res.status === 200) {
                this.loadData();
            }
        });
    }
    search = (ev)=>{
        const keySearch = ev.target.value
        if(keySearch === '') {
            this.setState({
                listTypeRoom:this.state.baseListTypeRoom
            })
            return;
        }
        const listSearch = [];
        this.state.baseListTypeRoom.map(list =>{
            if(list.nameTypeRoom.includes(keySearch)){
                listSearch.push(list);
            }
            return true;
        })
        this.setState({
            listTypeRoom:listSearch
        })
    }
    render() {
        const { listTypeRoom } = this.state;
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                <Title title="Loại phòng"></Title>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card card-box">
                                <div className="card-head">
                                    <header>Danh sách loại phòng</header>
                                    <div className="tools">
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
                                                <button onClick={this.loadData} id="" className="btn btn-success">
                                                    Làm mới <i className="fa fa-repeat" />
                                                </button>
                                            </div>
                                            <div className="btn-group">
                                                <ExportExcel tableName="table" fileName={"listTypeRoom" + getNow(true)}></ExportExcel>
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
                                                    <th className="center"> Tên loại phòng </th>
                                                    <th className="center"> Giá </th>
                                                    <th className="center"> Mô tả </th>
                                                    <th className="center"> Tình trạng </th>
                                                    <th className="center"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    listTypeRoom.length > 0 ? listTypeRoom.map((value, index) => {
                                                        return (
                                                            <TypeRoomItem deleteItem={this.deleteItem} typeRoom={value} key={index}></TypeRoomItem>
                                                        )
                                                    }) : (
                                                        <tr >
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
