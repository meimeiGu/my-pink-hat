/**
 * Created by wmm on 2017/5/12.
 */
import React from 'react'
import ListItem from './ListItem'
import axios from 'axios';
import parseQueryString from '../common/parseQueryString'
class MainView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            allData : [],ceshi:[]
        };

    }

    componentDidMount () {
        axios({
            method:'GET',
            url:'http://www.qhnaminal.com/my-pink-hat/admin/index.php/Index/allgbdata',
            headers: {
             'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
             }

        }).then((response) => {
            this.setState({allData: response.data});
        });

        /*目前写死，在微信环境里，获取微信钥匙，发给后台，得到userId等信息*/
        let code = parseQueryString(location.href).code

       /* storage.setItem("userId", 1059);
        let userId = storage.getItem("userId");*/
        axios({
            method:'GET',
            url:'http://qhnaminal.com/my-pink-hat/admin/index.php/Index/getuserdata?code='+code,
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
            }

        }).then((response) => {
            this.setState({ceshi:response[0]})
            let storage=window.localStorage;
            storage.setItem("userId", response.data[0].userId);
            storage.setItem("image", response.data[0].image);
            storage.setItem("nickname", response.data[0].nickname);
        });

    }

    render(){
        return(
            <section id="goods_list" className="main-view index-section">
                <div className="list-wrapper">
                    {this.state.allData.map((item) => {
                        return(<ListItem data={item} key={item.gbgoods_id.toString()}/>)
                })}
                </div>
                <div className="list-bottom">{this.state.ceshi+'hh'}</div>
            </section>
        )
    }
}

export default MainView