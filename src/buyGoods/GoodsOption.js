/**
 * Created by wmm on 2017/5/23.
 */
import React from 'react'
class GoodsOption extends React.Component{
    constructor(props) {
        super(props);
        this.userChoice = this.userChoice.bind(this);
    }

    userChoice() {
        let spanClass = 'goods-value';
    }

    render(){
        return(
            <div className="goods-option">
                <span className="goods-key">类型</span>
                <div className="goods-value-list">
                    <span className="goods-value" >普刊</span>
                    <span className="goods-value">绿色（七分袖）</span>
                    <span className="goods-value">白色（七分袖）</span>
                    <span className="goods-value">黑色（七分袖）</span>
                </div>

            </div>


        )
    }
}

export default GoodsOption
