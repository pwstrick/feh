class Btns extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const list = this.props.names.map(value => <button>{value}</button>);
    return <div>{list}</div>;
  }
}
ReactDOM.render(
  <Btns names={[1,2,3]}>按钮列表</Btns>, 
  document.getElementById("container")
);

class Btn2s extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const list1 = this.props.names.map(value => <button key={value}>{value}</button>);
    const list2 = this.props.names.map(value => <button key={value}>{value}</button>);
    return (
      <div>
        <section>{list1}</section>
        <section>{list2}</section>
      </div>
    );
  }
}
ReactDOM.render(
  <Btn2s names={[1,2,3]}>按钮列表</Btn2s>, 
  document.getElementById("container2")
);





