/**
 * Created by wmm on 2017/5/11.
 */
import React from 'react'
import '../../styles/global.css'
class Sliding extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
 /*   autoPlay = () =>{
    }
    componentDidMount = () =>{
        this.autoPlay();
    }*/
    render(){
        return(
            <div id="sliding">
                <ul className="slider-outer">
                    <li className="slider-html" data-index = {1}>
                        <img src="./images/slider/a.jpg" />
                    </li>
                    <li className="slider-html slider-prev" data-index = {2}>
                        <img src="./images/slider/a.jpg"/>
                    </li>
                    <li className="slider-html slider-active" data-index = {3}>
                        <img src="./images/slider/a.jpg"/>
                    </li>
                    <li className="slider-html slider-next" data-index = {4}>
                        <img src="./images/slider/a.jpg"/>
                    </li>
                    <li className="slider-html" data-index = {5}>
                        <img src="./images/slider/a.jpg"/>
                    </li>
                    <li className="slider-html" data-index = {6}>
                        <img src="./images/slider/a.jpg"/>
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