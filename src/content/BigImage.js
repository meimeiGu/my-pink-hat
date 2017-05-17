/**
 * Created by wmm on 2017/5/8.
 */
import React from 'react'
class BigImage extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="goods-banner">
                <ul className="slider-ul" >
                    <li className="slider-li">
                        <img  src="./images/2.jpg"/>
                    </li>
                </ul>
            </div>
        )

    }


}
export default BigImage