/**
 * Created by wmm on 2017/5/9.
 */
import React from 'react';
import '../../styles/container.css'
const LocalGropuItem = () =>{
    return(
        <div className="local-group-item">
            <img className="local-group-img" src="../../../images/h.png"/>
            <div className="local-group-detail">
            <div className="local-group-detail-name">
                <span className="local-group-name">咕咕小勇</span>
            </div>
            <div className="local-group-detail-timer">
                <span className="local-group-timer">还差1人，剩余23:47:32</span>
            </div>
            </div>
            <div className="local-group-btn">去参团</div>
        </div>
    )
}
export default LocalGropuItem;