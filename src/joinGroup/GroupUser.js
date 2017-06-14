/**
 * Created by wmm on 2017/5/24.
 */
import React from 'react'
class GroupUser extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidUpdate(){
        document.getElementsByClassName('group-detail-user')[0].style.background ="url("+this.props.image+")  0% 0% / 100% 100%";
    }

    render(){
        return(
            <div className="group-detail-user-wrapper">
                <ul className="group-detail-users">
                    <li className="group-detail-user">
                        <span className="leader">团长</span>
                    </li>
                    <li className="group-detail-user left-user">
                        <i className="iconfont icon-yw"></i>
                    </li>
                </ul>
            </div>

        )
    }
}

export default GroupUser

