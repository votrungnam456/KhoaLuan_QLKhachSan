import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class TypeRoomItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  onDeleteItem = ()=>{
      this.props.deleteItem(this.props.typeRoom.id)
  }
  render() {
    const {typeRoom} = this.props
    return (
      <tr className="odd gradeX">
      <td className="center">{typeRoom.nameTypeRoom}</td>
      <td className="center">{typeRoom.price}</td>
      <td className="center">
          <Link to={"/edit-type-room/" + typeRoom.id} className="btn btn-tbl-edit btn-xs">
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
