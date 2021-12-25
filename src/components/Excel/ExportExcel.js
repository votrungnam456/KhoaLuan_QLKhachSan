import React, { Component } from 'react'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
export default class ExportExcel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const { tableName, fileName } = this.props;
    return (
      <ReactHTMLTableToExcel
        className="btn btn-success"
        table={tableName}
        filename={fileName}
        sheet='sheet1'
        buttonText="Export to Excel" />
    )
  }
}
