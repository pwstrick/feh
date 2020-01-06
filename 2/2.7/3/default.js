
// 创建一个Content组件,它将渲染一个包含样式的<button>元素
const Content = styled.button`
  color: red;
  appearance: none;
`;
class Btn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Content>提交</Content>;
  }
}
ReactDOM.render(<Btn>CSS类</Btn>, document.getElementById("container"));

//样式继承
const BgContent = styled(Content)`
  background: yellow;
`;
class Btn2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <BgContent>提交</BgContent>;
  }
}
ReactDOM.render(<Btn2>CSS类</Btn2>, document.getElementById("container2"));

//属性传递
const AttrContent = styled.button`
  background: ${props => props.active ? "blue" : "white"}
`;
class Btn3 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <AttrContent active>提交</AttrContent>;
  }
}
ReactDOM.render(<Btn3>CSS类</Btn3>, document.getElementById("container3"));


//预处理器
const ProContent = styled.button`
  &:hover {
    color: yellow;
  }
`;
class Btn4 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <ProContent>提交</ProContent>;
  }
}
ReactDOM.render(<Btn4>CSS类</Btn4>, document.getElementById("container4"));