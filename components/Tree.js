import React, { Component } from 'react'

export default class Tree extends Component {
    constructor() {
        super()
        this.state = {
            select: 0
        }
    }
    componentDidMount(){
        let no6 = JSON.parse(localStorage.getItem('6'))


        this.setState({
            select :  no6 != null ? no6.chioce : 0,
        })

    }


    onSelect = (no, chioce) => {
        this.setState({
            select: chioce
        })
        localStorage.setItem('6', JSON.stringify({no:no,chioce}));

    }
    render() {
        const { select } = this.state
        const colorBorder = select > 2 ? "card card-inverse-danger" : "card card-inverse-success"
        return (
            <>
                {console.log(this.state.select)}
                <hr />
                <div style={{ marginTop: 20, textAlign: 'left' }}>
                    <p><b>ในช่วง 1 สัปดาห์ที่ผ่านมา ท่านมีความเหนื่อยล้าทางอารมณ์ รู้สึกหมดพลัง หมดหวัง สูญเสียพลังงาน ทางจิตใจหรือไม่</b></p>
                </div>

                <p> คะแนน <div class="badge badge-success badge-pill">1</div> แทบไม่มี
                <span style={{ marginLeft: 18 }}>คะแนน <div class="badge badge-success badge-pill">2</div> เป็นบางครั้ง</span></p>
                <p>คะแนน <div class="badge badge-success badge-pill">3</div> บ่อยครั้ง <span style={{ marginLeft: 10 }}>คะแนน <div class="badge badge-success badge-pill">4</div> เป็นประจํา</span></p>

                <div class="card card-inverse-info" id="context-menu-simple">
                    <div class="card-body">

                        <p class="card-text">
                            เลือกคะแนน
                            <button onClick={() => { this.onSelect(6, 1) }} style={{ marginLeft: 7 }} type="button" className={select == 1 ? "btn btn-success  btn-sm" : "btn btn-outline-success  btn-sm"} >1</button>
                            <button onClick={() => { this.onSelect(6, 2) }} style={{ marginLeft: 7 }} type="button" className={select == 2 ? "btn btn-success  btn-sm" : "btn btn-outline-success  btn-sm"} >2</button>
                            <button onClick={() => { this.onSelect(6, 3) }} style={{ marginLeft: 7 }} type="button" className={select == 3 ? "btn btn-success  btn-sm" : "btn btn-outline-success  btn-sm"} >3</button>
                            <button onClick={() => { this.onSelect(6, 4) }} style={{ marginLeft: 7 }} type="button" className={select == 4 ? "btn btn-success  btn-sm" : "btn btn-outline-success  btn-sm"} >4</button>


                        </p>
                    </div>
                </div>
                <div class={colorBorder} id="context-menu-simple" style={{ marginTop: 10 }}>
                    <div class="card-body" style={{ textAlign: 'center' }}>

                        <p style={{ marginTop: 20, fontSize: 20 }}>{select > 2 ? 'เสี่ยง' : 'ไม่เสี่ยง'}</p>
                    </div>
                </div>

            </>
        )
    }
}
