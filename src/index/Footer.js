/**
 * Created by wmm on 2017/5/26.
 */
import React from 'react'
import { Link } from 'react-router-dom'
class Footer extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
           <ul className="footer">
               <li>
                   <Link to="/">
                    <span id="footer_home" className="nav-controller active" >
                    <i className="iconfont icon-shouye3"></i>
                    首页
                   </span>
                   </Link>
               </li>

               <li>
                   <Link to="/personal">
                       <span id="footer_person" className="nav-controller ">
                         <i className="iconfont icon-gerenzhongxin"></i>
                         个人中心
                       </span>
               </Link>
               </li>
           </ul>
        )

    }


}
export default Footer