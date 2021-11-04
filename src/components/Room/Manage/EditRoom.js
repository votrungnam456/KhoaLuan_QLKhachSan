import React, { Component } from 'react'
import * as CallAPI from "../../../constanst/CallAPI";
import { APIRoom, APITypeRoom } from '../../../constanst/API';
export default class EditRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameRoom: "",
            description: "",
            id_type_room: "",
            listTypeRoom: [],
            message: 0
        }
    }
    componentDidMount() {
        CallAPI.GET(APITypeRoom).then(res => {
            if (res.status === 200) {
                this.setState({
                    listTypeRoom: res.data
                })
            }
        });
        CallAPI.GET(APIRoom + "/" + this.props.match.params.idRoom).then(res=>{
            if(res.status === 200){
                console.log(res)
                this.setState({
                    nameRoom:res.data.nameRoom,
                    description:res.data.description,
                    id_type_room:res.data.id_type_room
                })
            }
            else{
                alert("Load data failed!");
            }
        })
    }
    onChange = (ev) => {
        let name = ev.target.name;
        let value = ev.target.value;
        this.setState({
            [name]: value
        })
    }
    editRoom = (ev) => {
        const { nameRoom, description, id_type_room } = this.state
        const {history} = this.props
        ev.preventDefault();
        if (nameRoom === "") {
            this.setState({
                message: 1
            })
        }
        else {
            const roomEdit = {
                nameRoom,
                description, idTypeRoom:id_type_room
            }
            console.log(roomEdit, this.props.match.params.idRoom)
            CallAPI.PUT(APIRoom + "/" + this.props.match.params.idRoom, roomEdit).then(res => {
                console.log(res)
                if (res.status === 200) {
                    history.push("/list-room");
                }
                else {
                    this.setState({
                        message: 2
                    })
                }

            });
        }

    }
    render() {
        const { listTypeRoom, nameRoom, message, description,id_type_room } = this.state
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                    <div className="page-bar">
                        <div className="page-title-breadcrumb">
                            <div className=" pull-left">
                                <div className="page-title">Phòng</div>
                            </div>
                            {/* <ol className="breadcrumb page-breadcrumb pull-right">
                                <li><i className="fa fa-home" />&nbsp;<a className="parent-item" href="index.html">Home</a>&nbsp;<i className="fa fa-angle-right" />
                                </li>
                                <li><a className="parent-item" href>Rooms</a>&nbsp;<i className="fa fa-angle-right" />
                                </li>
                                <li className="active">Add Room Details</li>
                            </ol> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card-box">
                                <div className="card-head">
                                    <header>Sửa thông tin phòng</header>
                                    <button id="panel-button" className="mdl-button mdl-js-button mdl-button--icon pull-right" data-upgraded=",MaterialButton">
                                        <i className="material-icons">more_vert</i>
                                    </button>
                                </div>
                                <div className="card-body row">
                                <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Tên phòng</label>
                                            <input className="mdl-textfield__input" onChange={this.onChange} name="nameRoom" type="text" value={nameRoom} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Mô tả</label>
                                            <input className="mdl-textfield__input" type="text" name="description" onChange={this.onChange} value={description} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">
                                            <label htmlFor="list3" className="">Loại phòng</label>
                                            <select value={id_type_room} name="id_type_room" onChange={this.onChange} className="mdl-textfield__input">
                                            {listTypeRoom.length > 0 ? listTypeRoom.map((typeRoom, index) => {
                                                    return (
                                                        <option key={index} value={typeRoom.id}>{typeRoom.nameTypeRoom}</option>
                                                    )
                                                }) : <option value="">Loading data....</option>}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 p-t-20 text-center">
                                        <button onClick={this.editRoom} type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Sửa thông tin phòng</button>
                                        <p style={{color:"red"}} >{message == 1 ? "Tên phòng không được để trống" : message == 2 ? "Sửa thông tin phòng thất bại, vui lòng kiểm tra lại thông tin và thử lại" : ""}</p>
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
