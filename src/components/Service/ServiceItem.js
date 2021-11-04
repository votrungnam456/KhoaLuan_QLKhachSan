import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ServiceItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  onDeleteItem = ()=>{
    this.props.deleteItem(this.props.service.id)
}
  render() {
    const {service}= this.props
    return (
      <tr className="odd gradeX">
      <td className="center">{service.nameService}</td>
      <td className="center">{service.price}</td>
      <td className="center">
          <Link to={"/edit-service/"+service.id} className="btn btn-tbl-edit btn-xs">
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
