/**
 * Created by wmm on 2017/5/11.
 */
import React from 'react'
class GroupGoodsInfo extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        document.getElementsByTagName('body')[0].style.backgroundColor="#f2f2f2";
    }
    render(){
        return(
            <div className="group-detail-goods">
                <div className="group-detail-goods-info-wrapper">
                    <img className="group-detail-goods-img" src="http://localhost/my-pink-hat/images/ll.jpg"/>
                    <div className="group-detail-goods-info">
                        <div className="group-detail-goods-title">
                            【品牌清仓】【卡帝乐鳄鱼家纺】可水洗夏被 夏凉被亲肤柔软夏被空调被 多规格可选
                        </div>
                        <div className="group-detail-goods-group-info" data-reactid="13"></div>
                        <div className="group-detail-goods-sales-info">
                            <span className="group-member-num">2人团</span>
                            <span className="sales-num"> · 已团5788件</span>
                        </div>
                        <div className="group-detail-goods-price-info">
                            <div className="price">
                                <span className="unit" >￥</span>
                                <span className="num" >8.6</span>
                            </div>
                            <span className="group-member-num group-price-gap">
                            拼团省290.4元
                            </span>

                        </div>

                    </div>
                </div>

            </div>

        )
    }
}

export default GroupGoodsInfo


