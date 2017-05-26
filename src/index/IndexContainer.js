/**
 * Created by wmm on 2017/5/11.
 */
import React from 'react'
import Navigation from './Navigation'
import MainContent from './MainContent'
import Footer from './Footer'
import '../../styles/global.css'

class IndexContainer extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div id="index-content">
                <Navigation />
                <Footer/>
                <MainContent />
            </div>
        )
    }
}

export default IndexContainer