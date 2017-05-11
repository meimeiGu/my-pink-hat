/**
 * Created by wmm on 2017/5/11.
 */
import React from 'react'
import '../../styles/index.css'
import Sliding from './Sliding'



class MainContent extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div id="mainIndex">
                <div id="indexRecommend">
                <Sliding/>
                </div>
            </div>
        )
    }
}

export default MainContent