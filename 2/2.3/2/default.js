
//state初始化
class Btn extends React.Component {
    constructor() {
        super();
		this.state = {
           text: "提交"
        };
    }
    render() {
        return (<button>{this.state.text}</button>);
    }
}
ReactDOM.render(
    <Btn>自定义按钮</Btn>,
    document.getElementById("container")
);

//setState
class Btn2 extends React.Component {
    constructor() {
        super();
		this.state = {
           text: "提交"
        };
    }
	change() {
		//第一个参数是函数
		// this.setState((state, props) => {
		  // return {text: state.text == "点击" ? "提交" : "点击"};
		// });
		//第一个参数是对象
		this.setState({text: "点击"});
		console.log("参数", this.state.text);		//"提交"
	}
    render() {
        return (<button onClick={this.change.bind(this)}>{this.state.text}</button>);
    }
}
ReactDOM.render(
    <Btn2>自定义按钮</Btn2>,
    document.getElementById("container2")
);

