import React, { Component } from 'react'
import { Input, Select, Button } from 'antd';
import config from '../Config.js'
import axios from 'axios';

const { Option } = Select;
const BASE_URL = config.BASE_URL

export default class General extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            tname: '',
            type: '0',
            tel: '',
            age: '',
            dataGeneral: [],
            loadData: []
        }
    }

    componentDidMount() {
        let data = JSON.parse(localStorage.getItem('general'))
        if (data != null) {
            this.setState({
                username: data[0].username,
                tname: data[0].tname,
                type: data[0].type,
                tel: data[0].tel,
                age: data[0].age,
            })

        }

    }


    getName =async()=>{
        try {
            const res = await axios.get(`${BASE_URL}/get-name/${this.state.username}`)

            this.setState({
                tname : res.data[0].name
            })


        } catch (error) {
            console.log(error)
        }
    }


    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })

        if (e.target.name == 'username') {
            this.onPushData(e.target.value, '', '', '', '')
        }
        if (e.target.name == 'tname') {
            this.onPushData('', e.target.value, '', '', '')
        }
        if (e.target.name == 'tel') {
            this.onPushData('', '', '', e.target.value, '')
        }
        if (e.target.name == 'age') {
            this.onPushData('', '', '', '', e.target.value)
        }

    }

    onChangeType = (value) => {
        this.setState({
            type: value
        })
        this.onPushData('', '', value, '', '')
    }

    onPushData = (username, tname, type, tel, age) => {
        console.log(typeof (type))
        console.log(type)

        this.state.dataGeneral = []
        this.state.dataGeneral.push({
            username: username == '' ? this.state.username : username,
            tname: tname == '' ? this.state.tname : tname,
            type: type == '' ? this.state.type : type,
            tel: tel == '' ? this.state.tel : tel,
            age: age == '' ? this.state.age : age,
        })

        localStorage.setItem('general', JSON.stringify(this.state.dataGeneral));
    }



    render() {
        return (
            <div>
                <hr />
                <input value={this.state.username} onChange={this.onChange} onBlur={this.getName} name="username" type="text" className="form-control" placeholder="Username"></input>
                <div style={{ marginTop: 10 }}></div>
                <input value={this.state.tname} onChange={this.onChange} name="tname" type="text" className="form-control" placeholder="ชื่อ-สกุล" ></input>
                <div style={{ marginTop: 10 }}></div>

                <Select
                    placeholder="ประเภทบุคลากร"
                    onChange={this.onChangeType}
                    allowClear
                    size="large"
                    style={{ width: '100%', fontSize: 12 }}
                    value={this.state.type}
                >
                    <Option value="0">เลือกประเภทบุคลากร</Option>
                    <Option value="1">ข้าราชการ</Option>
                    <Option value="2">ลูกจ้างประจำ</Option>
                    <Option value="3">พนักงานราชการ</Option>
                    <Option value="4">พนักงานกระทรวงสาธารณสุข</Option>
                    <Option value="5">ลูกจ้างชั่วคราว</Option>
                    <Option value="6">ลูกจ้างรายวัน</Option>
                    <Option value="7">แพทย์อินเทิร์น</Option>
                </Select>
                <div style={{ marginTop: 10 }}></div>
                <input value={this.state.tel} onChange={this.onChange} name="tel" type="text" className="form-control" placeholder="เบอร์โทรศัพท์"></input>
                <div style={{ marginTop: 10 }} >
                    <input value={this.state.age} onChange={this.onChange} name="age" type="text" className="form-control" placeholder="อายุ"></input>

                </div>
                {/* <div style={{ marginTop: 10 }}></div> */}
                {/* <Button type="primary" style={{ fontFamily: 'Kanit' }} onClick={() => this.next()}>  ถัดไป </Button> */}
            </div>
        )
    }
}
