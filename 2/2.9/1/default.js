//操纵props
//原组件
class Btn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <button>{this.props.name}</button>;
  }
}
//高阶组件
function HOC(Wrapped) {
  class Enhanced extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: "strick" };
    }
    render() {
      return <Wrapped {...this.state} />;
    }
  }
  return Enhanced;
}
const EnhancedBtn = HOC(Btn);
ReactDOM.render(<EnhancedBtn/>, document.getElementById("container"));



//抽取state
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handle = this.handle.bind(this);
  }
  handle(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <input type="text" value={this.state.value} onChange={this.handle} />
    );
  }
}
ReactDOM.render(<Input/>, document.getElementById("container2"));

class Input2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <input type="text" {...this.props} />;
  }
}
function stateHOC(Wrapped) {
  class Enhanced extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: "" };
      this.handle = this.handle.bind(this);
    }
    handle(e) {
      this.setState({ value: e.target.value });
    }
    render() {
      let newProps = {
        value: this.state.value,
        onChange: this.handle
      };
      return <Wrapped {...newProps} />;
    }
  }
  return Enhanced;
}
let EnhancedInput = stateHOC(Input2);
ReactDOM.render(<EnhancedInput />, document.getElementById("container3"));

//Refs
class Btn2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    //console.log("新组件ref", this.props.ref); 		//undefined
    return <button>提交</button>;
  }
}
function refHOC(Wrapped) {
  class Enhanced extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Wrapped ref={btn => { this.myBtn = btn }} />;
    }
	componentDidMount() {
      console.log("新组件", this.myBtn);        //Btn组件的实例
	}
  }
  return Enhanced;
}
let EnhancedBtn2 = refHOC(Btn2);
ReactDOM.render(<EnhancedBtn2 />, document.getElementById("container4"));

// class Btn4 extends React.Component {
  // constructor(props) {
    // super(props);
  // }
  // render() {
    // return <button>提交</button>;
  // }
// }
// function refHOC2(Wrapped) {
  // class Enhanced extends React.Component {
    // constructor(props) {
      // super(props);
    // }
    // render() {
      // return <Wrapped />;
    // }
  // }
  // return Enhanced;
// }
// let EnhancedBtn4 = refHOC2(Btn4);
// ReactDOM.render(<EnhancedBtn4 />, document.getElementById("container5"));


//包装
class Btn3 extends React.Component {
  render() {
    return <button>提交</button>;
  }
}
function wrappedHOC(Wrapped) {
  class Enhanced extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div style={{ padding: 10 }}>
          <input type="text" />
          <Wrapped />
        </div>
      );
    }
  }
  return Enhanced;
}
let EnhancedBtn3 = wrappedHOC(Btn3);
ReactDOM.render(<EnhancedBtn3 />, document.getElementById("container6"));
