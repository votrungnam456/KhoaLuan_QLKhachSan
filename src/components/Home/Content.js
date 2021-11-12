import React, { Component } from 'react'
import Title from './Title'

export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                    <Title title="Dashboard"></Title>
                </div>
            </div>
        )
    }
}
