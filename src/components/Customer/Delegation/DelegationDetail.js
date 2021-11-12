import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as CallAPI from "../../../constanst/CallAPI";
import { APIDelegation } from '../../../constanst/API';
import Title from '../../Home/Title';
export default class DelegationDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers:[],
      nameDelegations:""
    }
  }
  componentDidMount() {
    CallAPI.GET(APIDelegation + "/" + this.props.match.params.idDelegation).then(res => {
      if (res.status === 200) {
        this.setState({
          customers:res.data.customers,
          nameDelegations:res.data.nameDelegations
        })
      }
    })
  }
  render() {
    const {customers,nameDelegations } = this.state;
    return (
      <div className="page-content-wrapper">
        <div className="page-content">
        <Title title="Khách đoàn"></Title>
          <div className="row">
            <div className="col-sm-12">
              <div className="card-box">
                <div className="card-head">
                  <header>Chi tiết đoàn khách: {nameDelegations}</header>
                </div>
                <div className="card-body row">
                  <div className="table-scrollable">
                    <table className="table table-hover table-checkable order-column full-width" id="example4">
                      <thead>
                        <tr>
                          <th className="center"> Tên </th>
                          <th className="center"> Chứng minh thư </th>
                          <th className="center"> Quốc tịch </th>
                          <th className="center"> Số điện thoại </th>
                          <th className="center"> Email </th>
                        </tr>
                      </thead>
                      <tbody>
                        {customers.map((value, index) => {
                          return (
                            <tr key={index} className="center">
                              <td>{value.name}</td>
                              <td>{value.card}</td>
                              <td>{value.nationality}</td>
                              <td>{value.phone}</td>
                              <td>{value.email}</td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className="col-lg-12 p-t-20 text-center">
                    <Link to={"/edit-delegation/" + this.props.match.params.idDelegation} type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Sửa thông tin đoàn khách</Link>
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
