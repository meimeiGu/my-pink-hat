/**
 * Created by wmm on 2017/5/7.
 */
import React from 'react'
import BigImage from './BigImage'
import GoodsInfo from './GoodsInfo'
import GoodsServer from './GoodsServer'
import '../../styles/container.css'

class Container extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="goods-container">
                <BigImage/>
                <GoodsInfo/>
                <GoodsServer/>
            </div>
        )
    }
}

export default Container