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
const qs = require('qs');
class OrderContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state={editAddress:false,allData:[],type:'',num:'',name:'',tel:'',readAddress:false,orderId:''}
        this.openEditAddress = this.openEditAddress.bind(this);
        this.buyNum = this.buyNum.bind(this)
        this.saveAddress = this.saveAddress.bind(this);
        this.userPay = this.userPay.bind(this);
    }

    openEditAddress(params) {
        this.setState({editAddress:params})

    }

    saveAddress(name,tel){
        this.setState({'name':name,'tel':tel,'readAddress':true});
        let storage=window.localStorage;
        let userId = storage.getItem("userId");
        axios({
            method:'GET',
            params:{gborder_name:name,gborder_phone:tel},
            url:'http://qhnaminal.com/my-pink-hat/admin/index.php/Index/inputaddress?userId='+userId,
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
            }

        }).then((response) => {
            this.setState({orderId:response.data})

        });

    }

    buyNum(n){
        this.setState({num:n})
    }

    userPay(){
        if(!this.state.name){
            this.setState({editAddress:true})

        }else{

        let num = this.state.num?this.state.num:1;
        let price = this.state.type === "signal"?this.state.allData.gbsku_oldprice:this.state.allData.gbsku_price;
        let gbgoods_id = parseQueryString(location.href).gbgoods_id
        let sku_id = parseQueryString(location.href).gbsku_id;
        let storage=window.localStorage;
        let userId = storage.getItem("userId");
        let data =  {userId: userId,gbgoods_id:gbgoods_id,gbsku_id:sku_id,gbsingleorder_price:price,gbsingleorder_num:num,gborder_id: this.state.orderId};
        axios.post('http://qhnaminal.com/my-pink-hat/admin/index.php/Index/inputfdata',qs.stringify(data), {headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },}).then(data => {

        });

        }
    }

    componentDidMount(){
        let sku_id = parseQueryString(location.href).gbsku_id;
        let storage=window.localStorage;
        let userId = storage.getItem("userId");
        let num = parseQueryString(location.href).num;
        this.setState({type:parseQueryString(location.href).buyType,'num':num});
        document.getElementsByTagName('body')[0].style.backgroundColor="#f2f2f2";
        axios({
            method:'GET',
            url:'http://qhnaminal.com/my-pink-hat/admin/index.php/Index/groupdata?sku_id='+sku_id,
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
            }

        }).then((response) => {
            this.setState({allData: response.data[0]});
        });
        axios({
            method:'GET',
            url:'http://qhnaminal.com/my-pink-hat/admin/index.php/Index/getaddress?userId='+userId,
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
            }

        }).then((response) => {
            this.setState({readAddress: true,name:response.data[0].gborder_name,tel:response.data[0].gborder_phone,orderId:response.data[0].gborder_id});
        });
    }
    render(){
        return(
            <div >
                <OcAddress open={this.openEditAddress} readAddress={this.state.readAddress} name={this.state.name} tel={this.state.tel}/>
                <OcGoods data={this.state.allData} type={this.state.type} buyNum={this.buyNum} />
                <OcPayment />
                <OcBottom num={this.state.num?this.state.num:1} price={this.state.type === "signal"?this.state.allData.gbsku_oldprice:this.state.allData.gbsku_price} userPay={this.userPay}/>
                {this.state.editAddress?<EditAddress open={this.openEditAddress} save = {this.saveAddress}/>:null}
            </div>
        )
    }
}

export default OrderContainer
