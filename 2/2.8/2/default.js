
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { type: "p", digit: 0 };
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
  }
  plus(digit) {
    this.setState({ type: "p", digit });
  }
  minus(digit) {
    this.setState({ type: "m", digit });
  }
  render() {
    let { type, digit } = this.state;
    let pdigit = type == "p" ? digit : (digit+1);
    let mdigit = type == "m" ? digit : (digit-1);
    return (
      <>
        <Child type="p" digit={pdigit} onDigitChange={this.plus} />
        <Child type="m" digit={mdigit} onDigitChange={this.minus} />
      </>
    );
  }
}
class Child extends React.Component {
  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);
  }
  handle(e) {
    this.props.onDigitChange(+e.target.value);
  }
  render() {
    return (
      <input value={this.props.digit} type="text" onChange={this.handle} />
    );
  }
}
ReactDOM.render(<Parent/>, document.getElementById("container"));


