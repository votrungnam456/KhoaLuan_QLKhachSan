import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class DelegationItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  onDeleteItem = () => {
    this.props.deleteItem(this.props.delegation.id)
  }
  render() {
    const {delegation} = this.props;
    return (
      <tr className="odd gradeX">
        <td className="center">{delegation.nameDelegations}</td>
        <td className="center">{delegation.nameManager}</td>
        <td className="center">{delegation.nameCompany}</td>
        <td className="center">{delegation.numberOfPeople}</td>
        <td className="center">
          <Link to={"/edit-delegation/"+delegation.id} className="btn btn-tbl-edit btn-xs">
            <i className="fa fa-pencil" />
          </Link>
          <Link to={"/detail-delegation/" + delegation.id} className="btn btn-primary btn-tbl-edit btn-xs">
            <i class="fa fa-info-circle"/>
          </Link>
          <button onClick={this.onDeleteItem} className="btn btn-tbl-delete btn-xs">
            <i className="fa fa-trash-o " />
          </button>
        </td>
      </tr>
    )
  }
}
