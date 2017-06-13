/**
 * Created by wmm on 2017/5/26.
 */
import React from 'react'
import createBrowserHistory  from 'history/createBrowserHistory'
import classNames from 'classnames';
class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.state={index:false,personal:false}
        this.toIndex = this.toIndex.bind(this);
        this.toPersonal = this.toPersonal.bind(this);
    }

    toIndex() {
        const history = createBrowserHistory({
            forceRefresh: true
        });
        history.push({
            pathname: '/',
            forceRefresh: true,
        });
        this.setState({index:true,personal:false})
    }

    toPersonal() {
        const history = createBrowserHistory({
            forceRefresh: true
        });
        history.push({
            pathname: '/personal',
            forceRefresh: true,
        });
        this.setState({index:false,personal:true})
    }

    render(){
        const classStr = classNames({
            'nav-controller': true,
            'active': location.href === "http://localhost:8080/"?true:false
        });
        const classStr2 = classNames({
            'nav-controller': true,
            'active': location.href === "http://localhost:8080/personal"?true:false
        });
        return(
           <ul className="footer">
               <li>
                    <span id="footer_home" className={classStr} onClick={()=>{this.toIndex()}}>
                    <i className="iconfont icon-shouye3"></i>
                    首页
                   </span>

               </li>

               <li>
                       <span id="footer_person" className={classStr2} onClick={()=>{this.toPersonal()}}>
                         <i className="iconfont icon-gerenzhongxin"></i>
                         个人中心
                       </span>

               </li>
           </ul>
        )
    }
}
export default Footer