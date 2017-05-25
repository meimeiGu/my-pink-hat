/**
 * Created by wmm on 2017/5/11.
 */
import React from 'react'
import OcAddress from './OcAddress'
import OcGoods from './OcGoods'
import OcPayment from './OcPayment'
import OcBottom from './OcBottom'
import EditAddress from './EditAddress'
class OrderContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state={editAddress:false}
        this.openEditAddress = this.openEditAddress.bind(this);
    }

    openEditAddress(params) {
        this.setState({editAddress:params})

    }

    componentDidMount(){
        document.getElementsByTagName('body')[0].style.backgroundColor="#f2f2f2";
    }
    render(){
        return(
            <div >
                <OcAddress open={this.openEditAddress}/>
                <OcGoods/>
                <OcPayment/>
                <OcBottom/>
                {this.state.editAddress?<EditAddress open={this.openEditAddress}/>:null}
            </div>
        )
    }
}

export default OrderContainer
