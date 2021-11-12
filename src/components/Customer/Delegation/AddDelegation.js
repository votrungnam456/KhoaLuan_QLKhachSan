import React, { Component } from 'react'
import * as CallAPI from "../../../constanst/CallAPI";
import { APICustomer, APIRole } from '../../../constanst/API';
import Multiselect from 'multiselect-react-dropdown';
import Title from '../../Home/Title';
export default class AddDelegation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idTeamManager: "",
            nameCompany: "",
            nameDelegations: "",
            chooseCustomers: [],
            listCustomers: [],
            message: 0
        }
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

        })
    }
    addDelegation = (ev) => {
        const { idTeamManager, nameCompany, nameDelegations,chooseCustomers } = this.state
        ev.preventDefault();
        if (idTeamManager === "" || nameCompany === "" || nameDelegations === "") {
            this.setState({
                message: 1
            })
        }
        else {
            const delegationAdd = {
                idTeamManager,
                nameCompany,
                nameDelegations,
                chooseCustomers
            }
            // CallAPI.POST(APIEmployee, delegationAdd).then(res => {
            //     if (res.status === 200) {
            //         this.setState({
            //             message: 4
            //         })
            //         this.clearData();
            //     }
            //     else {
            //         this.setState({
            //             message: 2
            //         })
            //     }
            // });

        }
    }
    onSelect = (selectedList) =>{
        // console.log(selectedList)
        this.setState({
            chooseCustomers:selectedList
        })
    }
    
    onRemove = (selectedList, removedItem) =>{
        // console.log(selectedList)
        this.setState({
            chooseCustomers:selectedList
        })
    }
    render() {
        const { listCustomers,idTeamManager,nameCompany,nameDelegations } = this.state
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
                                            <select onChange={this.onChange} name="idTeamManager" className="mdl-textfield__input">
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
                                            <Multiselect  onSelect={this.onSelect} options={listCustomers} displayValue="name" onRemove={this.onRemove}></Multiselect>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 p-t-20 text-center">
                                        <button onClick={this.addDelegation} type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Thêm đoàn khách mới</button>
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
