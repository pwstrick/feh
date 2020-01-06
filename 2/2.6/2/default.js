//非受控组件
class Text extends React.Component {
  constructor(props) {
    super(props);
	this.handle = this.handle.bind(this);
  }
  handle() {
	this.input.value = this.input.value.toUpperCase();
  }
  render() {
    return <input onBlur={this.handle} type="text" ref={ input => {this.input = input}}/>;
  }
}
ReactDOM.render(<Text>文本框</Text>, document.getElementById("container"));


//默认值
class Text2 extends React.Component {
  constructor(props) {
    super(props);
	this.handle = this.handle.bind(this);
  }
  handle() {
	this.input.value = this.input.value.toUpperCase();
  }
  render() {
    return <input onBlur={this.handle} type="text" ref={ input => {this.input = input}} defaultValue="init"/>;
  }
}
ReactDOM.render(<Text2>文本框</Text2>, document.getElementById("container2"));

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);
  }
  handle(e) {

  }
  render() {
    // const { gender } = this.state;
    // console.log(gender);
    return (
      <>
        <input name="gender" value="1" onChange={this.handle} type="radio"/>男
        <input name="gender" value="2" onChange={this.handle} type="radio" defaultChecked={true}/>女
      </>
    );
  }
}
ReactDOM.render(<Radio>文本框</Radio>, document.getElementById("container3"));

