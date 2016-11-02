import React,{Component} from 'react';
import StyleSheet from './MainApp.less';


class MainApp extends Component{
	constructor(props) {
		super(props);
		this.state = {
			bgColor: "#ddd"
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		let bgColor = this.state.bgColor;
		this.setState({
			bgColor: bgColor === "#ddd"?"#ccc":"#ddd"
		})
	}
	componentWillMount() {
		
	}
	componentDidMount() {
		
	}
	render(){
		const bgColor = this.state.bgColor;
		return (
			<div>
				<button onClick={this.handleClick}>点我进行切换</button>		
				<div style={{
					width: "100px",
					height: "100px",
					backgroundColor: bgColor
				}}></div>
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