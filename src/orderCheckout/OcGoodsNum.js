/**
 * Created by wmm on 2017/5/23.
 */
import React from 'react'
import classNames from 'classnames';
import parseQueryString from '../common/parseQueryString'
class OcGoodsNum extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value:parseInt(parseQueryString(location.href).num)?parseInt(parseQueryString(location.href).num):1,disable:false}

        this.handleChange = this.handleChange.bind(this);
        this.numAdd = this.numAdd.bind(this);
        this.numReduce = this.numReduce.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    numAdd() {
        this.setState(prevState => ({
            value:prevState.value+1,
            disable:false
        }));
        setTimeout(()=>{this.props.buyNum(this.state.value)},0)
    }

    numReduce() {
        if(this.state.value == 1){
            this.setState({disable:true})
        }else {
            this.setState(prevState => ({
                value:prevState.value-1
            }));
        }
        setTimeout(()=>{this.props.buyNum(this.state.value)},0)
    }

    render(){
        const classStr = classNames({
            'oc-goods-reduce': true,
            'oc-reduce-disable': this.state.disable,
        });
        return(
            <div className="oc-goods-number">
                <span>购买数量</span>
                <div className={classStr} onClick={()=>{this.numReduce()}}>
                    <i className="iconfont icon-jian"></i>
                </div>
                <input className="oc-buy-number" type="number" value={this.state.value} onChange={()=>{this.handleChange}}/>
                    <div className="oc-goods-increase" onClick={()=>{this.numAdd()}}>
                        <i className="iconfont icon-iconfuben13"></i>
                    </div>
            </div>

        )
        }
}

export default OcGoodsNum

