/**
 * Created by wmm on 2017/5/23.
 */
import React from 'react'
class BuySelectorHead extends React.Component{
    constructor(props) {
        super(props);
        this.state={price:''}

    }
    componentDidMount() {
        if(this.props.selectd){
            this.props.skus.map((item) => {
                if(item.gbsku_id == this.props.selectd){
                    this.setState({price:item.gbsku_price})
                }
            })
        }else {
            let data = [];
            this.props.skus.map((item) => {
                data.push(parseInt(item.gbsku_price))
            })
            this.setState({price:Math.min.apply(null,data)})

        }

    }

    render(){
        return(
            <div className="goods-selector-head">
                <img src="http://localhost/my-pink-hat/images/buyGoods/233.jpg"/>
                <div className="goods-selector-head-content">
                    <div className="goods-selector-price">￥{this.state.price}</div>
                    <div className="goods-selector-desc">请选择类型</div>
                </div>
                <div className="goods-selector-close" onClick={()=>{this.props.signalBuy(false);this.props.groupBuy(false)}} >
                    <i className="iconfont icon-cha"></i>
                </div>

            </div>


        )
    }
}

export default BuySelectorHead