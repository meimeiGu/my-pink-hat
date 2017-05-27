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
        this.state={goods:''}
        this.userChoiceInfo = this.userChoiceInfo.bind(this)

    }

    userChoiceInfo(id){
        this.setState({goods:id})
    }


    render(){
        return(
         <section className="buy-selector-bg">
             <div className="buy-selector-main">
                 <div className="buy-selector-container buy-selector-main-show">
                     <BuySelectorHead signalBuy={this.props.signalBuy} groupBuy={this.props.groupBuy} skus={this.props.skus} selectd={this.state.goods}/>
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