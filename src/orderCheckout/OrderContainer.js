/**
 * Created by wmm on 2017/5/11.
 */
import React from 'react'
import OcAddress from './OcAddress'
import OcGoods from './OcGoods'
import OcPayment from './OcPayment'
import OcBottom from './OcBottom'
import EditAddress from './EditAddress'
import parseQueryString from '../common/parseQueryString'
import axios from 'axios';
class OrderContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state={editAddress:false,allData:[]}
        this.openEditAddress = this.openEditAddress.bind(this);
    }

    openEditAddress(params) {
        this.setState({editAddress:params})

    }

    componentDidMount(){
        let sku_id = parseQueryString(location.href).gbsku_id;
        document.getElementsByTagName('body')[0].style.backgroundColor="#f2f2f2";
        axios({
            method:'POST',
            /*data: {'sku_id': '1'},*/
            url:'http://xyhelp.cn/my-pink-hat/admin/index.php/api/index/groupdata?sku_id='+sku_id,
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
            }

        }).then((response) => {
            this.setState({allData: response.data[0]});
        });
    }
    render(){
        return(
            <div >
                <OcAddress open={this.openEditAddress}/>
                <OcGoods data={this.state.allData}/>
                <OcPayment/>
                <OcBottom/>
                {this.state.editAddress?<EditAddress open={this.openEditAddress}/>:null}
            </div>
        )
    }
}

export default OrderContainer
