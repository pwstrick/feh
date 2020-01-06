//事件传播
document.documentElement.addEventListener("click", function() {
  console.log("html");
});
document.body.addEventListener("click", function(e) {
  console.log("body");
  //e.stopPropagation();
});
class Btn extends React.Component {
  constructor(props) {
    super(props);
  }
  handle1(e) {
    console.log("子元素");
    //e.stopPropagation();
  }
  handle2(e) {
    console.log("父元素");
  }
  render() {
    return (
      <div onClick={this.handle2}>
        <button onClick={this.handle1}>传播按钮</button>
      </div>
    );
  }
}
ReactDOM.render(<Btn>传播按钮</Btn>, document.getElementById("container"));


