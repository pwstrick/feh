class Btn extends React.Component {}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isError: false };
  }
  componentDidCatch(error, info) {
    console.log("componentDidCatch");
    this.setState({ isError: true });
  }
  render() {
    if (this.state.isError) {
      return <h1>错误</h1>;
    }
    return this.props.children;
  }
}

ErrorBoundary.getDerivedStateFromError = error => {
  console.log("getDerivedStateFromError");
  return { isError: true };
};
ReactDOM.render(
  <ErrorBoundary>
    <Btn />
  </ErrorBoundary>,
  document.getElementById("container")
);
