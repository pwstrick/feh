//渲染劫持
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
    this.handle = this.handle.bind(this);
  }
  handle(e) {
    this.setState({ value: e.target.value });
	console.log(e.target.value);
  }
  render() {
    return <input type="text" value={this.state.value} onChange={this.handle} />;
  }
}
function inheritHOC(Wrapped) {
  class Enhanced extends Wrapped {
    constructor(props) {
      super(props);
    }
    render() {
      //获取原组件
      const origin = super.render();
	  //合并原组件的属性，并新增value属性的值
	  const props = Object.assign({}, origin.props, {value: "strick"});
	  //console.log(props);
      return React.cloneElement(origin, props, origin.props.children);
    }
  }
  return Enhanced;
}
let EnhancedInput = inheritHOC(Input);
ReactDOM.render(<EnhancedInput />, document.getElementById("container"));


//state
class Input2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handle = this.handle.bind(this);
  }
  handle(e) {
    this.setState({ value: e.target.value });
	console.log(e.target.value);
  }
  render() {
    return <input type="text" value={this.state.value} onChange={this.handle} />;
  }
}
function stateHOC(Wrapped) {
  class Enhanced extends Wrapped {
    constructor(props) {
      super(props);
      this.state.name = "strick";	//新增状态
	  this.state.value = "init";	//修改状态
    }
    render() {
	  console.log(this.state);
      return super.render();
    }
  }
  return Enhanced;
}
let EnhancedInput2 = stateHOC(Input2);
ReactDOM.render(<EnhancedInput2 />, document.getElementById("container2"));




