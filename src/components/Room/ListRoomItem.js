import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { APIRoom } from '../../constanst/API';
import * as CallAPI from "../../constanst/CallAPI";
export default class ListRoomItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount(){
    }
    // deleteItem(id){
    //     CallAPI.deleteItem(APIRoom + "/" + id).then(res=>console.log(res));
    // }
    onDeleteItem = ()=>{
        this.props.deleteItem(this.props.room.id)
    }
    render() {
        const {room} = this.props
        return (
            <tr className="odd gradeX">
                <td className="center">{room.nameRoom}</td>
                <td className="center">{room.nameTypeRoom}</td>
                <td className="center">{room.status}</td>
                <td className="center">{room.nameHousekeepingStaff}</td>
                <td className="center">{room.idRegistationForm == null ? "" : room.idRegistationForm}</td>
                <td className="center">
                    <Link to={"/edit-room/" + room.id} className="btn btn-tbl-edit btn-xs">
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
