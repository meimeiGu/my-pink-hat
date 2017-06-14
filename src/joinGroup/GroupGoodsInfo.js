/**
 * Created by wmm on 2017/5/11.
 */
import React from 'react'
import parseQueryString from '../common/parseQueryString';
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
                    <img className="group-detail-goods-img" src={"http://oq57snhhw.bkt.clouddn.com/"+this.props.data.gbgoods_pic}/>
                    <div className="group-detail-goods-info">
                        <div className="group-detail-goods-title">
                            {this.props.data.gbgoods_name}
                        </div>
                        <div className="group-detail-goods-group-info" data-reactid="13"></div>
                        <div className="group-detail-goods-sales-info">
                            <span className="group-member-num">2人团</span>
                            <span className="sales-num"> · 已团2件</span>
                        </div>
                        <div className="group-detail-goods-price-info">
                            <div className="price">
                                <span className="unit" >￥</span>
                                <span className="num" >{this.props.data.gbgoods_gbprice}</span>
                            </div>
                            <span className="group-member-num group-price-gap">
                            拼团省{(this.props.data.gbgoods_originprice-this.props.data.gbgoods_gbprice)*(parseQueryString(location.href).num?parseQueryString(location.href).num:1)}元
                            </span>

                        </div>

                    </div>
                </div>

            </div>

        )
    }
}

export default GroupGoodsInfo


