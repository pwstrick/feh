//挂载
class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
	console.log("挂载阶段", "constructor");
  }
  componentWillMount() {
    this.setState({age: 28});
	console.log("挂载阶段", "componentWillMount");
  }
  render() {
	console.log("挂载阶段", "render");
    return <button>{this.state.name}</button>;
  }
  componentDidMount() {
	console.log("挂载阶段", "componentDidMount");
    $.post("server.php", {id:1}, json => {
	  this.setState({age: json.data.age});
	}, "json");
  }
}
ReactDOM.render(
  <Btn name="strick" digit={0}>提交</Btn>,
  document.getElementById("container")
);

//更新
class Btn2 extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(nextProps) {
    console.log("父组件更新", "componentWillReceiveProps", nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("父组件更新", "shouldComponentUpdate");
	return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("父组件更新", "componentWillUpdate", nextProps);
  }
  render() {
    console.log("父组件更新", "render");
	return <button onClick={this.props.onClick}>{this.props.name}</button>;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("父组件更新", "componentDidUpdate", prevProps);
  }
}
class Container2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "父组件"
    };
  }
  dot() {
    this.setState({name: "freedom"});
	console.log("点击事件1");
  }
  render() {
    return <Btn2 name={this.state.name} onClick={this.dot.bind(this)}>提交</Btn2>;
  }
}
ReactDOM.render(
  <Container2>容器</Container2>,
  document.getElementById("container2")
);

class Btn3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "状态"
    };
  }
  dot() {
    this.setState({name: "freedom"});
	console.log("点击事件2");
  }
  componentWillReceiveProps(nextProps) {
    console.log("状态更新", "componentWillReceiveProps");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("状态更新", "shouldComponentUpdate");
	return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("状态更新", "componentWillUpdate");
  }
  render() {
    console.log("状态更新", "render");
	return <button onClick={this.dot.bind(this)}>{this.state.name}</button>;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("状态更新", "componentDidUpdate");
  }
}
ReactDOM.render(
  <Btn3>提交</Btn3>,
  document.getElementById("container3")
);

class Btn4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "强制"
    };
  }
  dot() {
    this.setState({name: "freedom"});
	this.forceUpdate();
	console.log("点击事件3");
  }
  componentWillReceiveProps(nextProps) {
    console.log("强制更新", "componentWillReceiveProps");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("强制更新", "shouldComponentUpdate");
	return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("强制更新", "componentWillUpdate");
  }
  render() {
    console.log("强制更新", "render");
	return <button onClick={this.dot.bind(this)}>{this.state.name}</button>;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("强制更新", "componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("强制更新", "componentWillUnmount");	//不执行
  }
}
ReactDOM.render(
  <Btn4>提交</Btn4>,
  document.getElementById("container4")
);


//卸载
class Btn5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "卸载"
    };
  }
  componentWillUnmount() {
    console.log("卸载", "componentWillUnmount");
  }
  render() {
	return <button>{this.state.name}</button>;
  }
}
var container = document.getElementById("container5");
ReactDOM.render(
  <Btn5>提交</Btn5>,
  container
);
setTimeout(function() {
  //移除DOM中的组件
  ReactDOM.unmountComponentAtNode(container);
}, 500);



