/**
 * Created by wmm on 2017/5/23.
 */
import React from 'react'
import PersonalHead from './PersonalHead'

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
            </section>

        )
    }
}

export default MainView

