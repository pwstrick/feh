//注册事件
class Btn extends React.Component {
  constructor(props) {
    super(props);
  }
  handle(e) {
	  console.log("合成事件");
  }
  render() {
    return <button onClick={this.handle}>合成按钮</button>;
  }
}
ReactDOM.render(<Btn>合成按钮</Btn>, document.getElementById("container"));

