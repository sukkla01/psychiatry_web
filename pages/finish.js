import React, { Component } from 'react'
import Hoc from '../components/Layout/Hoc'
import Content from '../components/Layout/Content'
import { Button } from 'antd';

export default class finish extends Component {

    state = {
        isLoading: true
    }

    componentDidMount() {
        let myTimer3 = setInterval(async () => {
            await this.setState({
                isLoading: false

            })
            clearTimeout(myTimer3);
        }, 2500)

        console.log(this.props.url.query.id)
    }

    finish = () => {
        localStorage.removeItem('general')
        localStorage.removeItem('1')
        localStorage.removeItem('2')
        localStorage.removeItem('3')
        localStorage.removeItem('4')
        localStorage.removeItem('5')
        localStorage.removeItem('6')
        window.location = "/"
    }
    render() {
        const imgMap = [1, 2, 3, 4, 5, 6, 7]
        const imgShow = this.props.url.query.id < 3 ? 1 : 7
        return (
            <Hoc>
                <Content>
                    {this.state.isLoading ?

                        <div className="square-box-loader">
                            <div className="square-box-loader-container">
                                <div className="square-box-loader-corner-top" />
                                <div className="square-box-loader-corner-bottom" />
                            </div>
                            <div className="square-box-loader-square" />
                        </div>

                        :



                        <div className="">

                            <div className="card">
                                <div className="card-body">
                                    {/* <h4 className="card-title" style={{ fontFamily: 'Kanit' }}>แบบประเมินความเครียด สำหรับบุคลากรโรงพยาบาลศรีสังวรสุโขทัย  ในช่วงการระบาดของโรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19)</h4> */}
                                    <div style={{ marginTop: 30, marginBottom: 20 }}>
                                        <div className="card card-inverse-info" id="context-menu-simple">
                                            <div className="card-body">
                                                <p style={{ fontSize: 18 }} class="card-text"><i className="mdi mdi-checkbox-marked-circle"></i>  บันทึกข้อมูลเรียบร้อยแล้ว</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>

                                <img src={"static/psy/" + imgShow + ".jpg"} style={{ width: '100%', paddingLeft: 20, paddingRight: 20, paddingTop: 10 }} />
                                    {/* {imgMap.map((i) => {
                                        let index = i
                                        return <img src={"static/psy/" + index + ".jpg"} style={{ width: '100%', paddingLeft: 20, paddingRight: 20, paddingTop: 10 }} />

                                    })} */}

                                </div>
                                <Button onClick={this.finish} type="primary" block style={{ padding: 5, marginBottom: 10, marginTop: 20 }}>
                                    กลับสู่หน้าหลัก
                                </Button>
                            </div>

                        </div>
                    }
                </Content>
            </Hoc>

        )
    }
}
