import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { APIDevice } from '../../constanst/API';
import * as CallAPI from "../../constanst/CallAPI";
import { getNow } from '../../constanst/Methods';
import ExportExcel from '../Excel/ExportExcel';
import Title from '../Home/Title';
import DeviceItem from './DeviceItem';
export default class ListDevice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listDevice:[]
        }
    }
    componentDidMount(){
        this.loadData();
    }
    loadData = () =>{
        CallAPI.GET(APIDevice).then(res=>{
            if(res.status === 200){
                this.setState({
                    listDevice:res.data
                })
            }
        });
    }
    deleteItem = (id) =>{
        CallAPI.DELETE(APIDevice + "/" + id).then(res=>{
            if(res.status === 200){
                this.loadData();
            }
        });
    }
    render() {
        const {listDevice} = this.state;
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                <Title title="Thiết bị"></Title>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card card-box">
                                <div className="card-head">
                                    <header>Danh sách thiết bị</header>
                                    <div className="tools">
                                        <i className="t-collapse btn-color fa fa-chevron-down"  />
                                    </div>
                                </div>
                                <div className="card-body ">
                                    <div className="row p-b-20">
                                        <div className="col-md-6 col-sm-6 col-6">
                                            <div className="btn-group">
                                                <Link to="/add-device" id="addRow" className="btn btn-info">
                                                    Thêm thiết bị <i className="fa fa-plus" />
                                                </Link>
                                            </div>
                                            <div className="btn-group">
                                                <button onClick={this.loadData} className="btn btn-success">
                                                    Làm mới <i className="fa fa-repeat" />
                                                </button>
                                            </div>
                                            <div className="btn-group">
                                                <ExportExcel tableName="table" fileName={"listDevice" + getNow(true)}></ExportExcel>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-6">
                                        <label className="search-bar">
                                            Search: <input type="text" style={{ display: "inline-block", width: "80%" }} className="form-control form-control-sm" />
                                        </label>
                                    </div>

                                    <div className="table-scrollable">
                                        <table className="table table-hover table-checkable order-column full-width" id="table">
                                            <thead>
                                                <tr>
                                                    <th className="center"> Tên thiết bị </th>
                                                    <th className="center"> Giá </th>
                                                    <th className="center"> Số lượng </th>
                                                    <th className="center"> Tình trạng </th>
                                                    <th className="center"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                    listDevice.length >0 ? listDevice.map((value,index)=>{
                                                        return (
                                                            <DeviceItem deleteItem={this.deleteItem} device={value} key={index}></DeviceItem>
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
