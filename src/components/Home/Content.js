import React, { Component } from 'react'
import Title from './Title'
// import dasboard from '../../../public/assets/img/pic-dashboard.jpg'
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
                    <div style={{ textAlign: "center" }}>
                        <img src="assets/img/pic-dashboard.jpg" alt="dashboard cat"></img>
                        <p style={{ fontSize: "25px" }} className="text-bold">Comming soon...</p>
                    </div>
                </div>
            </div>
        )
    }
}
