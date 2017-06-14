/**
 * Created by wmm on 2017/5/9.
 */
import React from 'react'

import LocalGropuItem from './LocalGroupItem';
class LocalGroups extends React.Component{
    constructor(props) {
        super(props);
        this.state={data:[]}
    }


    render(){
        return(
            <div id="local-groups">
                <p>小伙伴在开团</p>
                {this.props.data.map((item) => {
                    return(<LocalGropuItem data={item} key={item.gbsingleorder_id.toString() } joinGroup={this.props.joinGroup}/>)
                })}
            </div>
        )

    }

}


export default LocalGroups