/**
 * Created by wmm on 2017/5/24.
 */
import React from 'react'

class OcAddress extends React.Component{
    constructor(props) {
        super(props);
        this.state = {readAddress:false}
    }
    render(){
        let addAddress =  <div className="oc-add-address indicator">
            <span>手动添加收货地址</span>
        </div>
        let editAddress = <div className="oc-address-info ">
            <div className="oc-address-location">
                <i className="iconfont icon-address"></i>
            </div>
            <div className="oc-address-main-info">
                <div className="oc-address-receiver">
                    <span className="oc-address-receiver-name">134</span>
                    <span className="oc-address-receiver-mobile">18354305983</span>
                </div>
            </div>
            <div className="oc-address-right-arrow">
                <i className="iconfont icon-jiantouyou"></i>
            </div>
        </div>
        return(
        <section id="oc-address" className="oc-address">
            <div className="oc-address-container" onClick={()=>{this.props.open(true)}}>
                {this.state.readAddress?editAddress:addAddress}
            </div>
        </section>)
    }
}

export default OcAddress
