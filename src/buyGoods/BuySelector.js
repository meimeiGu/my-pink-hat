/**
 * Created by wmm on 2017/5/23.
 */
import React from 'react'
import BuySelectorHead from './BuySelectorHead'
import BuySelectorBody from './BuySelectorBody'
import { Link } from 'react-router-dom'
class BuySelector extends React.Component{
    constructor(props) {
        super(props);
        this.state={goods:'',minPrice:''}
        this.userChoiceInfo = this.userChoiceInfo.bind(this);
        this.minPrice = this.minPrice.bind(this);


    }

    minPrice(){
        let data = [];
        this.props.skus.map((item) => {
            data.push(parseInt(item.gbsku_price))
        })
        this.setState({minPrice:Math.min.apply(null,data)})
    }

    userChoiceInfo(id){
        console.log(id+'biubiubiu')
        if(id){
            console.log(id+'hhh')
            this.props.skus.map((item) => {
                if(item.gbsku_id == id){
                    this.setState({goods:item.gbsku_price})
                }
            })
        }
    }


    render(){
        return(
         <section className="buy-selector-bg">
             <div className="buy-selector-main">
                 <div className="buy-selector-container buy-selector-main-show">
                     <BuySelectorHead signalBuy={this.props.signalBuy} groupBuy={this.props.groupBuy} skus={this.props.skus} selectd={this.state.goods?this.state.goods:this.state.minPrice}/>
                     <BuySelectorBody skus={this.props.skus} info={this.userChoiceInfo}/>
                     <Link to={`/orderCheckout`}>
                     <div className="buy-selector-bottom">确定</div>
                     </Link>
                 </div>
             </div>
         </section>
        )
    }
}

export default BuySelector