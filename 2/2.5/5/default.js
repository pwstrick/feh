//参数
class Btn extends React.Component {
  constructor(props) {
    super(props);
  }
  handle1(e, name) {
    console.log(e, name); //Btn实例
  }
  handle2(name, e) {
    console.log(name, e); //Btn实例
  }
  render() {
    return (
      <>
        <button onClick={(e) => this.handle1(e, "strick")}>箭头函数</button>
        <button onClick={this.handle2.bind(this, "strick")}>bind</button>
      </>
    );
  }
}
ReactDOM.render(<Btn>参数</Btn>, document.getElementById("container"));

