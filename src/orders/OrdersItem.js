/**
 * Created by wmm on 2017/5/27.
 */
import React from 'react'

class OrdersItem extends React.Component{
    constructor(props) {
        super(props);
        this.state={state:this.props.data.gbsingleorder_state,preCss:'',nextCss:'',text:''};
    }

    componentDidMount (){
        if(this.state.state === '0'){
            this.setState({preCss:'go-pay',nextCss:'cancel',text:'待支付'})
        }else if(this.state.state === '1'){
            this.setState({preCss:'btn-grouping',nextCss:'btn-detail',text:'待成团'})
        }else if(this.state.state === '2'){
            this.setState({text:'待处理'})
        }else if(this.state.state === '3'){
            this.setState({preCss:'confirm-shipment',nextCss:'extend',text:'待收货'})
        }else if(this.state.state === '4'){
            this.setState({preCss:'comment',nextCss:'additional-comment',text:'待评价'})
        }

    }


    render(){
        return(
                <div className="orders-item">
                    <div className="top-block">
                        <div className="mall-name">
                            <span>{this.state.text}</span>
                        </div>
                    </div>
                    <div className="item-goods">
                        <img className="goods-img" src={"http://oq57snhhw.bkt.clouddn.com/"+this.props.data.gbgoods_pic}/>
                        <div className="goods-name">
                            <p>{this.props.data.gbgoods_name}</p>
                            </div>
                            <p className="spec">{this.props.data.gbsku_name}</p>
                            <div className="price-and-num">
                                <div className="goods-price"><span>￥</span>{this.props.data.gbsingleorder_price}</div>
                                <div className="goods-number">x{this.props.data.gbsingleorder_num}</div>
                            </div>
                        </div>
                    <div className="currency-block">
                        {/*<p className="currency-free">(免运费)</p>*/}
                        <p className="currency-amount">{this.props.data.gbsingleorder_num*this.props.data.gbsingleorder_price}</p>
                        <p className="currency-head">实付<span>:</span>￥</p>
                    </div>
                    {this.state.state != '2'?
                    <div className="button-block">

                        <div className="orders-button">
                            <a className={this.state.preCss}></a>
                            <a className={this.state.nextCss}></a>
                        </div>

                    </div>:null}
                </div>

        )
    }
}

export default OrdersItem
