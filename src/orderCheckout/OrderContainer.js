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
        this.state={editAddress:false,allData:[],type:'',num:'',name:'',tel:'',readAddress:false}
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

    }

    buyNum(n){
        this.setState({num:n})
    }

    userPay(){
        console.log('zhifula')
        let num = this.state.num?this.state.num:1;
        let price = this.state.type === "signal"?this.state.allData.gbsku_oldprice:this.state.allData.gbsku_price;
        let gbgoods_id = parseQueryString(location.href).gbgoods_id
        let sku_id = parseQueryString(location.href).gbsku_id;
        let storage=window.localStorage;
        let userId = storage.getItem("userId");
            url: axios({
                method:'POST',
                data: {'userId': userId,'gbgoods_id':gbgoods_id,'gbsku_id':sku_id,'gbsingleorder_price':price,'gbsingleorder_num':num},
                url:'http://xyhelp.cn/my-pink-hat/admin/index.php/api/index/inputdata',
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                }

            }).then((response) => {
               console.log(response)
        })
    }

    componentDidMount(){
        let sku_id = parseQueryString(location.href).gbsku_id;
        this.setState({type:parseQueryString(location.href).buyType})
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
                <OcAddress open={this.openEditAddress} readAddress={this.state.readAddress} name={this.state.name} tel={this.state.tel}/>
                <OcGoods data={this.state.allData} type={this.state.type} buyNum={this.buyNum}/>
                <OcPayment />
                <OcBottom num={this.state.num?this.state.num:1} price={this.state.type === "signal"?this.state.allData.gbsku_oldprice:this.state.allData.gbsku_price} userPay={this.userPay}/>
                {this.state.editAddress?<EditAddress open={this.openEditAddress} save = {this.saveAddress}/>:null}
            </div>
        )
    }
}

export default OrderContainer
