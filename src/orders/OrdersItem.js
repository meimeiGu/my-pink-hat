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
                        <img className="goods-img" src="http://localhost/my-pink-hat/images/r.jpg"/>
                        <div className="goods-name">
                            <p>专利申请，包括发明专利、实用新型专利、外观专利，学生、微企可申...</p>
                            </div>
                            <p className="spec">外观专利</p>
                            <div className="price-and-num">
                                <div className="goods-price"><span>￥</span>2200</div>
                                <div className="goods-number">x1</div>
                            </div>
                        </div>
                    <div className="currency-block">
                        {/*<p className="currency-free">(免运费)</p>*/}
                        <p className="currency-amount">2200</p>
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
