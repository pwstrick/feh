class Btn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <button>{this.props.name}</button>;
  }
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "提交" };
  }
  render() {
    return <div>{this.props.render(this.state)}</div>;
  }
}

ReactDOM.render(
  <Container render={state => <Btn name={state.name} />} />,
  document.getElementById("container")
);
