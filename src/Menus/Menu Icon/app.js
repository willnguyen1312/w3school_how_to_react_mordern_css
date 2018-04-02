const { Component, Fragment } = React
const { render } = ReactDOM

class App extends Component {
  state = {
    transform: false
  }

  handleClick = () => {
    console.log("object")
    this.setState({
      transform: !this.state.transform
    })
  }

  render = () => (
    <Fragment>
      <p>Click on the Menu Icon to transform it to &quot;X&quot;:</p>
      <div
        className={`container ${this.state.transform ? "change" : ""}`}
        onClick={this.handleClick}
      >
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />
      </div>
    </Fragment>
  )
}

render(<App />, document.getElementById("root"))
