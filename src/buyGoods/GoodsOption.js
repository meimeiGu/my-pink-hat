/**
 * Created by wmm on 2017/5/23.
 */
import React from 'react'
import classNames from 'classnames';
class GoodsOption extends React.Component{
    constructor(props) {
        super(props);
        this.state={skus:[]}
        this.userChoice = this.userChoice.bind(this);
    }

    componentWillMount() {
        console.log('2')
        this.state.skus = this.props.skus;
        this.state.skus.map((item) => {
            item.choice=false;
        })
        this.setState({skus:this.state.skus})
        console.log(this.state.skus)
    }

    userChoice(id) {
        this.state.skus.map((item) => {
            if(item.gbsku_id == id){
                item.choice = true;
            }else {
                item.choice = false;
            }

        })
        this.setState({skus:this.state.skus})
    }

    render(){
        return(
            <div className="goods-option">
                <span className="goods-key">分类</span>
                {  console.log('1')}
                <div className="goods-value-list">
                    {
                        this.state.skus.map((item) => {
                        console.log('3')
                        const classStr = classNames({
                            'goods-value': true,
                            'goods-value-selected':item.choice,
                        });
                        return(<span  className={classStr} onClick={()=>{this.userChoice(item.gbsku_id)}} key={item.gbsku_id.toString()}>{item.gbsku_name}</span>)
                    })}
                </div>

            </div>


        )
    }
}

export default GoodsOption
