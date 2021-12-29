import React, { Component } from 'react'
import { APICustomer } from '../../../constanst/API';
import * as CallAPI from "../../../constanst/CallAPI";
import Title from '../../Home/Title';
export default class EditCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            card:"",
            nationality:"",
            phone:"",
            email:"",
            message: 0
        }
    }
    componentDidMount() {
        CallAPI.GET(APICustomer + "/" + this.props.match.params.idCustomer).then(res=>{
            if(res.status === 200){
                this.setState({
                    name:res.data.name,
                    card:res.data.card,
                    nationality:res.data.nationality,
                    phone:res.data.phone,
                    email:res.data.email,
                })
            }
            else{
                alert("Load data failed!");
            }
        })
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
    validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    editCustomer = (ev) => {
        const { name, card, nationality,phone,email } = this.state
        const {history} = this.props;
        ev.preventDefault();
        if (name === "" || card === "" || nationality === "" ||phone === "" ||email === "" ) {
            this.setState({
                message: 1
            })
        }
        else if(phone.length !== 10){
            this.setState({
                message: 2
            })
        }
        else if(!this.validateEmail(email)){
            this.setState({
                message: 4
            })
        }
        else {
            const customerEdit = {
                nameCustomer:name,
                identityCard:card,
                nationality, 
                phoneNumber:phone, 
                email
            }
            CallAPI.PUT(APICustomer + "/" +this.props.match.params.idCustomer, customerEdit).then(res => {
                if (res.status === 200) {
                    history.goBack();
                }
                else {
                    this.setState({
                        message: 3
                    })
                }
            }).catch(err => console.log(err.response));
        }
    }
    render() {
        const { name, card, nationality,phone,email,message } = this.state
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                <Title title="Khách hàng"></Title>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card-box">
                                <div className="card-head">
                                    <header>Sửa thông tin khách hàng</header>
                                </div>
                                <div className="card-body row">
                                <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Tên khách hàng</label>
                                            <input className="mdl-textfield__input" type="text" name="name" onChange={this.onChange} value={name}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Chứng minh thư</label>
                                            <input className="mdl-textfield__input" type="text" name="card" onChange={this.onChange} value={card}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Quốc tịch</label>
                                            <input className="mdl-textfield__input" type="text" name="nationality" onChange={this.onChange} value={nationality}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Số điện thoại</label>
                                            <input className="mdl-textfield__input" type="text" name="phone" onChange={this.onChange} value={phone} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Email</label>
                                            <input className="mdl-textfield__input" type="text" name="email" onChange={this.onChange} value={email} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 p-t-20 text-center">
                                        <button onClick={this.editCustomer} type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Sửa thông tin khách hàng</button>
                                        <p style={{color:"red"}} >{message === 1 ? "Thông tin không được để trống" : message===2 ? "Số điện thoại phải 10 số": message === 3 ? "Sửa thông tin thất bại, vui lòng kiểm tra lại thông tin và thử lại" :message===4 ? "Sai định dạng email": ""}</p>
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
