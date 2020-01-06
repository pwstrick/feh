//ref属性的值为对象
class Btn extends React.Component {
    constructor(props) {
        super(props);
        this.myBtn = React.createRef();
    }
    render() {
        console.log("对象", this.myBtn.current);
        return <button ref={this.myBtn}>提交</button>;
    }
    componentDidMount() {
        let btn = this.myBtn.current;
        // let dom = ReactDOM.findDOMNode(btn);	//<button>提交</button>
        console.log("对象", btn);
    }
}
ReactDOM.render(<Btn>自定义按钮</Btn>, document.getElementById("container"));

//ref属性的值为回调函数
class Btn2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <button ref = {btn => {this.myBtn = btn; console.log("自定义", btn)}}>提交</button>;
    }
    componentDidMount() {
        let btn = this.myBtn;
        console.log("回调函数", btn);		//<button>提交</button>
    }
}
ReactDOM.render(<Btn2>自定义按钮</Btn2>, document.getElementById("container2"));
ReactDOM.unmountComponentAtNode(document.getElementById("container2"));

//ref属性的值为字符串
class Btn3 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <button ref="myBtn">提交</button>;
    }
    componentDidMount() {
        let btn = this.refs.myBtn;
        console.log("字符串", btn);		//<button>提交</button>
    }
}
ReactDOM.render(<Btn3>自定义按钮</Btn3>, document.getElementById("container3"));

//类组件
class Btn4 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <button>提交</button>;
    }
}
class Container4 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Btn4 ref={btn => {this.myBtn = btn}}>提交</Btn4>;
    }
    componentDidMount() {
        let btn = this.myBtn;
        console.log("类组件", btn);        //Btn4实例
    }
}
ReactDOM.render(<Container4>父组件</Container4>, document.getElementById("container4"));

//访问子组件的DOM元素
class Btn5 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <button>提交</button>;
    }
}
class Container5 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Btn5 ref={btn => {this.myBtn = btn}}>提交</Btn5>;
    }
    componentDidMount() {
        let btn = this.myBtn;
        let dom = ReactDOM.findDOMNode(btn);	//<button>提交</button>
        console.log("子组件", btn, dom);		    //Btn5实例 <button>元素
    }
}
ReactDOM.render(<Container5>父组件</Container5>, document.getElementById("container5"));


