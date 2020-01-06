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
// ReactDOM.render(
    // <Btn>自定义按钮</Btn>,
    // document.getElementById("container")
// );

//默认值
ReactDOM.render(
	(<div>
		<input type="text" value />
		<input type="text" value={true} />
	</div>),
    document.getElementById("container")
);

//字符串和表达式
ReactDOM.render(
    (<div>
		<input type="text" value="3" />
		<input type="text" value={1 + 2} />
	</div>),
    document.getElementById("container2")
);

//扩展属性
var props = { type: "text", value: "1" };
ReactDOM.render(
    <input {...props} />,
    document.getElementById("container3")
);

