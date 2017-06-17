/**
 * Created by wmm on 2017/5/27.
 */
import React from 'react';
import axios from 'axios';
const qs = require('qs');
import createBrowserHistory  from 'history/createBrowserHistory'

class OrdersItem extends React.Component{
    constructor(props) {
        super(props);
        this.preHandle = this.preHandle.bind(this);
        this.nextHandle = this.nextHandle.bind(this);
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

    preHandle(){

        let nowState = this.state.state;
        if(nowState === '0'){

            let gbsingleorder_id= this.props.data.gbsingleorder_id;

            let data =  {gbsingleorder_id: gbsingleorder_id};
            axios.post('http://qhnaminal.com/my-pink-hat/admin/index.php/Index/inputfdata',qs.stringify(data), {headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },}).then(data => {
            });
        }

        if(nowState === '1'){
            const history = createBrowserHistory({
                forceRefresh: true
            })
            history.push({
                pathname: '/goods',
                forceRefresh: true,
                search: '?id='+this.props.data.gbgoods_id,
            })
        }


    }

    nextHandle(){

        let nowState = this.state.state;
        if(nowState === '0'){
            axios({
                method:'GET',
                params:{gbsingleorder_id:this.props.data.gbsingleorder_id},
                url:'http://qhnaminal.com/my-pink-hat/admin/index.php/Index/cancleorder',
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                }

            }).then(() => {
                window.location.reload();
            });
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
                            <span className={this.state.preCss} onClick={()=>{this.preHandle()}}></span>
                            <span className={this.state.nextCss} onClick={()=>{this.nextHandle()}}></span>
                        </div>

                    </div>:null}
                </div>

        )
    }
}

export default OrdersItem
