/**
 * Created by wmm on 2017/5/25.
 */
import React from 'react'

class EditAddress extends React.Component{
    constructor(props) {
        super(props);
        this.state = {ok:false,content:''}
        this.saveAddress = this.saveAddress.bind(this);
        this.toastShow = this.toastShow.bind(this);
    }

    toastShow() {
        this.setState({content:''})
    }


    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    saveAddress() {
        if(document.getElementById('name').checkValidity() && document.getElementById('mobile').checkValidity()) {
        this.props.open(false);
        this.props.save(document.getElementById('name').value,document.getElementById('mobile').value)
    }
    else {
        if (!document.getElementById('name').value) {
            this.setState({content: '名字不能为空'})
        }
        else if (!document.getElementById('mobile').value) {
            this.setState({content: '电话号码不能为空'})
        }
        else  {
            this.setState({content: '请输入有效的电话号码'})
        }
        this.props.open(true)
        if(!this.state.content){
            this.timer = setTimeout(
                () =>{
                    this.toastShow()
                },3000
             )
            }
        }

    }
    render(){
        return(
        <div id="edit-address">
            <div className="edit-main">
                <div className="edit-title">添加联系地址</div>
                <div className="edit-receiver">
                    <input className="add-name" id="name" placeholder="名字" type="text" required />
                        <input className="add-mobile" id="mobile" placeholder="电话" type="tel" required  pattern="1[0-9]{10}" />
                </div>
                <div className="add-save" onClick={()=>{this.saveAddress()}}>保存</div>
                <div className="add-close" onClick={()=>{this.props.open(false)}}>
                    <i className="iconfont icon-cha"></i>
                </div>
                {this.state.content?<div className="add-toast">{this.state.content}</div>:null}
            </div>
        </div>

        )

    }
}

export default EditAddress
