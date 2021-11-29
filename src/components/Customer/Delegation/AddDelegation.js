import React, { Component } from 'react'
import * as CallAPI from "../../../constanst/CallAPI";
import { APICustomer, APIDelegation, APIRole } from '../../../constanst/API';
import Multiselect from 'multiselect-react-dropdown';
import Title from '../../Home/Title';
export default class AddDelegation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idManager: "",
            nameCompany: "",
            nameDelegations: "",
            chooseCustomers: [],
            listCustomers: [],
            message: 0
        }
        this.multiselectRef = React.createRef();
    }
    componentDidMount() {
        CallAPI.GET(APICustomer).then(res => {
            if (res.status === 200) {
                this.setState({
                    listCustomers: res.data
                })
            }
            else {
                alert("Load data role failed");
            }
        })

    }
    onChange = (ev) => {
        this.setState({
            message: 0
        })
        let name = ev.target.name;
        let value = ev.target.value;
        this.setState({
            [name]: value
        })
    }
    clearData = () => {
        this.setState({
            idManager: "",
            nameCompany: "",
            nameDelegations: "",
            chooseCustomers: [],
        })
        this.multiselectRef.current.resetSelectedValues();
    }
    addDelegation = (ev) => {
        const { idManager, nameCompany, nameDelegations,chooseCustomers } = this.state
        ev.preventDefault();
        if (idManager === "" || nameCompany === "" || nameDelegations === "") {
            this.setState({
                message: 1
            })
        }
        else {
            let customersId = [];
            chooseCustomers.forEach(customer=>{
                customersId.push(customer.id)
            })
            const indexManager = customersId.indexOf(idManager);
            if(indexManager !== -1){
                customersId.splice(indexManager,1)
            }
            const delegationAdd = {
                idTeamManager:idManager,
                nameCompany,
                nameDelegations,
                idCustomers:customersId
            }
            CallAPI.POST(APIDelegation, delegationAdd).then(res => {
                if (res.status === 200) {
                    this.setState({
                        message: 3
                    })
                    this.clearData();
                }
                else {
                    this.setState({
                        message: 2
                    })
                }
            });
        }
    }
    onSelect = (selectedList) =>{
        this.setState({
            chooseCustomers:selectedList
        })
    }
    
    onRemove = (selectedList) =>{
        this.setState({
            chooseCustomers:selectedList
        })
    }
    render() {
        const { listCustomers,nameCompany,nameDelegations,message,idManager } = this.state
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                <Title title="Khách đoàn"></Title>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card-box">
                                <div className="card-head">
                                    <header>Thêm đoàn khách</header>
                                </div>
                                <div className="card-body row">
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Tên đoàn khách</label>
                                            <input className="mdl-textfield__input" type="text" id="txtRoomNo" name="nameDelegations" value={nameDelegations} onChange={this.onChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Tên công ty</label>
                                            <input className="mdl-textfield__input" type="text" id="txtRoomNo" name="nameCompany" value={nameCompany} onChange={this.onChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Trưởng đoàn</label>
                                            <select value={idManager} onChange={this.onChange} name="idManager" className="mdl-textfield__input">
                                                <option value="">Chọn trưởng đoàn</option>
                                                {
                                                    listCustomers.map((value, index) => {
                                                        return (<option value={value.id} key={index}>{value.name}</option>)
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <label className="">Thành viên đoàn</label>
                                            <Multiselect ref={this.multiselectRef} onSelect={this.onSelect} options={listCustomers} displayValue="name" onRemove={this.onRemove}></Multiselect>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 p-t-20 text-center">
                                        <button onClick={this.addDelegation} type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Thêm đoàn khách mới</button>
                                        <p style={message === 3 ? { color: "green" } : { color: "red" }}>{message === 1 ? "Thông tin không được để trống" : message === 2 ? "Thêm thất bại, có lỗi vui lòng thử lại" : message === 3 ? "Thêm thành công" :  ""}</p>
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
