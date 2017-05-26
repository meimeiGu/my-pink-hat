/**
 * Created by wmm on 2017/5/23.
 */
import React from 'react'
import GoodsOption from './GoodsOption'
import BuySelectorNum from './BuySelectorNum'
class BuySelectorBody extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div id="goods-selector-body">
            <GoodsOption skus={this.props.skus}/>
            <GoodsOption/>
            <BuySelectorNum/>
            </div>


        )
    }
}

export default BuySelectorBody