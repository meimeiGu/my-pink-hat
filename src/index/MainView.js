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
            url:'http://127.0.0.1/my-pink-hat/admin/index.php/Index/index_data',
            headers: {
             'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
<<<<<<< HEAD
             /*'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*!/!*',*/
             /*'Access-Control-Allow-Origin': '*',*/
            /* 'Access-Control-Allow-Credentials': 'true',*/
=======
             'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*!/!*',
             'Access-Control-Allow-Origin': '*',
             'Access-Control-Allow-Credentials': 'true',
>>>>>>> 02aa070564332d9d294b856f928e0e40ae5d77fd
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