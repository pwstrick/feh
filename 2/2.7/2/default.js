
class Btn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <button className="btn">提交</button>;
  }
}
ReactDOM.render(<Btn>CSS类</Btn>, document.getElementById("container"));


class Btn2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: true };
  }
  render() {
    let btnClass = classNames({
      btn: true,
      active: this.state.active
    });
    return <button className={btnClass}>提交</button>;
  }
}
ReactDOM.render(<Btn2>CSS类</Btn2>, document.getElementById("container2"));

class Btn3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: true };
  }
  render() {
    let className = "btn";
    if (this.state.active) className += " active";
    return <button className={className}>提交</button>;
  }
}
ReactDOM.render(<Btn3>CSS类</Btn3>, document.getElementById("container3"));