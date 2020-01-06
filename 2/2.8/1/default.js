//由父及子
class Parent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Child name="strick">子组件</Child>;
  }
}
class Child extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <input name={this.props.name} type="text" />;
  }
}
ReactDOM.render(<Parent/>, document.getElementById("container"));


//由子及父
class Parent2 extends React.Component {
  constructor(props) {
    super(props);
  }
  callback(value) {
    console.log(value);		//输出从子组件传递过来的值
  }
  render() {
    return <Child2 callback={this.callback} />;
  }
}
class Child2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }
  handle(e) {
    this.props.callback(e.target.value);		//调用父组件的回调函数
    this.setState({ name: e.target.value });	//更新文本框中的值
  }
  render() {
    return <input value={this.state.name} type="text" onChange={this.handle.bind(this)} />;
  }
}
ReactDOM.render(<Parent2 />, document.getElementById("container2"));