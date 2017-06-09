/**
 * Created by wmm on 2017/5/24.
 */
import React from 'react'

class OcAddress extends React.Component{
    constructor(props) {
        super(props);
        this.state = {name:'',tel:''}

    }


    render(){
        let addAddress =  <div className="oc-add-address indicator">
            <span><i className="iconfont icon-tianjia1"></i>手动添加收货地址</span>
            <div className="oc-address-right-arrow">
                <i className="iconfont icon-jiantouyou"></i>
            </div>
        </div>
        let showAddress = <div className="oc-address-info ">
            <div className="oc-address-location">
                <i className="iconfont icon-address"></i>
            </div>
            <div className="oc-address-main-info">
                <div className="oc-address-receiver">
                    <span className="oc-address-receiver-name">{this.props.name}</span>
                    <span className="oc-address-receiver-mobile">{this.props.tel}</span>
                </div>
            </div>
            <div className="oc-address-right-arrow">
                <i className="iconfont icon-jiantouyou"></i>
            </div>

        </div>
        return(
        <section id="oc-address" className="oc-address">
            <div className="oc-address-container" onClick={()=>{this.props.open(true)}}>
                {this.props.readAddress?showAddress:addAddress}
            </div>

        </section>)
    }
}

export default OcAddress
