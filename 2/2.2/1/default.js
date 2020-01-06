class Btn extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button>提交</button>
        );
    }
}
ReactDOM.render(
    <Btn>自定义按钮</Btn>,
    document.getElementById("container")
);

//命名空间
// const UI = { Btn: Btn };
// ReactDOM.render(
    // <UI.Btn className="btn">搜索</UI.Btn>,
    // document.getElementById("container2")
// );
const UI = {
  Btn: function(props) {
    return <button className={props.className}>{props.children}</button>;
  }
}
ReactDOM.render(
    <UI.Btn className="btn">搜索</UI.Btn>,
    document.getElementById("container2")
);

//表达式
function getName() {
  return "strick";
}
//<div>{getName()}</div>
ReactDOM.render(
    <div>{[2, "<p>strick</p>"]}</div>,		//&lt;p&gt;strick&lt;/p&gt;
    document.getElementById("container3")
);
// ReactDOM.render(
    // <div dangerouslySetInnerHTML={{__html: "<p>strick</p>"}}></div>,
    // document.getElementById("container3")
// );

//内容
ReactDOM.render(
    (<div>
		<p>freedom strick</p>
		<p>
		  freedom
		  
		  strick
		</p>
		<p></p>
		<p>{false}</p>
		<p>{null}</p>
		<p>{undefined}</p>
		<p>{true}</p>
	</div>),
    document.getElementById("container4")
);

ReactDOM.render(
    <p>strick</p>,
    document.getElementById("container5")
);
