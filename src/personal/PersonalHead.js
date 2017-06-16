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
               <img src={window.localStorage.getItem("image")}/>
               <div className="p-head-info">
                   <p className="p-name">{window.localStorage.getItem("nickname")}</p>
               </div>
           </div>

        )
    }
}

export default PersonalHead

