import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class EmloyeeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  onDeleteItem = () => {
    this.props.deleteItem(this.props.employee.id)
  }
  render() {
    const {employee} = this.props;
    return (
      <tr className="odd gradeX">
        <td className="center">{employee.nameEmployee}</td>
        <td className="center">{employee.gender}</td>
        <td className="center">{employee.identityCard}</td>
        <td className="center">{employee.phoneNumber}</td>
        <td className="center">{employee.address}</td>
        <td className="center">{employee.nameRole}</td>
        <td className="center">
          <Link to={"/edit-employee/"+employee.id} className="btn btn-tbl-edit btn-xs">
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
