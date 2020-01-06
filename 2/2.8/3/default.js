//顶层组件
class Grandpa extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "strick" };
    this.click = this.click.bind(this);
  }
  getChildContext() {
    return { name: this.state.name };
  }
  click() {
    this.setState({ name: "freedom" });
  }
  render() {
    return (
        <>
        <Son />
        <button onClick={this.click}>提交</button>
        </>
    );
  }
}
Grandpa.childContextTypes = {
  name: PropTypes.string
};
//中间组件
class Son extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return <Grandson/>;
  }
}
//后代组件
class Grandson extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <p>{this.context.name}</p>;
  }
}
Grandson.contextTypes = {
  name: PropTypes.string
};
ReactDOM.render(<Grandpa/>, document.getElementById("container"));

//新的Context
const NameContext = React.createContext({name: "strick"});
class Grandpa2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "strick" }
  }
  click() {
    this.setState({name: "freedom"});
  }
  render() {
    return (
        <NameContext.Provider value={{ name: this.state.name }}>
          <Son2 />
          <button onClick={this.click.bind(this)}>提交</button>
        </NameContext.Provider>
    );
  }
}
class Son2 extends React.Component {
  constructor(props) {
    super(props);
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }
  render() {
    return <Grandson2 />;
  }
}
class Grandson2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <NameContext.Consumer>{context => <p>{context.name}</p>}</NameContext.Consumer>
    );
  }
}
ReactDOM.render(<Grandpa2/>, document.getElementById("container2"));