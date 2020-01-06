
class Btn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let btnStyle = {
      height: 40,
      lineHeight: 1.5,
	  WebkitBorderRadius: "10%"
    };
    return <button style={btnStyle}>提交</button>;
  }
}
ReactDOM.render(<Btn>内联样式</Btn>, document.getElementById("container"));



