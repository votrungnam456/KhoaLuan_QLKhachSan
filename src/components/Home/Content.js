import React, { Component } from 'react'

export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        // console.log(this.props)
    }
    render() {
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                    <div className="page-bar">
                        <div className="page-title-breadcrumb">
                            <div className=" pull-left">
                                <div className="page-title">Dashboard</div>
                            </div>
                            {/* <ol className="breadcrumb page-breadcrumb pull-right">
                                            <li><i className="fa fa-home" />&nbsp;<a className="parent-item" href="index.html">Home</a>&nbsp;<i className="fa fa-angle-right" />
                                            </li>
                                            <li className="active">Dashboard</li>
                                        </ol> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
