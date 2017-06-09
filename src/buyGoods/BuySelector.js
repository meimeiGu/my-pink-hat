/**
 * Created by wmm on 2017/5/23.
 */
import React from 'react'
import BuySelectorHead from './BuySelectorHead'
import BuySelectorBody from './BuySelectorBody'
import createBrowserHistory  from 'history/createBrowserHistory'
class BuySelector extends React.Component{
    constructor(props) {
        super(props);
        this.state={goods:'',minPrice:'',text:'',sku:'',num:'',ok:true}
        this.userChoiceInfo = this.userChoiceInfo.bind(this);
        this.buyNum = this.buyNum.bind(this);
        this.jump = this.jump.bind(this);

    }

    componentWillMount(){
            this.timer && clearTimeout(this.timer);
    }

    jump() {
        if(!this.state.num){
            this.setState({num:1})
            console.log(this.state.num+'jin')
        }
        if(!this.state.sku){
            document.getElementsByClassName('pin-toast')[0].style.display="block";
            this.timer = setTimeout(
                () =>{
                    document.getElementsByClassName('pin-toast')[0].style.display="none";
                },3000
            )
            this.setState({ok:false});

        }else{
            this.setState({ok:true});
        }

        setTimeout(()=>{
            const history = createBrowserHistory({
            forceRefresh: this.state.ok,
        })
            let buyType;
            if(this.props.groupBuy === "group"){
                buyType = 'group';
            }else {
                buyType = 'signal';
            }
            history.push({
                pathname: '/orderCheckout',
                search: '&gbsku_id='+this.state.sku+'&num='+this.state.num+'&buyType='+buyType,
            })},0)

    }

    buyNum(n){
       this.setState({num:n})
    }


    userChoiceInfo(id){
        if(id){
            this.props.skus.map((item) => {
                if(item.gbsku_id === id){
                    if(this.props.type === "group")
                    {
                    this.setState({goods:item.gbsku_price,text:item.gbsku_name,sku:item.gbsku_id})
                    }else {
                        this.setState({goods:item.gbsku_oldprice,text:item.gbsku_name,sku:item.gbsku_id})
                    }
                }
            })
        }
    }


    render(){
        return(
         <section className="buy-selector-bg">
             <div className="buy-selector-main">
                 <div className="buy-selector-container buy-selector-main-show">
                     <BuySelectorHead signalBuy={this.props.signalBuy} groupBuy={this.props.groupBuy} skus={this.props.skus} selectd={this.state.goods} text={this.state.text} type={this.props.type}/>
                     <BuySelectorBody skus={this.props.skus} info={this.userChoiceInfo} num={this.buyNum}/>
                     <div className="buy-selector-bottom" onClick={this.jump}>确定</div>
                 </div>
             </div>
             <div className="pin-toast-container">
                 <div className="pin-toast" >请选择 类型</div>
             </div>
         </section>
        )
    }
}


export default BuySelector