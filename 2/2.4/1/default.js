class Btn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
	//ReactDOM.findDOMNode(this);	//抛出错误  
    return <button>提交</button>;
	//return false;
  }
  componentDidMount() {
    let dom = ReactDOM.findDOMNode(this);	//<button>提交</button>
	console.log(this, dom);
  }
}
ReactDOM.render(<Btn>自定义按钮</Btn>, document.getElementById("container"));


class Btn2 extends React.Component {
  render() {
    return ReactDOM.createPortal(this.props.children, document.body);
  }
}
ReactDOM.render(<Btn2><p>按钮</p></Btn2>, document.getElementById("container2"));