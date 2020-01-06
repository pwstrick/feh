const Input = React.forwardRef((props, ref) => <input ref={ref} />);

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.myInput = React.createRef();
  }
  render() {
    return <Input ref={this.myInput} />;
  }
  componentDidMount() {
    let input = this.myInput.current;
    console.log("对象", input);
  }
}

ReactDOM.render(<Container />, document.getElementById("container"));



