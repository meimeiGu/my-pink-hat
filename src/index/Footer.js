/**
 * Created by wmm on 2017/5/26.
 */
import React from 'react'
class Footer extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
           <ul className="footer">
               <li>
                <a id="footer_home" className="nav-controller active">
                    <i className="iconfont icon-shouye3"></i>
                    首页
                </a>
               </li>
               <li>
                          <a id="footer_person" className="nav-controller ">
                    <i className="iconfont icon-gerenzhongxin"></i>
                    个人中心
                </a>
               </li>
           </ul>
        )

    }


}
export default Footer