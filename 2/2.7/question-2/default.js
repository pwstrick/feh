
class Btn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let colors = {
        color: "red"
      },
      borders = {
        "border-top": "2px solid red"
      };
    return <button style={{ ...colors, ...borders }}>提交</button>;
  }
}

ReactDOM.render(
  <Btn />,
  document.getElementById("container")
);
