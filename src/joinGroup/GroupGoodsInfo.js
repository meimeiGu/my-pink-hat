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
                    <img className="group-detail-goods-img" src="http://localhost/my-pink-hat/images/r.jpg"/>
                    <div className="group-detail-goods-info">
                        <div className="group-detail-goods-title">
                            专利申请，包括发明专利、实用新型专利、外观专利，学生、微企可申请国家补贴...
                        </div>
                        <div className="group-detail-goods-group-info" data-reactid="13"></div>
                        <div className="group-detail-goods-sales-info">
                            <span className="group-member-num">2人团</span>
                            <span className="sales-num"> · 已团2件</span>
                        </div>
                        <div className="group-detail-goods-price-info">
                            <div className="price">
                                <span className="unit" >￥</span>
                                <span className="num" >2200</span>
                            </div>
                            <span className="group-member-num group-price-gap">
                            拼团省100元
                            </span>

                        </div>

                    </div>
                </div>

            </div>

        )
    }
}

export default GroupGoodsInfo


