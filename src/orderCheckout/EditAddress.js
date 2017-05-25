/**
 * Created by wmm on 2017/5/25.
 */
import React from 'react'

class EditAddress extends React.Component{
    constructor(props) {
        super(props);
        this.state = {name:'',phone:'',ok:false}
        this.saveAddress = this.saveAddress.bind(this);
    }
    saveAddress() {
        console.log(document.getElementById('name').checkValidity())
    if(document.getElementById('name').checkValidity() && document.getElementById('mobile').checkValidity()){
        this.setState({ok:true})
    }else {
        alert('shuru')
    }

    }
    render(){
        return(
        <div id="edit-address">
            <div className="edit-main">
                <div className="edit-title">添加联系地址</div>
                <div className="edit-receiver">
                    <input className="add-name" id="name" placeholder="名字" type="text" required />
                        <input className="add-mobile" id="mobile" placeholder="电话" type="tel" required />
                </div>
                <div className="add-save" onClick={()=>{this.saveAddress;this.state.ok?this.props.open(false):null}}>保存</div>
                <div className="add-close" onClick={()=>{this.props.open(false)}}>
                    <i className="iconfont icon-cha"></i>

                </div>
            </div>
        </div>

        )

    }
}

export default EditAddress
