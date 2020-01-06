//事件池
class Btn extends React.Component {
  constructor(props) {
    super(props);
  }
  handle(e) {
    console.log(e.type); 		//"click"
    setTimeout(function() {
      console.log(e.type); 		//null
    }, 0);
	//e.persist();
  }
  render() {
    return <button onClick={this.handle}>事件池</button>;
  }
}
ReactDOM.render(<Btn>事件池</Btn>, document.getElementById("container"));


