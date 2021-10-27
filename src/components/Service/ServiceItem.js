import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ServiceItem extends Component {
  render() {
    return (
      <tr className="odd gradeX">
      <td className="center">Ăn sáng</td>
      <td className="center">100000</td>
      <td className="center">
          <Link href="/add-service" className="btn btn-tbl-edit btn-xs">
              <i className="fa fa-pencil" />
          </Link>
          <button className="btn btn-tbl-delete btn-xs">
              <i className="fa fa-trash-o " />
          </button>
      </td>
  </tr>
    )
  }
}
