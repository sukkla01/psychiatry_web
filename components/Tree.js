import React, { Component } from 'react'

export default class Tree extends Component {
    constructor() {
        super()
        this.state = {
            select: 0,
            detail:''
        }
    }
    componentDidMount(){
        let no6 = JSON.parse(localStorage.getItem('6'))
        let detail = JSON.parse(localStorage.getItem('detail'))


        this.setState({
            select :  no6 != null ? no6.chioce : 0,
            detail :  detail != null ? detail.detail : '',
        })

    }


    onSelect = (no, chioce) => {
        this.setState({
            select: chioce
        })
        localStorage.setItem('6', JSON.stringify({no:no,chioce}));

    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value,
        })
        localStorage.setItem('detail', JSON.stringify({detail : e.target.value }));
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

                <p> คะแนน <button  style={{ marginLeft: 0 }} type="button" className="btn btn-danger  btn-xs" >1</button> แทบไม่มี
                <span style={{ marginLeft: 10 }}>คะแนน <button  style={{ marginLeft: 0 }} type="button" className="btn btn-danger  btn-xs" >2</button> เป็นบางครั้ง</span></p>
                <p>คะแนน <button  style={{ marginLeft: 0 }} type="button" className="btn btn-danger  btn-xs" >3</button> บ่อยครั้ง <span style={{ marginLeft: 2 }}>คะแนน <button  style={{ marginLeft: 0 }} type="button" className="btn btn-danger  btn-xs" >4</button> เป็นประจํา</span></p>

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
                <p style={{ marginTop:20,color:'red' }}>คุณอยากจะบอกอะไรกับองค์กรของคุณ ?</p>
                <textarea onChange={this.onChange} value={this.state.detail} style={{ marginTop:-10,fontFamily:'Kanit',borderColor:'#EE8497'}} className="form-control" rows={4} name="detail" placeholder="กรอกข้อมูล" />

                <div class={colorBorder} id="context-menu-simple" style={{ marginTop:10 }}>
                    <div class="card-body" style={{ textAlign: 'center' }}>

                        <p style={{ marginTop: 20, fontSize: 20 }}>{select > 2 ? 'เสี่ยง' : 'ไม่เสี่ยง'}</p>
                    </div>
                </div>

            </>
        )
    }
}
