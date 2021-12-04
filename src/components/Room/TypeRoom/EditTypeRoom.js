import React, { Component } from 'react'
import * as CallAPI from "../../../constanst/CallAPI";
import { APITypeRoom } from '../../../constanst/API';
import Title from '../../Home/Title';
export default class EditTypeRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameTypeRoom: "",
            price: "",
            description:"",
            message: 0
        }
    }
    componentDidMount() {
        CallAPI.GET(APITypeRoom + "/" + this.props.match.params.idTypeRoom).then(res=>{
            if(res.status === 200){
                this.setState({
                    nameTypeRoom:res.data.nameTypeRoom,
                    price:res.data.price,
                    description:res.data.description
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
    editTypeRoom = (ev) => {
        const { nameTypeRoom, price,description } = this.state
        const {history} = this.props
        ev.preventDefault();
        if (nameTypeRoom === "" || price === "") {
            this.setState({
                message: 1
            })
        }
        else if(price === 0){
            this.setState({
                message: 3
            })
        }
        else {
            const typeRoomEdit = {
                nameTypeRoom,
                price:parseInt(price),
                description
            }
            CallAPI.PUT(APITypeRoom + "/" + this.props.match.params.idTypeRoom, typeRoomEdit).then(res => {
                if (res.status === 200) {
                    history.push("/list-type-room");
                }
                else {
                    this.setState({
                        message: 2
                    })
                }
            }).catch(err=>console.log(err.response));
        }
    }
    render() {
        const {nameTypeRoom,price,message,description} = this.state
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                <Title title="Loại phòng"></Title>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card-box">
                                <div className="card-head">
                                    <header>Sửa loại phòng</header>
                                </div>
                                <div className="card-body row">
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Tên loại phòng</label>
                                            <input className="mdl-textfield__input" type="text" onChange={this.onChange} value={nameTypeRoom} name="nameTypeRoom"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Giá</label>
                                            <input className="mdl-textfield__input" type="number" onChange={this.onChange} value={price} name="price"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Mô tả</label>
                                            <input className="mdl-textfield__input" type="text" onChange={this.onChange} value={description} name="description"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 p-t-20 text-center">
                                        <button onClick={this.editTypeRoom} type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Sửa thông tin loại phòng</button>
                                        <p style={{color:"red"}} >{message === 1 ? "Thông tin không được để trống" : message === 2 ? "Sửa thông tin thất bại, vui lòng kiểm tra lại thông tin và thử lại" : message === 3 ? "Giá phải lớn hơn 0": ""}</p>
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
