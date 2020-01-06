class Btns extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            </>
        );
    }
}
ReactDOM.render(
    <Btns>按钮列表</Btns>,
    document.getElementById("container")
);

class Btn2s extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            </div>
        );
    }
}
ReactDOM.render(
    <Btn2s>按钮列表</Btn2s>,
    document.getElementById("container2")
);

class Btn3s extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment name="22">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </React.Fragment>
        );
    }
}
ReactDOM.render(
    <Btn3s>按钮列表</Btn3s>,
    document.getElementById("container3")
);