/**
 * Created by wmm on 2017/5/7.
 */
import React from 'react'
import BigImage from './BigImage'
import GoodsInfo from './GoodsInfo'
import LocalGroups from './LocalGroups'
import GoodsServer from './GoodsServer'
import '../../styles/container.css'
import GoodsBottom from './GoodsBottom'

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
                <LocalGroups/>
                <GoodsBottom/>
            </div>
        )
    }
}

export default Container