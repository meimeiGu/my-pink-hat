/**
 * Created by wmm on 2017/5/12.
 */
import React from 'react'
import ListItem from './ListItem'
import axios from 'axios';
class MainView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            allData : [],
        };

    }

    componentDidMount () {
        axios({
            method:'GET',
            url:'http://xyhelp.cn/my-pink-hat/admin/index.php/api/index/allgbdata?gbgoods_id=all',
            headers: {
             'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
           /*'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*!/!*',*/
             /*'Access-Control-Allow-Origin': '*',*/
            /* 'Access-Control-Allow-Credentials': 'true',*/

             }

        }).then((response) => {
            this.setState({allData: response.data});
        });
    }

    render(){
        return(
            <section id="goods_list" className="main-view index-section">
                <div className="list-wrapper">
                    {this.state.allData.map((item) => {
                        return(<ListItem data={item} key={item.gbgoods_id.toString() }/>)
                })}

                </div>
            </section>
        )
    }
}

export default MainView