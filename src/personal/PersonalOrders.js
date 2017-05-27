/**
 * Created by wmm on 2017/5/23.
 */
import React from 'react'

class PersonalOrders extends React.Component{
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render(){
        return(
          <div className="personal-orders">
              <div className="p-orders">
                  <span className="p-all-orders">我的订单</span>
                  <span className="p-all-orders-look">查看全部</span>
                  <i className="iconfont icon-jiantouyou"></i>
              </div>
              <div className="personal-wrapper">
                  <div className="p-wrapper-item">
                      <i className="iconfont icon-Team"></i>
                      <p className="p-wrap-title">待成团</p>
                  </div>
                  <div className="p-wrapper-item">
                      <i className="iconfont icon-daichuli1"></i>
                      <p className="p-wrap-title">待处理</p>
                  </div>
                  <div className="p-wrapper-item">
                      <i className="iconfont icon-daiqueren"></i>
                      <p className="p-wrap-title">待收货</p>
                  </div>
                  <div className="p-wrapper-item">
                      <i className="iconfont icon-daipingjia7"></i>
                      <p className="p-wrap-title">待评价</p>
                  </div>
              </div>
          </div>

        )
    }
}

export default PersonalOrders

