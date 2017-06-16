/**
 * Created by wmm on 2017/5/23.
 */
import React from 'react'
import createBrowserHistory  from 'history/createBrowserHistory'

class PersonalOrders extends React.Component{
    constructor(props) {
        super(props);
        this.jump = this.jump.bind(this);
    }

    componentDidMount() {

    }

    jump(state){
        const history = createBrowserHistory({
            forceRefresh: true
        })
        history.push({
            pathname: '/orders',
            search: '?state='+state,
            forceRefresh: true,
        })



    }

    render(){
        return(
          <div className="personal-orders">
              <div className="p-orders">
                  <span className="p-all-orders">我的订单</span>
              <div onClick={()=>{this.jump('all')}}>
                  <span className="p-all-orders-look">查看全部</span>
                  <i className="iconfont icon-jiantouyou"></i>
              </div>
              </div>
              <div className="personal-wrapper">
                  <div className="p-wrapper-item" onClick={()=>{this.jump('0')}}>
                      <i className="iconfont icon-daifukuan1"></i>
                      <p className="p-wrap-title">待付款</p>
                  </div>
                  <div className="p-wrapper-item" onClick={()=>{this.jump('1')}}>
                      <i className="iconfont icon-Team"></i>
                      <p className="p-wrap-title">待成团</p>
                  </div>
                  <div className="p-wrapper-item" onClick={()=>{this.jump('2')}}>
                      <i className="iconfont icon-daichuli1"></i>
                      <p className="p-wrap-title">待处理</p>
                  </div>
                  <div className="p-wrapper-item" onClick={()=>{this.jump('3')}}>
                      <i className="iconfont icon-daiqueren"></i>
                      <p className="p-wrap-title">待完成</p>
                  </div>
                  <div className="p-wrapper-item" onClick={()=>{this.jump('4')}}>
                      <i className="iconfont icon-daipingjia7"></i>
                      <p className="p-wrap-title">待评价</p>
                  </div>
              </div>
          </div>

        )
    }
}

export default PersonalOrders

