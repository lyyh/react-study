import React,{Component,PropTypes} from 'react';
import {findDOMNode} from "react-dom";
import StyleSheet from './MainApp.less';

const ContentApp = () => <div>adsfdsf</div>

class MainApp extends Component{
	constructor(props) {
		super(props);
		this.state = {
			bgColor: "#ddd"
		}
	}
	static defaultProps = {
		 autoPlay: false,
   		 maxLoops: 10
	}
	static propTypes = {
		 autoPlay: React.PropTypes.string.isRequired,
   		 maxLoops: React.PropTypes.number.isRequired,
    	 posterFrameSrc: React.PropTypes.string.isRequired,
    	 text: React.PropTypes.number.isRequired
	}
	handleClick = (e) => {
		let bgColor = this.state.bgColor;
		this.setState({
			bgColor: bgColor === "#ddd"?"#333":"#ddd"
		},function(){
			console.log("setState success");
		});
		let iptVal = findDOMNode(this.refs.ipt)
		console.log(iptVal)
	}          
	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate')
		return true;	
	}
	componentWillMount() {
		console.log("componentWillMount")
		console.log(this.props)
	}
	componentDidMount() {
		console.log('componentDidMount')
	}
	componentWillReceiveProps(){
		console.log("componentWillReceiveProps")
	}
	componentWillUpdate(){
		console.log("componentWillUpdate")
	}
	componentDidUpdate(){
		console.log('componentDidUpdate')
	}

	render(){
		const bgColor = this.state.bgColor;
		let {autoPlay,maxLoops,text} = this.props;
		return (
			<div>
				<ContentApp/>
				<button onClick={this.handleClick}>点我进行切换</button>		
				<div style={{
					width: "100px",
					height: "100px",
					backgroundColor: bgColor
				}}></div>
				<input value="213" rel="ipt"/>
			</div>
			)
	}
}

const styles = {
	wrap:{
		width: "100px",
		height: "100px",
		backgroundColor: "#333",
		margin: "0 auto"
	},
	content:{
		width: "100px",
		height: "100px"
	}
}

export default MainApp;