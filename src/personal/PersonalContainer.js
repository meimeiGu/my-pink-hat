/**
 * Created by wmm on 2017/5/23.
 */
import React from 'react'
import Footer from '../index/Footer'
import MainView from './MainView'

class PersonalContainer extends React.Component{
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render(){
        return(
            <div>
                <Footer/>
                <MainView/>
            </div>

        )
    }
}

export default PersonalContainer
