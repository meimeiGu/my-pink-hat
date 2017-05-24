/**
 * Created by wmm on 2017/5/24.
 */
import React from 'react'
class GroupBuy extends React.Component{
    constructor(props) {
        super(props);
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
                            <span className="time-num"><span>23</span><span>:</span><span>04</span><span>:</span>22<span></span></span>

                        <span className="time-tip">后结束</span> </span>
                    </div>
                </div>
            <div >
                <div className="group-detail-buy-btn" >一键参团</div>
                <div className="new-user-alert-container" ></div>
            </div>
            </div>

        )
    }
}

export default GroupBuy

