/**
 * Created by wmm on 2017/5/23.
 */
import React from 'react'
class BuySelectorNum extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div className="goods-selector-number">
                <span>数量</span>
                <div className="goods-selector-reduce ">
                    <i className="iconfont icon-jian"></i>
                </div>
                <input type="number" id="goods-input" className="goods-selector-input" maxLength="5"/>
                <div className="goods-selector-increase">
                    <i className="iconfont icon-iconfuben13"></i>
                </div>

            </div>


        )
    }
}

export default BuySelectorNum
