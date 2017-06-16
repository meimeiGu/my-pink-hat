/**
 * Created by wmm on 2017/5/9.
 */
import React from 'react';
import img from '../../images/hhmmd.jpg'
class LocalGropuItem extends React.Component {
    constructor(props) {
        super(props);
        this.state={nowTime:''}
        this.handleGroup = this.handleGroup.bind(this);
        this.tick = this.tick.bind(this);

    }

    tick() {
        /*现在的时间*/
        let nowTime = new Date().getTime();
        /*下订单的时间*/
        let data = new Date(this.props.data.gbsingleorder_time).getTime();
        /*团购订单的期限*/
        let endPeriod = 48*60*60*1000;

        let a = endPeriod-(nowTime-data);
        var nD = Math.floor(a/(1000 * 60 * 60 * 24))+'天'
        var nH = Math.floor(a/(1000*60*60)) % 24+":";
        var nM = Math.floor(a/(1000*60)) % 60+":";
        var nS = Math.floor(a/1000) % 60;
        this.setState({nowTime:nD+nH+nM+nS})
    }

    componentDidMount(){
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        this.interval && clearTimeout(this.interval);
    }

    handleGroup() {
        this.props.joinGroup(this.props.data.gbsingleorder_id)
    }

    render() {

        return (

            <div className="local-group-item">
                <img className="local-group-img" src={this.props.data.image}/>
                <div className="local-group-detail">
                    <div className="local-group-detail-name">
                        <span className="local-group-name">{this.props.data.nickname}</span>
                    </div>
                    <div className="local-group-detail-timer">
                        <span className="local-group-timer">还差1人，剩余{this.state.nowTime}</span>
                    </div>
                </div>
                    <div className="local-group-btn"  onClick={()=>{this.handleGroup()}}>去参团</div>

            </div>
        )
    }
}
export default LocalGropuItem;