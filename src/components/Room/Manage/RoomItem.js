import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { convertStatus } from '../../../constanst/Methods';
export default class ListRoomItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    onDeleteItem = () => {
        this.props.deleteItem(this.props.room.id)
    }
    render() {
        const { room } = this.props
        return (
            <tr className="odd gradeX">
                <td className="center">{room.nameRoom}</td>
                <td className="center">{room.nameTypeRoom}</td>
                <td className="center">{convertStatus(room.status)}</td>
                <td className="center">{room.nameHousekeepingStaff}</td>
                <td className="center">{room.infoRegistration === null ? "" : room.infoRegistration.idRegistration}</td>
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
