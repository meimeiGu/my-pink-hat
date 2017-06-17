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
        this.state={detailData:[],groupData:[],signal:false,group:false,joinGroup:false,order_id:''}
        this.signalBuy = this.signalBuy.bind(this);
        this.groupBuy = this.groupBuy.bind(this);
        this.joinGroup = this.joinGroup.bind(this);
        this.openChoice = this.openChoice.bind(this);
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
                search: '?gbgoods_id='+this.state.detailData.gbgoods_id+'&gbsku_id='+this.state.detailData.skus[0].gbsku_id+'&buyType='+'signal',
            })
        }
    }

    openChoice(params){
        this.setState({joinGroup:params})

    }

    joinGroup(gbsingleorder_id) {
        this.setState({order_id:gbsingleorder_id})
        const history = createBrowserHistory({
                forceRefresh: true
            })
            history.push({
                pathname: '/joinGroup',
                search: '?gbgoods_id='+this.state.detailData.gbgoods_id+'&gbsku_id='+this.state.detailData.skus[0].gbsku_id+'&buyType='+'joinGroup&gbsingleorder_id='+gbsingleorder_id,
            })
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
                    search: '?gbgoods_id='+this.state.detailData.gbgoods_id+'&gbsku_id='+this.state.detailData.skus[0].gbsku_id+'&buyType='+'group',
                })
            }
    }

    componentDidMount() {
        let id = parseQueryString(location.href).id
        if(parseQueryString(location.href).buyType === "joinGroup"){
            this.setState({joinGroup:true})
        }
        let storage=window.localStorage;
        let userId = storage.getItem("userId");
        axios({
            method:'GET',
            params:{userId:userId,gbgoods_id:id},
            url:'http://qhnaminal.com/my-pink-hat/admin/index.php/Index/gbdatadetail',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
            }

        }).then((response) => {
            this.setState({detailData: response.data[0],groupData:response.data[1]});
        });
    }

    render(){
        return(
            <div className="goods-container">
                <BigImage imgName={this.state.detailData.gbgoods_pic}/>
                <GoodsInfo goodsInfo={this.state.detailData}/>
                <GoodsServer/>
                {this.state.groupData?<LocalGroups joinGroup={this.joinGroup} data={this.state.groupData}/>:null}
                <GoodsBottom sPrice = {this.state.detailData.gbgoods_price} gb_price={this.state.detailData.gbgoods_gbprice} skuNum = {this.state.detailData.gbgoods_skunum} signalBuy={this.signalBuy} groupBuy={this.groupBuy}/>
                {this.state.signal?<BuySelector type = "signal" signalBuy={this.signalBuy} groupBuy={this.groupBuy} openChoice={this.openChoice} skus={this.state.detailData.skus} goods_id={this.state.detailData.gbgoods_id}  />:null}
                {this.state.group?<BuySelector type = "group"  signalBuy={this.signalBuy} groupBuy={this.groupBuy} skus={this.state.detailData.skus} openChoice={this.openChoice} goods_id={this.state.detailData.gbgoods_id} />:null}
               {this.state.joinGroup?<BuySelector type = "joinGroup"  signalBuy={this.signalBuy} groupBuy={this.groupBuy} openChoice={this.openChoice} skus={this.state.detailData.skus} goods_id={this.state.detailData.gbgoods_id} order_id={this.state.order_id}/>:null}

            </div>
        )
    }
}

export default Container