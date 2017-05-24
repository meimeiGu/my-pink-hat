/**
 * Created by wmm on 2017/5/11.
 */
import React from 'react'
import OcAddress from './OcAddress'
import OcGoods from './OcGoods'
import OcPayment from './OcPayment'
import OcBottom from './OcBottom'
class OrderContainer extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        document.getElementsByTagName('body')[0].style.backgroundColor="#f2f2f2";
    }
    render(){
        return(
            <div >
                <OcAddress/>
                <OcGoods/>
                <OcPayment/>
                <OcBottom/>
            </div>
        )
    }
}

export default OrderContainer
