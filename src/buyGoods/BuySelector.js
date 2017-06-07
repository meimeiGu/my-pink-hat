/**
 * Created by wmm on 2017/5/23.
 */
import React from 'react'
import BuySelectorHead from './BuySelectorHead'
import BuySelectorBody from './BuySelectorBody'
import createBrowserHistory  from 'history/createBrowserHistory'
class BuySelector extends React.Component{
    constructor(props) {
        super(props);
        this.state={goods:'',minPrice:'',text:'',sku:'',num:''}
        this.userChoiceInfo = this.userChoiceInfo.bind(this);
        this.buyNum = this.buyNum.bind(this);
        this.jump = this.jump.bind(this);

    }

    jump() {
        const history = createBrowserHistory({
            forceRefresh: true
        })
        let buyType;
        if(this.props.type === "group"){
             buyType = 'group';
        }else {
             buyType = 'signal';
        }
        history.push({
            pathname: '/orderCheckout',
            search: '?gbgoods_id='+this.props.goods_id+'&gbsku_id='+this.state.sku+'&num='+this.state.num+'&buyType='+buyType,
        })
    }

    buyNum(n){
        this.setState({num:n})
        console.log(n+'number')


    }


    userChoiceInfo(id){
        if(id){
            this.props.skus.map((item) => {
                if(item.gbsku_id === id){
                    if(this.props.type === "group")
                    {
                    this.setState({goods:item.gbsku_price,text:item.gbsku_name,sku:item.gbsku_id})
                    }else {
                        this.setState({goods:item.gbsku_oldprice,text:item.gbsku_name,sku:item.gbsku_id})
                    }
                }
            })
        }
    }


    render(){
        return(
         <section className="buy-selector-bg">
             <div className="buy-selector-main">
                 <div className="buy-selector-container buy-selector-main-show">
                     <BuySelectorHead signalBuy={this.props.signalBuy} groupBuy={this.props.groupBuy} skus={this.props.skus} selectd={this.state.goods} text={this.state.text}/>
                     <BuySelectorBody skus={this.props.skus} info={this.userChoiceInfo} num={this.buyNum}/>
                     <div className="buy-selector-bottom" onClick={this.jump}>确定</div>
                 </div>
             </div>
         </section>
        )
    }
}


export default BuySelector