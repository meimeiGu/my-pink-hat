/**
 * Created by wmm on 2017/5/11.
 */
import React from 'react'
import '../../styles/global.css'
import '../../styles/index.css'

class Sliding extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div id="sliding">
                <ul className="slider-outer">
                    <li className="slider-html">
                        <img src="../../images/slider/a.jpeg"/>
                    </li>
                    <li className="slider-html">
                        <img src="../../images/slider/b.jpeg"/>
                    </li>
                    <li className="slider-html slider-active">
                        <img src="../../images/slider/d.jpeg"/>
                    </li>
                    <li className="slider-html">
                        <img src="../../images/slider/f.jpeg"/>
                    </li>
                    <li className="slider-html">
                        <img src="../../images/slider/g.jpeg"/>
                    </li>
                    <li className="slider-html">
                        <img src="../../images/slider/h.jpeg"/>
                    </li>
                </ul>

                <ul className="slider-dot-wrap">
                    <li className="slider-dot"></li>
                    <li className="slider-dot"></li>
                    <li className="slider-dot"></li>
                    <li className="slider-dot"></li>
                    <li className="slider-dot"></li>
                    <li className="slider-dot"></li>
                    <li className="slider-dot"></li>

                </ul>

            </div>
        )
    }
}

export default Sliding