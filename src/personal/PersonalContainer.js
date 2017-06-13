/**
 * Created by wmm on 2017/5/23.
 */
import React from 'react'
import Footer from '../index/Footer'
import MainView from './MainView'
import axios from 'axios';

class PersonalContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {userInfo:[]}

    }

    componentDidMount() {
        let storage=window.localStorage;
        let userId = storage.getItem("userId");
        console.log(userId)
        axios({
            method:'GET',
            url:'http://xyhelp.cn/my-pink-hat/admin/index.php/api/index/getuserdata?userId='+userId,
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
            }

        }).then((response) => {
            this.setState({userInfo: response.data[0]});
            console.log(this.state.userInfo)
        });

    }

    render(){
        return(
            <div>
                <Footer/>
                <MainView userInfo={this.state.userInfo}/>
            </div>

        )
    }
}

export default PersonalContainer
