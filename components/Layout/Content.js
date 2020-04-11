import React, { Component } from 'react'

export default class Content extends Component {
    render() {
        return (
            <div className="main-panel" style={{ marginTop: 70 }}>
                <div className="content-wrapper">
                    {this.props.children}

                </div>
                {/* content-wrapper ends */}
                {/* partial:partials/_footer.html */}
               
                {/* partial */}
            </div>
        )
    }
}
