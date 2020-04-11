import React, { Component } from 'react'
import Header from './Header'
import Left from './Left'
import Footer from './Footer'
import { Setting } from './Setting'

export default class Hoc extends Component {
    render() {
        return (
            <>
                <div className="container-scroller">
                    <Header />
                    <div className="container-fluid page-body-wrapper">
                        {/* <Setting /> */}


                        {/* <Left /> */}
                        {this.props.children}
                    </div>
                    {/* page-body-wrapper ends */}
                </div>

                <Footer />
            </>
        )
    }
}
