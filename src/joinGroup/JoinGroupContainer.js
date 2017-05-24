/**
 * Created by wmm on 2017/5/11.
 */
import React from 'react'
import GroupGoodsInfo from './GroupGoodsInfo'
import GoodsServer from '../content/GoodsServer'
import GroupNotice from './GroupNotice'
import GroupUser from './GroupUser'
import GropuBuy from './GropuBuy'
class JoinGroupContainer extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        document.getElementsByTagName('body')[0].style.backgroundColor="#f2f2f2";
    }
    render(){
        return(
            <div className="group">
                <section className="group-detail">
                    <GroupGoodsInfo/>
                    <GroupNotice/>
                    <GoodsServer/>
                    <GroupUser/>
                    <GropuBuy/>

                </section>
            </div>
        )
    }
}

export default JoinGroupContainer

