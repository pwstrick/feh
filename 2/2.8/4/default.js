class EventEmitter {
  constructor() {
    this.events = {};
  }
  sub(event, listener) {  //订阅消息
    if (!this.events[event]) {
      this.events[event] = { listeners: [] };
    }
    this.events[event].listeners.push(listener);
  }
  pub(name, ...params) {  //发布消息
    for (const listener of this.events[name].listeners) {
      listener.apply(this, params);
    }
  }
}

let emitter = new EventEmitter();
class Sub extends React.Component {
  constructor(props) {
    super(props);
    emitter.sub("TextBox", (value) => console.log(value));
  }
  render() {
    return <p>订阅消息</p>;
  }
}
class Pub extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  handle(e) {
    const value = e.target.value;
    emitter.pub("TextBox", value);
    this.setState({ value });
  }
  render() {
    return <input value={this.state.value} onChange={this.handle.bind(this)} />;
  }
}
ReactDOM.render(
    <>
    <Sub />
    <Pub />
    </>,
    document.getElementById("container")
);

