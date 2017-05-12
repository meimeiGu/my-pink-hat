/**
 * Created by wmm on 2017/5/9.
 */
import React from 'react'
import '../../styles/container.css'
import LocalGropuItem from './LocalGroupItem'

class LocalGroups extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div id="local-groups">
                <p>小伙伴在开团</p>
                <LocalGropuItem/>
                <LocalGropuItem/>
            </div>
        )

    }

}


export default LocalGroups