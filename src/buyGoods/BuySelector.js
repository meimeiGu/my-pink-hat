/**
 * Created by wmm on 2017/5/23.
 */
import React from 'react'
import BuySelectorHead from './BuySelectorHead'
import BuySelectorBody from './BuySelectorBody'
import OrderContainer from '../orderCheckout/OrderContainer'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route,} from 'react-router-dom'
class BuySelector extends React.Component{
    constructor(props) {
        super(props);
        this.state={goods:'',minPrice:'',text:''}
        this.userChoiceInfo = this.userChoiceInfo.bind(this);
        this.jump = this.jump.bind(this);

    }

    jump() {
        <Route path="/orderCheckout" component={OrderContainer}/>
    }


    userChoiceInfo(id){
        console.log(id+'biubiubiu')
        if(id){
            console.log(id+'hhh')
            this.props.skus.map((item) => {
                if(item.gbsku_id === id){
                    if(this.props.type === "group")
                    {
                    this.setState({goods:item.gbsku_price,text:item.gbsku_name})
                    }else {
                        this.setState({goods:item.gbsku_oldprice,text:item.gbsku_name})
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
                     <BuySelectorBody skus={this.props.skus} info={this.userChoiceInfo}/>
                     <div className="buy-selector-bottom" onClick={this.jump()}>确定</div>
                 </div>
             </div>
         </section>
        )
    }
}

export default BuySelector