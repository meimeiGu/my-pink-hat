/**
 * Created by wmm on 2017/5/23.
 */
import React from 'react'
import GoodsOption from './GoodsOption'
import BuySelectorNum from './BuySelectorNum'
class BuySelectorBody extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props.skus.length+'h')

    }



    render(){
        return(
            <div id="goods-selector-body">

               {/*存在多种选择的时候扩展
                {this.props.skus.map((item) => {
                    return(<GoodsOption sku={item} key={item.gbsku_id.toString()}/>)
                })}*/}
                <GoodsOption skus={this.props.skus} info={this.props.info} />

            <BuySelectorNum/>
            </div>


        )
    }
}

export default BuySelectorBody