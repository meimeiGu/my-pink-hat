/**
 * Created by wmm on 2017/5/12.
 */
import React from 'react'
import { Link } from 'react-router-dom'

class ListItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }

    render(){
        return(
            <div className="list-item">
                <div className="goods-image">
                <img src={"http://oq57snhhw.bkt.clouddn.com/"+this.props.data.gbgoods_pic}/>
                </div>
                <p className="goods-name">
                    {this.props.data.gbgoods_name}
                </p>
                <div className="detail">
                    <div className="left-side">
                        <div className="sale-price">
                            <i>￥</i>
                            {this.props.data.gbgoods_gbprice}
                        </div>
                        <div className="group-buy">已团{this.props.data.gbgoods_gbnum}件</div>
                    </div>
                    <div className="right-side">
                        {/*<Link to={`/goods/${this.props.data.gbgoods_id}`}>*/}
                        <Link to={{ pathname: "/goods", query: {id: this.props.data.gbgoods_id} }} >
                        <div className="enter-button" >
                            去开团
                            <i className="iconfont icon-jiantouyou"></i>
                        </div></Link>
                    </div>
                </div>
            </div>

        )
    }
}

export default ListItem