import React, { Component } from 'react'
import * as CallAPI from "../../../constanst/CallAPI";
import { APIDelegation,APICustomer } from '../../../constanst/API';
import Multiselect from 'multiselect-react-dropdown';
import Title from '../../Home/Title';
export default class EditDelegation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idTeamManager: "",
            nameCompany: "",
            nameDelegations: "",
            chooseCustomers: [],
            listCustomers: [],
            // customers: [],
            message: 0
        }
    }
    componentDidMount() {
        CallAPI.GET(APIDelegation + "/" + this.props.match.params.idDelegation).then(res => {
            if (res.status === 200) {
                this.setState({
                    chooseCustomers: res.data.customers,
                    nameDelegations: res.data.nameDelegations,
                    nameCompany:res.data.nameCompany,
                    idTeamManager:res.data.idTeamManager,
                })
            }
        })
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
    editDelegation = (ev) => {
        const { idTeamManager, nameCompany, nameDelegations,chooseCustomers } = this.state
        ev.preventDefault();
        if (idTeamManager === "" || nameCompany === "" || nameDelegations === "") {
            this.setState({
                message: 1
            })
        }
        else {
            const delegationEdit = {
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
        const { listCustomers,idTeamManager,nameCompany,nameDelegations,chooseCustomers } = this.state
        console.log(listCustomers);
        console.log(chooseCustomers)
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                <Title title="Khách đoàn"></Title>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card-box">
                                <div className="card-head">
                                    <header>Sửa thông tin đoàn khách</header>
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
                                            <Multiselect selectedValues={chooseCustomers} onSelect={this.onSelect} options={listCustomers} displayValue="name" onRemove={this.onRemove}></Multiselect>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 p-t-20 text-center">
                                        <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Sửa đoàn khách</button>
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
