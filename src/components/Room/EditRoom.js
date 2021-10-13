import React, { Component } from 'react'

export default class EditRoom extends Component {
    render() {
        return (
            <div className="page-content-wrapper">
                <div className="page-content">
                    <div className="page-bar">
                        <div className="page-title-breadcrumb">
                            <div className=" pull-left">
                                <div className="page-title">Edit Room Details</div>
                            </div>
                            {/* <ol className="breadcrumb page-breadcrumb pull-right">
                                <li><i className="fa fa-home" />&nbsp;<a className="parent-item" href="index.html">Home</a>&nbsp;<i className="fa fa-angle-right" />
                                </li>
                                <li><a className="parent-item" href>Rooms</a>&nbsp;<i className="fa fa-angle-right" />
                                </li>
                                <li className="active">Edit Room Details</li>
                            </ol> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card-box">
                                <div className="card-head">
                                    <header>Edit Room Details</header>
                                    <button id="panel-button" className="mdl-button mdl-js-button mdl-button--icon pull-right" data-upgraded=",MaterialButton">
                                        <i className="material-icons">more_vert</i>
                                    </button>
                                    <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" data-mdl-for="panel-button">
                                        <li className="mdl-menu__item"><i className="material-icons">assistant_photo</i>Action
                                        </li>
                                        <li className="mdl-menu__item"><i className="material-icons">print</i>Another action
                                        </li>
                                        <li className="mdl-menu__item"><i className="material-icons">favorite</i>Something else
                                            here</li>
                                    </ul>
                                </div>
                                <div className="card-body row">
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <input className="mdl-textfield__input" type="text" defaultValue={704} id="txtRoomNo" />
                                            <label className="mdl-textfield__label">Room Number</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">
                                            <input className="mdl-textfield__input" type="text" id="list3" defaultValue="Double" readOnly tabIndex={-1} />
                                            <label htmlFor="list3" className="pull-right margin-0">
                                                <i className="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
                                            </label>
                                            <label htmlFor="list3" className="mdl-textfield__label">Room Type</label>
                                            <ul data-mdl-for="list3" className="mdl-menu mdl-menu--bottom-left mdl-js-menu">
                                                <li className="mdl-menu__item" data-val={1}>Single</li>
                                                <li className="mdl-menu__item" data-val={2}>Double</li>
                                                <li className="mdl-menu__item" data-val={3}>Quad</li>
                                                <li className="mdl-menu__item" data-val={4}>King</li>
                                                <li className="mdl-menu__item" data-val={5}>Suite</li>
                                                <li className="mdl-menu__item" data-val={6}>Apartments</li>
                                                <li className="mdl-menu__item" data-val={7}>Villa</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">
                                            <input className="mdl-textfield__input" type="text" id="sample2" defaultValue="AC" readOnly tabIndex={-1} />
                                            <label htmlFor="sample2" className="pull-right margin-0">
                                                <i className="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
                                            </label>
                                            <label htmlFor="sample2" className="mdl-textfield__label">AC/Non AC</label>
                                            <ul data-mdl-for="sample2" className="mdl-menu mdl-menu--bottom-left mdl-js-menu">
                                                <li className="mdl-menu__item" data-val="DE">AC</li>
                                                <li className="mdl-menu__item" data-val="BY">Non AC</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">
                                            <input className="mdl-textfield__input" type="text" id="sample3" defaultValue="Free Dinner" readOnly tabIndex={-1} />
                                            <label htmlFor="sample3" className="pull-right margin-0">
                                                <i className="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
                                            </label>
                                            <label htmlFor="sample2" className="mdl-textfield__label">Meal</label>
                                            <ul data-mdl-for="sample3" className="mdl-menu mdl-menu--bottom-left mdl-js-menu">
                                                <li className="mdl-menu__item" data-val={1}>Free Breakfast</li>
                                                <li className="mdl-menu__item" data-val={2}>Free Dinner</li>
                                                <li className="mdl-menu__item" data-val={3}>Free Breakfast &amp; Dinner</li>
                                                <li className="mdl-menu__item" data-val={4}>Free Welcome Drink</li>
                                                <li className="mdl-menu__item" data-val={5}>No Free Food</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">
                                            <input className="mdl-textfield__input" type="text" id="sample4" defaultValue="Free Cancellation" readOnly tabIndex={-1} />
                                            <label className="pull-right margin-0">
                                                <i className="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
                                            </label>
                                            <label htmlFor="sample2" className="mdl-textfield__label">Cancellation
                                                Charges</label>
                                            <ul data-mdl-for="sample4" className="mdl-menu mdl-menu--bottom-left mdl-js-menu">
                                                <li className="mdl-menu__item" data-val={1}>Free Cancellation</li>
                                                <li className="mdl-menu__item" data-val={2}>10% Before 24 Hours</li>
                                                <li className="mdl-menu__item" data-val={1}>No Cancellation Allow</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">
                                            <input className="mdl-textfield__input" type="text" id="list2" defaultValue={2} readOnly tabIndex={-1} />
                                            <label htmlFor="list2" className="pull-right margin-0">
                                                <i className="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
                                            </label>
                                            <label htmlFor="list2" className="mdl-textfield__label">Bad Capacity</label>
                                            <ul data-mdl-for="list2" className="mdl-menu mdl-menu--bottom-left mdl-js-menu">
                                                <li className="mdl-menu__item" data-val={1}>1</li>
                                                <li className="mdl-menu__item" data-val={2}>2</li>
                                                <li className="mdl-menu__item" data-val={3}>3</li>
                                                <li className="mdl-menu__item" data-val={4}>4</li>
                                                <li className="mdl-menu__item" data-val={5}>5</li>
                                                <li className="mdl-menu__item" data-val={6}>6</li>
                                                <li className="mdl-menu__item" data-val={7}>7</li>
                                                <li className="mdl-menu__item" data-val={8}>8</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <input className="mdl-textfield__input" type="text" defaultValue={1234567890} pattern="-?[0-9]*(\.[0-9]+)?" id="text5" />
                                            <label className="mdl-textfield__label" htmlFor="text5">Telephone Number</label>
                                            <span className="mdl-textfield__error">Number required!</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                                            <input className="mdl-textfield__input" type="text" defaultValue={25} pattern="-?[0-9]*(\.[0-9]+)?" id="text8" />
                                            <label className="mdl-textfield__label">Rent Per Night (in $)</label>
                                            <span className="mdl-textfield__error">Number required!</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 p-t-20">
                                        <label className="control-label col-md-3">Upload Room Photos</label>
                                        <form id="id_dropzone" className="dropzone">
                                            <div className="dz-message">
                                                <div className="dropIcon">
                                                    <i className="material-icons">cloud_upload</i>
                                                </div>
                                                <h3>Drop files here or click to upload.</h3>
                                                <em>(This is just a demo. Selected files are <strong>not</strong>
                                                    actually uploaded.)
                                                </em>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-lg-12 p-t-20">
                                        <div className="mdl-textfield mdl-js-textfield txt-full-width">
                                            <textarea className="mdl-textfield__input" rows={4} id="education" defaultValue={"have sea view from balcomy"} />
                                            <label className="mdl-textfield__label">Room Details</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 p-t-20 text-center">
                                        <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Submit</button>
                                        <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
