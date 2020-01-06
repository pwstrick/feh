//渲染劫持
class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <input type="text" />;
  }
}
function HOC(Wrapped) {
  class Enhanced extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Wrapped />;
    }
  }
  Enhanced.displayName = `Enhanced(${getDisplayName(Wrapped)})`;
  return Enhanced;
}
let EnhancedInput = HOC(Input);
ReactDOM.render(<EnhancedInput />, document.getElementById("container"));


function getDisplayName(Wrapped) {
  return Wrapped.displayName || Wrapped.name || 'Component';
}




