/**
 * Created by wmm on 2017/5/8.
 */
import React from 'react'
import Price from './Price'
import GoodsName from './GoodsName'
import GoodsDetail from './GoodsDetail'
import '../../styles/container.css'
class GoodsInfo extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <section id="g-base">
                <Price/>
                <GoodsName />
                <GoodsDetail />
            </section>
        )

    }


}
export default GoodsInfo