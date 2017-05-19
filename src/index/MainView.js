/**
 * Created by wmm on 2017/5/12.
 */
import React from 'react'
import ListItem from './ListItem'
import axios from 'axios';
axios.defaults.headers.get['Content-Type'] = 'application/xhtml+xml,application/xml';
class MainView extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        axios({
            method:'GET',
            url:'http://xyhelp.cn/my-pink-hat/admin/index.php/Index/index_data',
            headers: {
             'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*',
             'Access-Control-Allow-Origin': '*',
             'Access-Control-Allow-Credentials': 'true',
             'Content-Type': 'application/x-www-form-urlencoded',

             }

        }).then((data) => {
            console.log(data);
        });

    }

    render(){
        return(
            <section id="goods_list" className="main-view index-section">
                <div className="list-wrapper">
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>

                </div>
            </section>
        )
    }
}

export default MainView