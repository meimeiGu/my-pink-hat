/**
 * Created by wmm on 2017/5/24.
 */
import React from 'react'
class GroupNotice extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
           <div className="group-detail-notice-container">
           <div className="group-detail-notice" >
               <div className="title" >拼团须知</div>
               <ul className="group-detail-notice-content-container" >
                   <li className="content invite-user" ><div className="icon invite-user" >邀请好友参团</div></li>
                   <li className="content logistics" ><div className="icon logistics" >人满分别发货</div></li>
                   <li className="content gift" ><div className="icon gift" >人不满将退款</div></li>
               </ul>
           </div>
           </div>
        )
    }
}

export default GroupNotice

