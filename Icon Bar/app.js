const { render } = ReactDOM
const { Component } = React

const IconBarStyle = {
  width: 100,
  backgroundColor: "#555",
  display: "flex",
  flexDirection: "column"
}

const AnchorStyleVertical = {
  flex: 1,
  textAlign: "center",
  padding: 12,
  transition: "all 0.3s ease",
  color: "white",
  fontSize: 36,
  cursor: "pointer"
}

class App extends Component {
  state = {
    shape: "Vertical",
    anchorStyle: AnchorStyleVertical,
    iconBarStyle: IconBarStyle
  }

  handleOnClick = () => {
    const shape = this.state.shape === "Vertical" ? "Horizon" : "Vertical"
    const iconBarStyle =
      shape === "Horizon"
        ? {
            ...this.state.iconBarStyle,
            width: "100%",
            flexDirection: "row"
          }
        : IconBarStyle
    this.setState({
      shape,
      iconBarStyle
    })
  }
  render = () => (
    <div>
      <h3>Shape - {this.state.shape}</h3>
      <button onClick={this.handleOnClick} className="button">
        Change Shape
      </button>
      <div style={this.state.iconBarStyle}>
        <a style={{ ...this.state.anchorStyle, backgroundColor: "#4CAF50" }}>
          <i className="fa fa-home" />
        </a>
        <a style={this.state.anchorStyle}>
          <i className="fa fa-search" />
        </a>
        <a style={this.state.anchorStyle}>
          <i className="fa fa-envelope" />
        </a>
        <a style={this.state.anchorStyle}>
          <i className="fa fa-globe" />
        </a>
        <a style={this.state.anchorStyle}>
          <i className="fa fa-trash" />
        </a>
      </div>
    </div>
  )
}

render(<App />, document.getElementById("root"))
