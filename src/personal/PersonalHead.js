/**
 * Created by wmm on 2017/5/26.
 */
import React from 'react'


class PersonalHead extends React.Component{
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render(){
        return(
           <div className="personal-head head-bg-img">
               <img src="http://localhost/my-pink-hat/images/hhmmd.jpg"/>
               <div className="p-head-info">
                   <p className="p-name">咕咕小勇</p>
               </div>
           </div>

        )
    }
}

export default PersonalHead

