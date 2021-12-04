import React, { Component } from 'react'
import * as CallAPI from "../../constanst/CallAPI";
import { APIService } from '../../constanst/API';
import Title from '../Home/Title';
export default class EditService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameService: "",
            price: 0,
            message: 0
        }
    }
    componentDidMount() {
        CallAPI.GET(APIService + "/" + this.props.match.params.idService).then(res => {
            if (res.status === 200) {
                this.setState({
                    nameService: res.data.nameService,
                    price: res.data.price,
                })
            }
            else {
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
    editService = (ev) => {
        const { nameService, price } = this.state
        const { history } = this.props
        ev.preventDefault();
        if (nameService === "" || price === "") {
            this.setState({
                message: 1
            })
        }
        else {
            const serviceEdit = {
                nameService,
                price
            }
            CallAPI.PUT(APIService + "/" + this.props.match.params.idService, serviceEdit).then(res => {
                if (res.status === 200) {
                    history.push("/list-service");
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
        const { nameService, price, message } = this.state;
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                    <Title title="Dịch vụ"></Title>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card-box">
                                <div className="card-head">
                                    <header>Sửa dịch vụ</header>
                                </div>
                                <div className="card-body row">
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Tên dịch vụ</label>
                                            <input className="mdl-textfield__input" name="nameService" onChange={this.onChange} value={nameService} type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Giá</label>
                                            <input className="mdl-textfield__input" name="price" onChange={this.onChange} value={price} type="number" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 p-t-20 text-center">
                                        <button onClick={this.editService} type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Sửa dịch vụ</button>
                                        <p style={{ color: "red" }} >{message === 1 ? "Thông tin không được để trống" : message === 2 ? "Sửa thông tin thất bại, vui lòng kiểm tra lại thông tin và thử lại" : ""}</p>
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
