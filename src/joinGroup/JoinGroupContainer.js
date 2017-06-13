/**
 * Created by wmm on 2017/5/11.
 */
import React from 'react'
import GroupGoodsInfo from './GroupGoodsInfo'
import GoodsServer from '../content/GoodsServer'
import GroupNotice from './GroupNotice'
import GroupUser from './GroupUser'
import GropuBuy from './GropuBuy'
import axios from 'axios';
import parseQueryString from '../common/parseQueryString';
import createBrowserHistory  from 'history/createBrowserHistory'
class JoinGroupContainer extends React.Component{
    constructor(props) {
        super(props);
        this.userJoin = this.userJoin.bind(this)
    }

    userJoin() {
        let sku_id = parseQueryString(location.href).gbsku_id;
        let num = parseQueryString(location.href).num?parseQueryString(location.href).num:1;
        const history = createBrowserHistory({
            forceRefresh: true
        })
        history.push({
            pathname: '/orderCheckout',
            search: 'gbsku_id='+sku_id+'&num='+num+'&buyType='+'joinGroup',
        })


    }

    componentDidMount(){
        document.getElementsByTagName('body')[0].style.backgroundColor="#f2f2f2";
        let sku_id = parseQueryString(location.href).gbsku_id;
        this.setState({type:parseQueryString(location.href).buyType});
        axios({
            method:'POST',
            /*data: {'sku_id': '1'},*/
            url:'http://xyhelp.cn/my-pink-hat/admin/index.php/api/index/groupdata?sku_id='+sku_id,
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
            }

        }).then((response) => {
            this.setState({allData: response.data[0]});
        });

    }
    render(){
        return(
            <div className="group">
                <section className="group-detail">
                    <GroupGoodsInfo/>
                    <GroupNotice/>
                    <GoodsServer/>
                    <GroupUser/>
                    <GropuBuy userJoin={this.userJoin} />

                </section>
            </div>
        )
    }
}

export default JoinGroupContainer

