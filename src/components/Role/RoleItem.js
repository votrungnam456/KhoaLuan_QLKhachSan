import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class RoleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  onDeleteItem = () => {
    this.props.deleteItem(this.props.role.id)
  }
  render() {
    const {role} = this.props;
    return (
      <tr className="odd gradeX">
        <td className="center">{role.nameRole}</td>
        <td className="center">{role.codeRole}</td>
        <td className="center">
          <Link to={"/edit-role/"+role.id} className="btn btn-tbl-edit btn-xs">
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
