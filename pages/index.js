import React, { Component } from 'react'
import Content from '../components/Layout/Content'
import Hoc from '../components/Layout/Hoc'
import General from '../components/General'
import Two from '../components/Two'
import Tree from '../components/Tree'
import { Steps, Button, message } from 'antd';
import config from '../Config.js'
import axios from 'axios';
import Router from 'next/router'

import './main.scss'

const { Step } = Steps;
const BASE_URL = config.BASE_URL




export default class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            data: []
        };
    }
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    submit = async () => {
        let general = JSON.parse(localStorage.getItem('general'));
        let no1 = JSON.parse(localStorage.getItem('1'))
        let no2 = JSON.parse(localStorage.getItem('2'))
        let no3 = JSON.parse(localStorage.getItem('3'))
        let no4 = JSON.parse(localStorage.getItem('4'))
        let no5 = JSON.parse(localStorage.getItem('5'))
        let no6 = JSON.parse(localStorage.getItem('6'))

        this.state.data = []
        this.state.data.push({
            general: general,
            no1: no1,
            no2: no2,
            no3: no3,
            no4: no4,
            no5: no5,
            no6: no6,
        })


        console.log(this.state.data)



        try {
            const res = await axios.post(`${BASE_URL}/add-quest`, this.state.data)
            Router.push({
                pathname: '/finish',
                // query: { id: id }
            })
            

        } catch (error) {
            console.log(error)
        }
    }

    reset=()=>{
        localStorage.removeItem('general')
        localStorage.removeItem('1')
        localStorage.removeItem('2')
        localStorage.removeItem('3')
        localStorage.removeItem('4')
        localStorage.removeItem('5')
        localStorage.removeItem('6')
        window.location = '/'
    }

    render() {
        const { current } = this.state



        const steps = [
            {
                title: <div style={{ fontFamily: 'Kanit' }}>กรอกข้อมูลทั่วไป</div>,
                content: <General />,
            },
            {
                title: <div style={{ fontFamily: 'Kanit' }}>แบบประเมิณความเครียด 5 ข้อ (ST-5)</div>,
                content: <Two />,
            },
            {
                title: <div style={{ fontFamily: 'Kanit' }}>แบบประเมิณภาวะหมดไฟ (Burn out)</div>,
                content: <Tree />,
            },
        ];
        return (

            <Hoc >
                <Content>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title" style={{ fontFamily: 'Kanit' }}>แบบประเมินความเครียด สำหรับบุคลากรโรงพยาบาลศรีสังวรสุโขทัย  ในช่วงการระบาดของโรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19)</h4>
                            <div style={{ marginTop: 30, marginBottom: 20 }}>
                                <Steps current={current}>
                                    {steps.map(item => (
                                        <Step key={item.title} title={item.title} />
                                    ))}
                                </Steps>
                                <div className="steps-content">{steps[current].content}</div>
                                <div className="steps-action" style={{ marginTop: 20, textAlign: 'right' }}>
                                    {current > 0 && (
                                        <>

                                            <Button style={{ margin: 8, fontFamily: 'Kanit' }} onClick={() => this.prev()}>
                                                กลับ
                                        </Button>
                                        </>
                                    )}
                                    {current < steps.length - 1 && (
                                        <>
                                            {current == 0 ?
                                                <Button style={{ margin: 8, fontFamily: 'Kanit' }} onClick={() => this.reset()}>
                                                    รีเซ็ต
                                 </Button> : ''
                                            }
                                            <Button type="primary" style={{ fontFamily: 'Kanit' }} onClick={() => this.next()}>
                                                ถัดไป
                                        </Button>
                                        </>
                                    )}
                                    {current === steps.length - 1 && (

                                        <Button type="primary" style={{ fontFamily: 'Kanit' }} onClick={() => this.submit()}>
                                            บันทึก
                                        </Button>
                                    )}

                                </div>
                            </div>

                        </div>
                    </div>


                </Content>
            </Hoc>

        )
    }
}
