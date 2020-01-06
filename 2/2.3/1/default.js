class Btn extends React.Component {
    // constructor(props) {
        // super(props);
		// this.state = {
           // vote: 0
        // };
    // }
    render() {
        return (<button>提交</button>);
    }
}
ReactDOM.render(
    <Btn>自定义按钮</Btn>,
    document.getElementById("container")
);

function Btn2(props) {
  return (<button>{props.text}</button>);
}
ReactDOM.render(
    <Btn2 text="提交"></Btn2>,
    document.getElementById("container2")
);


