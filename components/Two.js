import React, { Component } from 'react'
import { Input, Select, Button, Modal } from 'antd';

const Low = () => (
    <>
        <p>
            <span style={{ marginRight:5}}><b>1.เครียดน้อย</b></span>
            <span> เป็นความเครียดในชีวิตประจำวัน ซึ่งแต่ละคนสามารถปรับตัวได้เองไม่เกินปัญหาสุขภาพของตนเอง และท่านยังสามารถช่วยดูบุคลอื่นในครอบครัวและชุมชนได้ด้วย</span>
        </p>
    </>
)
const Middle = () => (
    <>
        <p>
            <span style={{ marginRight:5}}><b>2.เครืยดปานกลาง</b></span>
            <span> ในภาวะวิกฤตหรือภัยพิบัติบุคคลต้องเตรียมพร้อมในการจัดการกะบปัญหาต่างๆ จนทำให้เกิดความเครียดเพิ่มขึ้นในระดับปานกลาง ซึ่งยังถือว่าเป็นปกติเพราะทำให้เกิดความกระตือรือร้นในการเผชิญปัญหา</span>
        </p>
    </>
)
const Higher = () => (
    <>
        <p>
            <span style={{ marginRight:5}}><b>4.เครียดมากที่สุด</b></span>
            <span> เป็นความเครียดที่รุนแรงซึ่งส่งผลกระทบต่อภาวะร่างกาย ทำให้อ่อนแอเจ็บป่วยง่าย และต่อภาวะจิตใจจนอาจทำให้เกิดโรควิตกกังวล  ภาวะซึมเศร้า และเสี่ยงต่อการฆ่าตัวตายจะต้องได้รับการรักษาจากแพทย์ทันที และได้รับดูแลต่อเนื่องไปอีก 3-6 เดือน</span>
        </p>
    </>
)
const High = () => (
    <>
        <p>
            <span style={{ marginRight:5}}><b>3.เครียดมาก</b></span>
            <span>นภาวะวิกฤตหรือภัยพิบัติต่างๆ อาจทำให้เกิดการตอบสนองที่รุนแรงขึ้นชั่วคราวซึ่งมักจะลดมาเป็นปกติหลังเหตุการณ์ อย่างไรตามท่านควรมีการจัดการกับความเครียดดังต่อไปนี้</span>
        </p>
        <p style={{ marginLeft:5}}>- การฝึกการฝึกหายใจคลายเครียด</p>
        <p style={{ marginLeft:5}}>- การพูดคุยกับคนใกล้ชิด การสวนมนต์ไหว้พระ การช่วยเหลือผู้อื่นที่ประสบปัญหาจะช่วยให้ความเครียดลดลง</p>
        <p style={{ marginLeft:5}}>- การมีความหวังว่า เราจะฝ่าฟันอุปสรรคหรือปัญหาครั้งนี้ไปได้และมองเห็นด้านบวก เช่น อย่างน้อยก็มีชีวิตไว้ได้ มีคนเห็นใจและมีการช่วยเหลือจากฝ่ายต่างๆ</p>
        <p style={{ marginLeft:5}}>- มองข้ามความขัดแย้งเก่าๆในอดีตแล้วรวมตัวกันช่วยให้ชุมชนผ่านวิกฤตไปได้</p>
        <p style={{ marginLeft:5}}>- ภานใน 2 สัปดาห์ ท่านควรไปพบแพทย์เพื่อประเมินซ้ำว่าความเครียดลดลงหรือไม่เพราะความเครียดที่มากและต่อเนื่องอาจนำไปสู่โรควิตกกังวล ภาวะซึมเศร้า และเสี่ยงต่อการฆ่าตัวตายได้ ซึ่งจะต้องได้รับการรักษาจากแพทย์</p>
    </>
)

export default class Two extends Component {
    constructor(props) {
        super(props)
        this.state = {
            select1: 0,
            no1: 0,
            select2: 0,
            no2: 0,
            select3: 0,
            no3: 0,
            select4: 0,
            no4: 0,
            select5: 0,
            no5: 0,

            data: [],
            data_new: [],

            visible: false
        }
    }
    componentDidMount() {
        let no1 = JSON.parse(localStorage.getItem('1'))
        let no2 = JSON.parse(localStorage.getItem('2'))
        let no3 = JSON.parse(localStorage.getItem('3'))
        let no4 = JSON.parse(localStorage.getItem('4'))
        let no5 = JSON.parse(localStorage.getItem('5'))


        this.setState({
            select1: no1 != null ? no1.chioce : 0,
            select2: no2 != null ? no2.chioce : 0,
            select3: no3 != null ? no3.chioce : 0,
            select4: no4 != null ? no4.chioce : 0,
            select5: no5 != null ? no5.chioce : 0,
            no1: no1 != null ? no1.no : 0,
            no2: no2 != null ? no2.no : 0,
            no3: no3 != null ? no3.no : 0,
            no4: no4 != null ? no4.no : 0,
            no5: no5 != null ? no5.no : 0,
        })

    }

    onSelect = (no, chioce) => {
        let selectChk = 'select' + chioce
        let noChk = 'no' + no

        if (no == 1) {
            this.setState({ select1: chioce, no1: no })
            localStorage.setItem('1', JSON.stringify({ no: no, chioce }));
        }
        if (no == 2) {
            this.setState({ select2: chioce, no2: no })
            localStorage.setItem('2', JSON.stringify({ no: no, chioce }));
        }
        if (no == 3) {
            this.setState({ select3: chioce, no3: no })
            localStorage.setItem('3', JSON.stringify({ no: no, chioce }));
        }
        if (no == 4) {
            this.setState({ select4: chioce, no4: no })
            localStorage.setItem('4', JSON.stringify({ no: no, chioce }));
        }
        if (no == 5) {
            this.setState({ select5: chioce, no5: no })
            localStorage.setItem('5', JSON.stringify({ no: no, chioce }));
        }


    }

    suggest = () => {
        this.setState({
            visible: true
        })
    }

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };
    handleOk = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        const { select1, no1, select2, no2, select3, no3, select4, no4, select5, no5 } = this.state
        const total = select1 + select2 + select3 + select4 + select5
        const colorBorder = total < 5 ? "card card-inverse-success" : total < 8 ? "card card-inverse-warning" : "card card-inverse-danger"
        const textTotal = total < 5 ? 'เครียดเล็กน้อย' : total < 8 ? 'เครียดปานกลาง' : total < 10 ? 'เครียดมาก' : 'เครียดมากที่สุด'
        const imgNo = total < 5 ? '5' : total < 8 ? '3' : total < 10 ? '6' : '4'
        const textSuggest = total < 5 ? <Low /> : total < 8 ? <Middle /> : total < 10 ? <High /> : <Higher />
        return (
            <>
                <hr />
                <div style={{ marginTop: 20, textAlign: 'left' }}>
                    <p><b>ให้ประเมินอาการของท่านในรอบ 2 สัปดาห์ที่ผ่านมา (รวมทั้งวันนี้) โดยเลือกคะแนน 0 – 3 ที่ตรงกับ ความรู้สึกของท่าน</b></p>
                </div>

                <p> คะแนน <div class="badge badge-danger badge-pill">0</div> แทบไม่มี
                <span style={{ marginLeft: 18 }}>คะแนน <div class="badge badge-danger badge-pill">1</div> เป็นบางคร้ัง</span></p>
                <p>คะแนน <div class="badge badge-danger badge-pill">2</div> บ่อยครั้ง <span style={{ marginLeft: 10 }}>คะแนน <div class="badge badge-danger badge-pill">3</div> เป็นประจํา</span></p>



                <div class="card card-inverse-info" id="context-menu-simple">
                    <div class="card-body">
                        <p class="card-text">
                            1. มีปัญหาการนอน นอนไม่หลับ หรือนอนมาก
                        </p>
                        <p class="card-text">
                            เลือกคะแนน
                            <button onClick={() => { this.onSelect(1, 0) }} style={{ marginLeft: 7 }} type="button" className={no1 == 1 && select1 == 0 ? "btn btn-success  btn-sm" : "btn btn-outline-success  btn-sm"}>0</button>
                            <button onClick={() => { this.onSelect(1, 1) }} style={{ marginLeft: 7 }} type="button" className={no1 == 1 && select1 == 1 ? "btn btn-success  btn-sm" : "btn btn-outline-success  btn-sm"}>1</button>
                            <button onClick={() => { this.onSelect(1, 2) }} style={{ marginLeft: 7 }} type="button" className={no1 == 1 && select1 == 2 ? "btn btn-success  btn-sm" : "btn btn-outline-success  btn-sm"}>2</button>
                            <button onClick={() => { this.onSelect(1, 3) }} style={{ marginLeft: 7 }} type="button" className={no1 == 1 && select1 == 3 ? "btn btn-success  btn-sm" : "btn btn-outline-success  btn-sm"}>3</button>


                        </p>
                    </div>
                </div>
                <div class="card card-inverse-info" id="context-menu-simple" style={{ marginTop: 10 }}>
                    <div class="card-body">
                        <p class="card-text">
                            2. มีสมาธิน้อยลง
                        </p>
                        <p class="card-text">
                            เลือกคะแนน
                            <button onClick={() => { this.onSelect(2, 0) }} style={{ marginLeft: 7 }} type="button" className={no2 == 2 && select2 == 0 ? "btn btn-success  btn-sm" : "btn btn-outline-success  btn-sm"}>0</button>
                            <button onClick={() => { this.onSelect(2, 1) }} style={{ marginLeft: 7 }} type="button" className={no2 == 2 && select2 == 1 ? "btn btn-success  btn-sm" : "btn btn-outline-success  btn-sm"}>1</button>
                            <button onClick={() => { this.onSelect(2, 2) }} style={{ marginLeft: 7 }} type="button" className={no2 == 2 && select2 == 2 ? "btn btn-success  btn-sm" : "btn btn-outline-success  btn-sm"}>2</button>
                            <button onClick={() => { this.onSelect(2, 3) }} style={{ marginLeft: 7 }} type="button" className={no2 == 2 && select2 == 3 ? "btn btn-success  btn-sm" : "btn btn-outline-success  btn-sm"}>3</button>


                        </p>
                    </div>
                </div>
                <div class="card card-inverse-info" id="context-menu-simple" style={{ marginTop: 10 }}>
                    <div class="card-body">
                        <p class="card-text">
                            3. หงุดหงิด กระวนกระวาย ว้าวุ่นใจ
                        </p>
                        <p class="card-text">
                            เลือกคะแนน
                            <button onClick={() => { this.onSelect(3, 0) }} style={{ marginLeft: 7 }} type="button" className={no3 == 3 && select3 == 0 ? "btn btn-success  btn-sm" : "btn btn-outline-success  btn-sm"}>0</button>
                            <button onClick={() => { this.onSelect(3, 1) }} style={{ marginLeft: 7 }} type="button" className={no3 == 3 && select3 == 1 ? "btn btn-success  btn-sm" : "btn btn-outline-success  btn-sm"}>1</button>
                            <button onClick={() => { this.onSelect(3, 2) }} style={{ marginLeft: 7 }} type="button" className={no3 == 3 && select3 == 2 ? "btn btn-success  btn-sm" : "btn btn-outline-success  btn-sm"}>2</button>
                            <button onClick={() => { this.onSelect(3, 3) }} style={{ marginLeft: 7 }} type="button" className={no3 == 3 && select3 == 3 ? "btn btn-success  btn-sm" : "btn btn-outline-success  btn-sm"}>3</button>


                        </p>
                    </div>
                </div>
                <div class="card card-inverse-info" id="context-menu-simple" style={{ marginTop: 10 }}>
                    <div class="card-body">
                        <p class="card-text">
                            4. รู้สึกเบื่อหน่าย เซ็ง
                        </p>
                        <p class="card-text">
                            เลือกคะแนน
                            <button onClick={() => { this.onSelect(4, 0) }} style={{ marginLeft: 7 }} type="button" className={no4 == 4 && select4 == 0 ? "btn btn-success  btn-sm" : "btn btn-outline-success  btn-sm"}>0</button>
                            <button onClick={() => { this.onSelect(4, 1) }} style={{ marginLeft: 7 }} type="button" className={no4 == 4 && select4 == 1 ? "btn btn-success  btn-sm" : "btn btn-outline-success  btn-sm"}>1</button>
                            <button onClick={() => { this.onSelect(4, 2) }} style={{ marginLeft: 7 }} type="button" className={no4 == 4 && select4 == 2 ? "btn btn-success  btn-sm" : "btn btn-outline-success  btn-sm"}>2</button>
                            <button onClick={() => { this.onSelect(4, 3) }} style={{ marginLeft: 7 }} type="button" className={no4 == 4 && select4 == 3 ? "btn btn-success  btn-sm" : "btn btn-outline-success  btn-sm"}>3</button>


                        </p>
                    </div>
                </div>
                <div class="card card-inverse-info" id="context-menu-simple" style={{ marginTop: 10 }}>
                    <div class="card-body">
                        <p class="card-text" style={{ fontSize: 14 }}>
                            5. ไม่อยากพบปะผู้คน
                        </p>
                        <p class="card-text">
                            เลือกคะแนน
                            <button onClick={() => { this.onSelect(5, 0) }} style={{ marginLeft: 7 }} type="button" className={no5 == 5 && select5 == 0 ? "btn btn-success  btn-sm" : "btn btn-outline-success  btn-sm"}>0</button>
                            <button onClick={() => { this.onSelect(5, 1) }} style={{ marginLeft: 7 }} type="button" className={no5 == 5 && select5 == 1 ? "btn btn-success  btn-sm" : "btn btn-outline-success  btn-sm"}>1</button>
                            <button onClick={() => { this.onSelect(5, 2) }} style={{ marginLeft: 7 }} type="button" className={no5 == 5 && select5 == 2 ? "btn btn-success  btn-sm" : "btn btn-outline-success  btn-sm"}>2</button>
                            <button onClick={() => { this.onSelect(5, 3) }} style={{ marginLeft: 7 }} type="button" className={no5 == 5 && select5 == 3 ? "btn btn-success  btn-sm" : "btn btn-outline-success  btn-sm"}>3</button>


                        </p>
                    </div>
                </div>
                <div class={colorBorder} id="context-menu-simple" style={{ marginTop: 10 }}>
                    <div class="card-body" style={{ textAlign: 'center' }}>

                        <p style={{ marginTop: 20, fontSize: 20 }}>คะแนนรวม {total} คะแนน</p>
                        <p style={{ marginTop: 20, fontSize: 20 }}>{textTotal}</p>
                        {/* <p  onClick = {this.suggest} style={{ marginTop: -10, fontSize: 14, color: 'red',cursor:'pointer' }}><i className="mdi mdi-information"></i> คลิกดูคำแนะนำ</p> */}
                    </div>
                </div>
                <div class={colorBorder} id="context-menu-simple" style={{ marginTop: 10 }}>
                    <div class="card-body" style={{ textAlign: 'left' }}>
                        {textSuggest}
                    </div>
                </div>
                <img src={"static/psy/"+imgNo +".jpg"} style={{ width: '100%', paddingTop: 10 }} />


                <Modal
                    title="คำแนะนำ"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    //confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <img src="static/images/suggest.png" style={{ width: '100%' }} />
                </Modal>
            </>
        )
    }
}
