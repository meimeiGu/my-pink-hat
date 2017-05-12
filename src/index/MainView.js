/**
 * Created by wmm on 2017/5/12.
 */
import React from 'react'
import ListItem from './ListItem'
import '../../styles/index.css'

class MainView extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <section id="goods_list" className="main-view index-section">
                <div className="list-wrapper">
                    <ListItem/>

                </div>
            </section>
        )
    }
}

export default MainView