/**
 * Created by wmm on 2017/5/23.
 */
import React from 'react'
import PersonalHead from './PersonalHead'
import PersonalOrders from './PersonalOrders'
import PersonalList from './PersonalList'

class MainView extends React.Component{
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render(){
        return(
            <section className="main-view container">
                <PersonalHead/>
                <PersonalOrders/>
                <PersonalList/>
            </section>

        )
    }
}

export default MainView

