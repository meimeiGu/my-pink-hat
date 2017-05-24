/**
 * Created by wmm on 2017/5/24.
 */
import React from 'react'

class OcAddress extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
        <section id="oc-address" className="oc-address">
            <div className="oc-address-container">
                <div className="oc-add-address indicator">
                    <span>手动添加收货地址</span>
                </div>
            </div>

        </section>)

    }
}

export default OcAddress
