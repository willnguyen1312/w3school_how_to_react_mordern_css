const { Component, Fragment } = React
const { render } = ReactDOM

function ActiveContent({ header, content, background }) {
  return (
    <div style={{ backgroundColor: background }} className="tabcontent">
      <h3>{header}</h3>
      <p>{content}</p>
    </div>
  )
}

function ActiveButton({ handleClick, header, background, active }) {
  return (
    <button
      style={{ backgroundColor: `${active ? background : ""}` }}
      className="tablink"
      onClick={e => handleClick(e, header)}
    >
      {header}
    </button>
  )
}

const data = [
  {
    id: 1,
    header: "Home",
    content: "Home is where the heart is..",
    active: false,
    background: "red"
  },
  {
    id: 2,
    header: "News",
    content: "Some news this fine day!",
    active: true,
    background: "green"
  },
  {
    id: 3,
    header: "Contact",
    content: "Get in touch, or swing by for a cup of coffee.",
    active: false,
    background: "blue"
  },
  {
    id: 4,
    header: "About",
    content: "Who we are and what we do.",
    active: false,
    background: "orange"
  }
]

class App extends Component {
  state = {
    data
  }

  handleClick = (e, header) => {
    const newData = this.state.data.map(x =>
      Object.assign({}, x, { active: false })
    )
    if (!header) {
      this.setState({
        data: newData
      })
    } else {
      const foundIndex = newData.findIndex(x => x.header === header)
      newData[foundIndex].active = true
      this.setState({
        data: newData
      })
    }
  }

  render = () => (
    <Fragment>
      {this.state.data.map(({ background, header, id, active }) => (
        <ActiveButton
          handleClick={this.handleClick}
          background={background}
          key={id}
          header={header}
          active={active}
        />
      ))}
      {this.state.data
        .filter(x => x.active === true)
        .map(({ header, content, background }) => (
          <ActiveContent
            background={background}
            key={1}
            handleClick={this.handleClick}
            header={header}
            content={content}
          />
        ))}
    </Fragment>
  )
}

render(<App />, document.getElementById("root"))
