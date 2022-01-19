import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DeviceItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  onDeleteItem = () => {
    this.props.deleteItem(this.props.device.id)
  }
  render() {
    const { device } = this.props
    return (
      <tr className="odd gradeX">
        <td className="center">{device.nameHotelDevice}</td>
        <td className="center">{device.price}</td>
        <td className="center">{device.quantity}</td>
        <td className="center">{device.quantity > 0 ? "Còn hàng" : "Hết hàng"}</td>
        <td className="center">
          <Link to={"/edit-device/"+device.id} className="btn btn-tbl-edit btn-xs">
            <i className="fa fa-pencil" />
          </Link>
          <button onClick={this.onDeleteItem}  className="btn btn-tbl-delete btn-xs">
            <i className="fa fa-trash-o " />
          </button>
        </td>
      </tr>
    )
  }
}
