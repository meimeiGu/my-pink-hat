/**
 * Created by wmm on 2017/5/11.
 */
import React from 'react'
import Navigation from './Navigation'
import MainContent from './MainContent'
import '../../styles/global.css'
import '../../styles/index.css'

class IndexContainer extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div id="index-content">
                <Navigation />
                <MainContent />
            </div>
        )
    }
}

export default IndexContainer