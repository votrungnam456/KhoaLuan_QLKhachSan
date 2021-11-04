import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CustomerItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  onDeleteItem = () => {
    this.props.deleteItem(this.props.customer.id)
  }
  render() {
    const {customer} = this.props;
    return (
      <tr className="odd gradeX">
        <td className="center">{customer.name}</td>
        <td className="center">{customer.card}</td>
        <td className="center">{customer.nationality}</td>
        <td className="center">{customer.phone}</td>
        <td className="center">{customer.email}</td>
        <td className="center">
          <Link to={"/edit-customer/"+customer.id} className="btn btn-tbl-edit btn-xs">
            <i className="fa fa-pencil" />
          </Link>
          <button onClick={this.onDeleteItem} className="btn btn-tbl-delete btn-xs">
            <i className="fa fa-trash-o " />
          </button>
        </td>
      </tr>
    )
  }
}
