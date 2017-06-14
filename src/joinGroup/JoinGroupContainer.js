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
        this.state={allData:[]}
        this.userJoin = this.userJoin.bind(this)
    }

    userJoin() {
        let sku_id = parseQueryString(location.href).gbsku_id;
        let gbgoods_id = parseQueryString(location.href).gbgoods_id
        let num = parseQueryString(location.href).num?parseQueryString(location.href).num:1;
        const history = createBrowserHistory({
            forceRefresh: true
        })
        if(this.state.allData.gbgoods_skunum > 1){
            history.push({
                pathname: '/goods',
                search: '?id='+gbgoods_id+'&num='+num+'&buyType='+'joinGroup',
            })

        }else {
            history.push({
                pathname: '/orderCheckout',
                search: 'gbsku_id='+sku_id+'&buyType='+'joinGroup',
            })
        }



    }

    componentDidMount(){
        document.getElementsByTagName('body')[0].style.backgroundColor="#f2f2f2";
        let order_id = parseQueryString(location.href).gbsingleorder_id;
        this.setState({type:parseQueryString(location.href).buyType});
        axios({
            method:'GET',
            params:{gbsingleorder_id:order_id},
            url:'http://xyhelp.cn/my-pink-hat/admin/index.php/Index/togbdata',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
            }

        }).then((response) => {
            this.setState({allData:response.data[0]})
            console.log(response.data[0])

        });

    }
    render(){
        return(
            <div className="group">
                <section className="group-detail">
                    <GroupGoodsInfo data={this.state.allData}/>
                    <GroupNotice/>
                    <GoodsServer/>
                    <GroupUser image={this.state.allData.image}/>
                    <GropuBuy userJoin={this.userJoin} />

                </section>
            </div>
        )
    }
}

export default JoinGroupContainer

