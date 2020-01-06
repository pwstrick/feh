// function getName() {
  // return "strick";
// }
//读取
class Btn extends React.Component {
    constructor(props) {
        super(props);
		//props.name = "freedom";		//错误
		this.state = {
           name: props.name
        };
    }
    render() {
		//console.log("render()", this.props);
        return (<button>{this.state.name}</button>);
    }
}
ReactDOM.render(
    <Btn name="strick" digit={0}>提交</Btn>,
    document.getElementById("container")
);

//defaultProps
class Btn2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<button>{this.props.name}</button>);
    }
}
Btn2.defaultProps = {
  name: "freedom"
}
ReactDOM.render(
    <Btn2>提交</Btn2>,
    document.getElementById("container2")
);


//children
class Btn3 extends React.Component {
    constructor(props) {
        super(props);
		console.log(props.children);	//"搜索"
    }
    render() {
        return (<button>{this.props.children}</button>);
    }
}
ReactDOM.render(
    <Btn3>搜索</Btn3>,
    document.getElementById("container3")
);

class Container extends React.Component {
    constructor(props) {
        super(props);
		console.log("map", React.Children.map(props.children, child => child));
		console.log("forEach", React.Children.forEach(props.children, child => {
			console.log("react", child);
		}));
		// props.children.forEach(value => {
			// console.log("array", value);
		// });
		console.log("count", React.Children.count(props.children), props.children.length);
		console.log("only", React.Children.only(props.children));
		console.log("toArray", React.Children.toArray(props.children));
    }
    render() {
        return null;
    }
}
ReactDOM.render(
    <Container>
		<input type="text" />
	</Container>,
    document.getElementById("container4")
);
// 关键字：
// <input type="text" />
// <button>搜索</button>

//prop-types
class Btn5 extends React.Component {
    constructor(props) {
        super(props);
		console.log("prop-types", props);
    }
    render() {
        return (<button>{this.props.children}</button>);
    }
}
Btn5.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string),
  age: PropTypes.number,
  person: PropTypes.shape({ isMan: PropTypes.bool }),
  school: PropTypes.any.isRequired
}
ReactDOM.render(
    <Btn5 names={["strick", "freedom"]} age={28} person={{isMan:true}} school="university">搜索</Btn5>,
    document.getElementById("container5")
);

//数据流
class Btn6 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <button>{this.props.text}</button>;
  }
}
class Container2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Btn6 text="提交" />;
  }
}
ReactDOM.render(<Container2 />, document.getElementById("container6"));





