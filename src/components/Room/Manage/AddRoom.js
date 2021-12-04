import React, { Component } from 'react'
import * as CallAPI from "../../../constanst/CallAPI";
import { APIRoom, APITypeRoom } from '../../../constanst/API';
import Title from '../../Home/Title';
export default class AddRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameRoom: "",
            description: "",
            idTypeRoom: "",
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
    }
    onChange = (ev) => {
        this.setState({
            message:0
        })
        let name = ev.target.name;
        let value = ev.target.value;
        this.setState({
            [name]: value
        })
    }
    addRoom = (ev) => {
        const { nameRoom, description, idTypeRoom } = this.state
        ev.preventDefault();
        if (nameRoom === "" || idTypeRoom === "") {
            this.setState({
                message: 1
            })
        }
        else {
            const roomAdd = {
                nameRoom,
                description, idTypeRoom
            }
            CallAPI.POST(APIRoom, roomAdd).then(res => {
                if (res.status === 200) {
                    this.setState({
                        message: 3,
                        nameRoom: "",
                        description: "",
                        idTypeRoom: "",
                    })
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
        const { listTypeRoom, nameRoom, message, description } = this.state
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                <Title title="Phòng"></Title>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card-box">
                                <div className="card-head">
                                    <header>Thêm phòng</header>
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
                                            <select name="idTypeRoom" onChange={this.onChange} className="mdl-textfield__input">
                                                <option value="">Chọn loại phòng</option>
                                                {listTypeRoom.length > 0 ? listTypeRoom.map((typeRoom, index) => {
                                                    if(typeRoom.details.length > 0){
                                                        return (
                                                            <option key={index} value={typeRoom.id}>{typeRoom.nameTypeRoom}</option>
                                                        )
                                                    }
                                                    return "";
                                                }) : <option value="">Loading data....</option>}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 p-t-20 text-center">
                                        <button onClick={this.addRoom} type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Thêm phòng</button>
                                        <p style={message === 3 ? { color: "green" } : { color: "red" }}>{message === 1 ? "Thông tin không được để trống" : message === 2 ? "Thêm phòng thất bại, vui lòng kiểm tra lại thông tin và thử lại" : message === 3 ? "Thêm thành công" : ""}</p>
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
