/**
 * Created by wmm on 2017/5/12.
 */
import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
=======
import Container from '../content/Container';
import axios from 'axios';
>>>>>>> 02aa070564332d9d294b856f928e0e40ae5d77fd

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
<<<<<<< HEAD
                        <Link to={`/goods/${this.props.data.gbgoods_id}`}>
                        <div className="enter-button" >
                            去开团
=======
                        <div className="enter-button" onClick={this.openGoods}>
                            {/*<Link to="/goods">*/}去开团{/*</Link>*/}
>>>>>>> 02aa070564332d9d294b856f928e0e40ae5d77fd
                            <i className="iconfont icon-jiantouyou"></i>
                        </div></Link>
                    </div>
                </div>
            </div>

        )
    }
}

export default ListItem