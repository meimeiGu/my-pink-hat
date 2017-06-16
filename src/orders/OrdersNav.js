/**
 * Created by wmm on 2017/5/27.
 */
import React from 'react'
import createBrowserHistory  from 'history/createBrowserHistory'



class OrdersNav extends React.Component{
    constructor(props) {
        super(props);
        this.changeTab = this.changeTab.bind(this);
    }
    componentDidMount (){
        if(this.props.state === "all"){
            document.getElementsByTagName('span')[0].setAttribute('class', 'nav-cur');
        }else{
            let i = parseInt(this.props.state)+1;
            document.getElementsByTagName('span')[i].setAttribute('class', 'nav-cur');
        }

    }

    changeTab(state){

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
            <div className="orders-nav">
                <div className="nav-item-orders" onClick={()=>{this.changeTab('all')}}>
                    <span>全部</span>
                </div>
                <div className="nav-item-orders" onClick={()=>{this.changeTab('0')}}>
                    <span >待付款</span>
                </div>
                <div className="nav-item-orders" onClick={()=>{this.changeTab('1')}}>
                    <span>待成团</span>
                </div>
                <div className="nav-item-orders" onClick={()=>{this.changeTab('2')}}>
                    <span>待处理</span>
                </div>
                <div className="nav-item-orders" onClick={()=>{this.changeTab('3')}}>
                <span>待收货</span>
                </div>
                <div className="nav-item-orders" onClick={()=>{this.changeTab('4')}}>
                    <span>待评价</span>
                </div>
            </div>

        )
    }
}

export default OrdersNav