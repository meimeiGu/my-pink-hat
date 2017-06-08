/**
 * Created by wmm on 2017/5/7.
 */
import React from 'react'
import BigImage from './BigImage'
import GoodsInfo from './GoodsInfo'
import LocalGroups from './LocalGroups'
import GoodsServer from './GoodsServer'
import GoodsBottom from './GoodsBottom'
import BuySelector from '../buyGoods/BuySelector'
import parseQueryString from '../common/parseQueryString'
import createBrowserHistory  from 'history/createBrowserHistory'
import axios from 'axios';
class Container extends React.Component{
    constructor(props) {
        super(props);
        this.state={detailData:[],signal:false,group:false}
        this.signalBuy = this.signalBuy.bind(this);
        this.groupBuy = this.groupBuy.bind(this);
    }

    signalBuy(params) {
        if(this.state.detailData.gbgoods_skunum > 1)
        {
        this.setState({signal:params})
        }else{
            const history = createBrowserHistory({
                forceRefresh: true
            })
            history.push({
                pathname: '/orderCheckout',
                search: 'gbsku_id='+this.state.detailData.skus[0].gbsku_id+'&buyType='+'signal',
            })
        }
    }

    groupBuy(params) {
        if(this.state.detailData.gbgoods_skunum > 1)
        {
            this.setState({group:params})
        }else{
            const history = createBrowserHistory({
                forceRefresh: true
            })
            history.push({
                pathname: '/orderCheckout',
                search: 'gbsku_id='+this.state.detailData.skus[0].gbsku_id+'&buyType='+'group',
            })
        }
    }

    componentDidMount() {
        let id = parseQueryString(location.href).id
        console.log(id)
        axios({
            method:'GET',
            url:'http://xyhelp.cn/my-pink-hat/admin/index.php/api/index/gbdatadetail?gbgoods_id='+id,
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
            }

        }).then((response) => {
            this.setState({detailData: response.data});
        });
    }

    render(){
        return(
            <div className="goods-container">
                <BigImage imgName={this.state.detailData.gbgoods_pic}/>
                <GoodsInfo goodsInfo={this.state.detailData}/>
                <GoodsServer/>
                <LocalGroups/>
                <GoodsBottom sPrice = {this.state.detailData.gbgoods_price} gb_price={this.state.detailData.gbgoods_gbprice} skuNum = {this.state.detailData.gbgoods_skunum} signalBuy={this.signalBuy} groupBuy={this.groupBuy}/>
                {this.state.signal?<BuySelector type = "signal" signalBuy={this.signalBuy} groupBuy={this.groupBuy} skus={this.state.detailData.skus} goods_id={this.state.detailData.gbgoods_id}/>:null}
                {this.state.group?<BuySelector type = "group"  signalBuy={this.signalBuy} groupBuy={this.groupBuy} skus={this.state.detailData.skus} goods_id={this.state.detailData.gbgoods_id}/>:null}
            </div>
        )
    }
}

export default Container