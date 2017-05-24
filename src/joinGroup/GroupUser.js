/**
 * Created by wmm on 2017/5/24.
 */
import React from 'react'
class GroupUser extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="group-detail-user-wrapper">
                <ul className="group-detail-users">
                    <li className="group-detail-user">
                        <span className="leader">团长</span>
                    </li>
                    <li className="group-detail-user left-user"></li>
                </ul>
            </div>

        )
    }
}

export default GroupUser

