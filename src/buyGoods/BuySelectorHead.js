/**
 * Created by wmm on 2017/5/23.
 */
import React from 'react'
class BuySelectorHead extends React.Component{
    constructor(props) {
        super(props);
        this.state={price:''}

    }
    componentWillMount(){
        if(!this.props.selectd){
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
                <img src="http://localhost/8080/images/buyGoods/r.jpg"/>
                <div className="goods-selector-head-content">
                    <div className="goods-selector-price">{this.props.selectd?this.props.selectd:this.state.price}</div>
                    <div className="goods-selector-desc">{this.props.text?this.props.text:"请选择类型"}</div>
                </div>
                <div className="goods-selector-close" onClick={()=>{this.props.signalBuy(false);this.props.groupBuy(false)}} >
                    <i className="iconfont icon-cha"></i>
                </div>

            </div>


        )
    }
}

export default BuySelectorHead