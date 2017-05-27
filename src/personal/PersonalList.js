/**
 * Created by wmm on 2017/5/27.
 */

import React from 'react'

class PersonalList extends React.Component{
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render(){
        return(
            <div className="personal-list">
                <ul>
                    <li>
                        <i className="iconfont icon-jiantouyou"></i>
                    <span className="p-return-money">
                        <i className="iconfont icon-tuikuan1"></i>
                        退款
                    </span>
                    </li>
                    <li>
                        <i className="iconfont icon-jiantouyou"></i>
                        <span className="p-after-sales">
                            <i className="iconfont icon-kefu1"></i>
                            售后
                        </span>
                    </li>
                </ul>

            </div>

        )
    }
}

export default PersonalList
