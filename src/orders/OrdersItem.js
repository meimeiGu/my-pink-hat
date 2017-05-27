/**
 * Created by wmm on 2017/5/27.
 */
import React from 'react'

class OrdersItem extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
                <div className="orders-item">
                    <div className="top-block">
                        <div className="mall-name">
                            <span>待支付</span>
                        </div>
                    </div>
                    <div className="item-goods">
                        <img className="goods-img" src="http://localhost/my-pink-hat/images/buyGoods/233.jpg"/>
                        <div className="goods-name">
                            <p>【10卷200只】点断式彩色垃圾袋（买一次用半年）全新料加厚平...</p>
                            </div>
                            <p className="spec">5卷100只</p>
                            <div className="price-and-num">
                                <div className="goods-price"><span>￥</span>5.4</div>
                                <div className="goods-number">x1</div>
                            </div>
                        </div>
                    <div className="currency-block">
                        <p className="currency-free">(免运费)</p>
                        <p className="currency-amount">5.4</p>
                        <p className="currency-head">实付<span>:</span>￥</p>
                    </div>
                    <div className="button-block">
                        <div className="orders-button">
                            <a className="go-pay"></a>
                            <a className="cancel"></a>
                        </div>

                    </div>
                </div>

        )
    }
}

export default OrdersItem
