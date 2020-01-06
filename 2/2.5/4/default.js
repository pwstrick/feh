//this
class Btn extends React.Component {
  constructor(props) {
    super(props);
  }
  handle() {
    console.log(this); 		//undefined
  }
  render() {
    return <button onClick={this.handle}>this的默认指向</button>;
  }
}
ReactDOM.render(<Btn>this指向</Btn>, document.getElementById("container"));

class Btn2 extends React.Component {
  constructor(props) {
    super(props);
  }
  handle1() {
    console.log(this); //Btn实例
  }
  handle2 = () => {
    console.log(this); //Btn实例
  }
  render() {
    return (
      <>
        <button onClick={() => this.handle1()}>箭头函数1</button>
        <button onClick={this.handle2}>箭头函数2</button>
      </>
    );
  }
}
ReactDOM.render(<Btn2>this指向</Btn2>, document.getElementById("container2"));

class Btn3 extends React.Component {
  constructor(props) {
    super(props);
	this.handle2 = this.handle2.bind(this);
  }
  handle1() {
    console.log(this); //Btn实例
  }
  handle2() {
    console.log(this); //Btn实例
  }
  render() {
    return (
      <>
        <button onClick={this.handle1.bind(this)}>bind1</button>
        <button onClick={this.handle2}>bind2</button>
      </>
    );
  }
}
ReactDOM.render(<Btn3>this指向</Btn3>, document.getElementById("container3"));



