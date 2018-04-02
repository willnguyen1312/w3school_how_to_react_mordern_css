const { Component, Fragment } = React
const { render } = ReactDOM

const Panel = ({ section, open, handleClick }) => (
  <Fragment>
    <button
      onClick={() => handleClick(section)}
      className={`accordion ${open ? "active" : ""}`}
    >
      Section {section}
    </button>
    <div
      style={{
        display: `${open ? "block" : "none"}`,
        height: 50
      }}
      className="panel"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  </Fragment>
)

const data = [
  { id: 1, open: false },
  { id: 2, open: false },
  { id: 3, open: false }
]

class App extends Component {
  state = {
    data
  }

  handleClick = id => {
    const newData = this.state.data.map(x => Object.assign({}, x))
    const foundIndex = newData.findIndex(x => x.id === id)
    newData[foundIndex].open = !newData[foundIndex].open
    this.setState({
      data: newData
    })
  }

  render = () => (
    <Fragment>
      <h2>Accordion with symbols</h2>
      <p>
        In this example we have added a &quot;plus&quot; sign to each button.
        When the user clicks on the button, the &quot;plus&quot; sign is
        replaced with a &quot;minus&quot; sign.
      </p>
      {this.state.data.map(({ id, open }) => (
        <Panel
          key={id}
          section={id}
          open={open}
          handleClick={this.handleClick}
        />
      ))}
    </Fragment>
  )
}

render(<App />, document.getElementById("root"))
