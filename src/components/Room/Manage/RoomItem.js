import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class ListRoomItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    onDeleteItem = () => {
        this.props.deleteItem(this.props.room.id)
    }
    convertStatus = (status) => {
        switch (status) {
            case -1:
                return "Trống"
            case 1:
                return "Đã đặt"
            case 2:
                return "Đang ở"
            case 3:
                return "Đang sửa"
            case 4:
                return "Đang dọn dẹp"
            default:
                break;
        }
    }
    render() {
        const { room } = this.props
        return (
            <tr className="odd gradeX">
                <td className="center">{room.nameRoom}</td>
                <td className="center">{room.nameTypeRoom}</td>
                <td className="center">{this.convertStatus(room.status)}</td>
                <td className="center">{room.nameHousekeepingStaff}</td>
                <td className="center">{room.idRegistationForm == null ? "" : room.idRegistationForm}</td>
                <td className="center">
                    <Link to={"/edit-room/" + room.id} className="btn btn-tbl-edit btn-xs">
                        <i className="fa fa-pencil" />
                    </Link>
                    <Link to={"/detail-room/" + room.id} className="btn bg-primary btn-tbl-edit btn-xs">
                        <i className="fa fa-info-circle" />
                    </Link>
                    <button onClick={this.onDeleteItem} className="btn btn-tbl-delete btn-xs">
                        <i className="fa fa-trash-o " />
                    </button>
                </td>
            </tr>
        )
    }
}
