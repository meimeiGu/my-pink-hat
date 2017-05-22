/**
 * Created by wmm on 2017/5/11.
 */
import React from 'react'
class Navigation extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="ns-container">
                <div className="ns-edge"></div>
                <ul className="ns-content">
                    <li className="ns-tab-item">
                        <span className="cur-tab">首页</span>
                    </li>
                </ul>

            </div>
        )

    }


}
export default Navigation