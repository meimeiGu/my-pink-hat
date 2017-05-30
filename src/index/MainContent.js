/**
 * Created by wmm on 2017/5/11.
 */
import React from 'react'
import Sliding from './Sliding'
import MainView from './MainView'



class MainContent extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div id="mainIndex">
                <div id="indexRecommend">
               {/* <Sliding/>*/}
                <MainView/>
                </div>
            </div>
        )
    }
}

export default MainContent