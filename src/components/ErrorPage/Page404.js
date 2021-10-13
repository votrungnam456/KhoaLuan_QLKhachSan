import React, { Component } from 'react'

export default class Page404 extends Component {
    render() {
        return (
            <div class="limiter">
                <div class="container-login100 page-background">
                    <div class="wrap-login100">
                        <form class="form-404">
                            <span class="login100-form-logo">
                                <i class="zmdi zmdi-flower"></i>
                            </span>
                            <span class="form404-title p-b-34 p-t-27">
                                Error 404
                            </span>
                            <p class="content-404">The page you are looking for does't exist or an other error occurred.</p>
                            <div class="container-login100-form-btn">
                                <button class="login100-form-btn">
                                    Go to home page
                                </button>
                            </div>
                            <div class="text-center p-t-27">
                                <a class="txt1" href="#">
                                    Need Help?
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
