//单行文本框
class Text extends React.Component {
  constructor(props) {
    super(props);
	this.state = {value: "init"};
	this.handle = this.handle.bind(this);
  }
  handle(e) {
	this.setState({value: e.target.value.toUpperCase()});
  }
  render() {
    return <input value={this.state.value} onChange={this.handle} type="text" />;
  }
}
ReactDOM.render(<Text>文本框</Text>, document.getElementById("container"));

//多行文本框
class TextArea extends React.Component {
  constructor(props) {
    super(props);
	this.state = {value: "init"};
	this.handle = this.handle.bind(this);
  }
  handle(e) {
	this.setState({value: e.target.value.toUpperCase()});
  }
  render() {
    return <textarea value={this.state.value} onChange={this.handle} />;
  }
}
ReactDOM.render(<TextArea>文本框</TextArea>, document.getElementById("container2"));

//单选框
class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gender: "" };
    this.handle = this.handle.bind(this);
  }
  handle(e) {
    this.setState({
      gender: e.target.value
    });
  }
  render() {
    // const { gender } = this.state;
    // console.log(gender);
    return (
      <>
        <input name="gender" value="1" onChange={this.handle} type="radio" 
          checked={this.state.gender == "1"}
		/>男
        <input name="gender" value="2" onChange={this.handle} type="radio"
          checked={this.state.gender == "2"}
		/>女
      </>
    );
  }
  componentDidUpdate() {
    console.log("jquery", $("[name=gender]:checked").val());
  }
}
ReactDOM.render(<Radio>文本框</Radio>, document.getElementById("container3"));

//复选框
class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { colors: [] };	//保存复选框值的数组
    this.handle = this.handle.bind(this);
  }
  handle(e) {
    const { checked, value } = e.target;
    let { colors } = this.state;
    if (checked && colors.indexOf(value) == -1) {
      colors.push(value);	//已选中并且数组中未有该值，就在末尾插入
    } else {	
      colors = colors.filter(item => item != value);	//未选中，就将该值过滤掉
    }
    console.log("复选框", colors);
    this.setState({ colors });
  }
  render() {
    return (
      <>
        <input name="colors" value="1" onChange={this.handle} type="checkbox"
          checked={this.state.colors.indexOf("1") >= 0}
        />红
        <input name="colors" value="2" onChange={this.handle} type="checkbox"
          checked={this.state.colors.indexOf("2") >= 0}
        />绿
        <input name="colors" value="3" onChange={this.handle} type="checkbox"
          checked={this.state.colors.indexOf("3") >= 0}
        />蓝
      </>
    );
  }
}
ReactDOM.render(<Checkbox>文本框</Checkbox>, document.getElementById("container4"));

//单选 选择框
class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handle = this.handle.bind(this);
  }
  handle(e) {
    this.setState({ value: e.target.value });
    console.log("选择框", e.target.value);
  }
  render() {
    return (
      <select value={this.state.value} onChange={this.handle} name="person">
        <option value="1">strick</option>
        <option value="2">freedom</option>
        <option value="3">jane</option>
      </select>
    );
  }
  componentDidUpdate() {
    console.log("jquery",$("[name=person]").children("option:selected").val());
  }
}
ReactDOM.render(<Select>选择框</Select>, document.getElementById("container5"));

//多选 选择框
class MulSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { values: [] };
    this.handle = this.handle.bind(this);
  }
  handle(e) {
    const { options } = e.target; 			//options是一个类数组对象
    //console.log(options);
    const values = Object.keys(options) 	//将options的索引组成一个数组
      .filter(i => options[i].selected) 	//过滤出选中项
      .map(i => options[i].value); 			//提取选中项组成新数组
    this.setState({ values });
    console.log("选择框", values);
  }
  render() {
    return (
      <select value={this.state.values} onChange={this.handle} name="mulperson" multiple={true}>
        <option value="1">strick</option>
        <option value="2">freedom</option>
        <option value="3">jane</option>
      </select>
    );
  }
  componentDidUpdate() {
    console.log("jquery", $("[name=mulperson]").children("option:selected"));
  }
}

ReactDOM.render(<MulSelect>选择框</MulSelect>, document.getElementById("container6"));
