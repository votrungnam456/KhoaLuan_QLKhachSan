import React, { Component } from 'react'

export default class Title extends Component {
  render() {
    const {title} = this.props;
    return (
      <div className="page-bar">
        <div className="page-title-breadcrumb">
          <div className=" pull-left">
            <div className="page-title">{title}</div>
          </div>
        </div>
      </div>
    )
  }
}
