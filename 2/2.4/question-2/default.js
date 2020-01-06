
class Btn extends React.Component {
  render() {
    return <div>{this.props.render()}</div>;
  }
  componentDidMount() {
	console.log("字符串 Btn", this.refs.input);
  }
}
class Container extends React.Component {
  content = () => {
    return <input ref="input" />;
  }
  render() {
    return <Btn render={this.content} />
  }
  componentDidMount() {
	console.log("字符串 Container", this.refs.input);
  }
}
ReactDOM.render(
    <Container />,
    document.getElementById("container")
);


class Btn2 extends React.Component {
  render() {
    return <div>{this.props.render()}</div>;
  }
  componentDidMount() {
    console.log("回调 Btn", this.input);
  }
}
class Container2 extends React.Component {
  content = () => {
	return <input ref={input => this["input"] = input} />;
  }
  render() {
    return <Btn2 render={this.content} />
  }
  componentDidMount() {
    console.log("回调 Container", this.input);
  }
}
ReactDOM.render(
    <Container2 />,
    document.getElementById("container2")
);

