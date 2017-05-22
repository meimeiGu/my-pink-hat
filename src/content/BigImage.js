/**
 * Created by wmm on 2017/5/8.
 */
import React from 'react'
class BigImage extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props.imgName)
    }
    render(){
        return(
            <div className="goods-banner">
                <ul className="slider-ul" >
                    <li className="slider-li">
                        <img  src={"http://oq57snhhw.bkt.clouddn.com/"+this.props.imgName}/>
                    </li>
                </ul>
            </div>
        )

    }


}
export default BigImage