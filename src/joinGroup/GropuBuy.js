/**
 * Created by wmm on 2017/5/24.
 */
import React from 'react'
class GroupBuy extends React.Component{
    constructor(props) {
        super(props);
        this.state={nowTime:'',ok:true}
        this.tick = this.tick.bind(this);
    }

    tick() {
        /*现在的时间*/
        let nowTime = new Date().getTime();
        /*下订单的时间*/
        let data = new Date(this.props.gbsingleorder_time).getTime();
        /*团购订单的期限*/
        let endPeriod = 48*60*60*1000;
        let a = endPeriod-(nowTime-data);
        var nD = Math.floor(a/(1000 * 60 * 60 * 24))+'天'
        var nH = Math.floor(a/(1000*60*60)) % 24+":";
        var nM = Math.floor(a/(1000*60)) % 60+":";
        var nS = Math.floor(a/1000) % 60;
        this.setState({nowTime:nD+nH+nM+nS})
        if(a === 0){
            clearTimeout(this.interval);
            this.setState({ok:false})/*时间已到期*/
        }
    }

    componentDidMount(){
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        this.interval && clearTimeout(this.interval);
    }


    render(){
        return(
            <div className="group-detail-buy ongoing">
                <div className="group-detail-buy-tip">
                    <div className="tip-text group-detail-buy-icon">
                        <span>
                            仅剩<b className="left-user-num">1</b>个名额，
                        </span>
                        <span className="time">
                            <span className="time-num"><span>{this.state.nowTime}</span></span>

                        <span className="time-tip">后结束</span> </span>
                    </div>
                </div>
            <div >
                {this.state.ok?<div className="group-detail-buy-btn" onClick={()=>{this.props.userJoin()}}>一键参团</div>:<div className="group-detail-buy-btn" >团购已过期</div>}

                <div className="new-user-alert-container" ></div>
            </div>
            </div>

        )
    }
}

export default GroupBuy

