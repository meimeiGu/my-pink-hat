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
