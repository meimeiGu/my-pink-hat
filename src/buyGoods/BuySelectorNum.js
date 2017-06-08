/**
 * Created by wmm on 2017/5/23.
 */
import React from 'react'
import classNames from 'classnames';
class BuySelectorNum extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value:1,disable:false}

        this.handleChange = this.handleChange.bind(this);
        this.numAdd = this.numAdd.bind(this);
        this.numReduce = this.numReduce.bind(this);

    }

    /*input好像失效*/
    handleChange(event) {
        this.setState({value: event.target.value});
       let num = this.refs.input.getDOMNode().value();
        this.props.num(num);
    }

    numAdd() {
        this.setState(prevState => ({
          value:prevState.value+1,
          disable:false
        }));
        setTimeout(()=>{this.props.num(this.state.value)},10)
    }


    numReduce() {
        if(this.state.value == 1){
            this.setState({disable:true})
        }else {
            this.setState(prevState => ({
                value:prevState.value-1
            }));
        }
        setTimeout(()=>{this.props.num(this.state.value)},10)
    }


    render(){
        const classStr = classNames({
            'goods-selector-reduce': true,
            'goods-selector-reduce-disable': this.state.disable,
        });
        return(
            <div className="goods-selector-number">
                <span>数量</span>
                <div className={classStr} onClick={()=>{this.numReduce()}}>
                    <i className="iconfont icon-jian"></i>
                </div>
                <input type="number" value={this.state.value}  id="goods-input" className="goods-selector-input" maxLength="5" onChange={()=>{this.handleChange}} ref="input"/>
                <div className="goods-selector-increase" onClick={()=>{this.numAdd()}}>
                    <i className="iconfont icon-iconfuben13"></i>
                </div>

            </div>


        )
    }
}

export default BuySelectorNum
