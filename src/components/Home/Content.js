import React, { Component } from 'react'
import Title from './Title'
import { APIRoom } from '../../constanst/API'
import * as CallAPI from '../../constanst/CallAPI'
// import dasboard from '../../../public/assets/img/pic-dashboard.jpg'
export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            room: 0,
        }
    }
    componentDidMount() {
        CallAPI.GET(APIRoom).then(res => {
            if (res.status === 200) {
                this.setState({
                    room: res.data.length
                })
            }
        })
    }
    render() {
        const listMember = [{
            name: 'Võ Trung Nam',
            mssv: 2001181219,
            class: '09DHTH3',
            className: 'bg-b-yellow',
            img: 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/123344071_2847371228826798_2761225065012174390_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dvH9KqIWXN0AX_oQ6G9&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_V0LQGve1YG0V79Zr6pwBV5570jZt88dg6yYoDzLUpXw&oe=61FAB51D'
        },
        {
            name: 'Nguyễn Thành Long',
            mssv: 2001181201,
            class: '09DHTH3',
            className: 'bg-b-orange',
            img: 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/44169726_117534809230241_46266070612312064_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ERLqVofpXcsAX-106Pl&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8FhnMAm8fubuMYAgD7M3udqAYWkizn439RbTHxPyJLIA&oe=61FBEC20'
        },
        {
            name: 'Dương Văn Đại',
            mssv: 2001181041,
            class: '09DHTH1',
            className: 'bg-b-green',
            img: 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-1/p240x240/252247418_1213509575798540_5134057226427800621_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=h1Nv6nnNRQMAX_dbmpa&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT8MixVKmk-9IHtiZhbzIToGbUfzrBti3YZvDBF7zxp9ew&oe=61DC2C30'
        }]
        const { room } = this.state;
        console.log(room);
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                    <Title title="Dashboard"></Title>
                    <div className="card card-box">
                        <div className="card-head">
                            <header>Thành viên nhóm</header>
                            <div className="tools">
                                <i className="t-collapse btn-color fa fa-chevron-down" />
                            </div>
                        </div>
                        <div className="card-body ">
                            <div className="row">
                                {
                                    listMember.map((member, index) => {
                                        return (
                                            <div key={index} className="room-card col-md-4">
                                                <div className="card">
                                                    <div className="m-b-20">
                                                        <div className="doctor-profile">
                                                            <div className={"profile-header " + member.className}>
                                                                <div className="user-name">{member.name}</div>
                                                            </div>
                                                            <img src={member.img} className="user-img" alt="" />
                                                            <div>
                                                                <p>
                                                                    MSSV: {member.mssv}
                                                                </p>
                                                                <p>
                                                                    Lớp: {member.class}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    {/* <div className="state-overview">
                        <div className='row'>
                            {room !== 0 ? (
                                <div className="col-lg-3 col-sm-6">
                                    <div className="overview-panel purple">
                                        <div className="symbol">
                                            <i className="fa fa-users usr-clr"></i>
                                        </div>
                                        <div className="value white">
                                            <p style={{ color: "white", padding: "0px" }} className="sbold addr-font-h1" data-counter="counterup" data-value={room}>0</p>
                                            <p style={{ color: "white" }}>Orders</p>
                                        </div>
                                    </div>
                                </div>
                            ) : ""}

                        </div>

                    </div> */}

                </div>
            </div>
        )
    }
}
