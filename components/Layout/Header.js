import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row navbar-success">
                    <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                        <a className="navbar-brand brand-logo" href="index.html"><i className="mdi mdi-cisco-webex" style={{ fontSize:30,marginTop:40 }}></i> <b>PSY</b></a>
                        <a className="navbar-brand brand-logo-mini" href="index.html"><i className="mdi mdi-cisco-webex" style={{ fontSize:30,marginTop:40 }}></i></a>
                    </div>
                   
                    <div className="navbar-menu-wrapper d-flex align-items-stretch">
                        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                            <span className="mdi mdi-menu" />
                        </button>
                        <div className="search-field d-none d-md-block">
                            <form className="d-flex align-items-center h-100" action="#">
                                <div className="input-group" style={{ fontFamily : 'Kanit'}}>
                                    
                                    แบบประเมิณความเครียด
                                </div>

                            </form>
                        </div>
                        
                    </div>
                </nav>

            </div>
        )
    }
}
