const { Component, Fragment } = React
const { render } = ReactDOM

function ActiveContent({ country, capital, background }) {
  return (
    <div style={{ backgroundColor: background }} className="tabcontent">
      <h3>{country}</h3>
      <p>
        {capital} is the capital of {country}.
      </p>
    </div>
  )
}

function ActiveButton({ handleClick, capital, background, active }) {
  return (
    <button
      style={{ backgroundColor: `${active ? background : ""}` }}
      className="tablink"
      onClick={e => handleClick(e, capital)}
    >
      {capital}
    </button>
  )
}

const data = [
  {
    id: 1,
    country: "England",
    capital: "London",
    active: true,
    background: "red"
  },
  {
    id: 2,
    country: "France",
    capital: "Paris",
    active: false,
    background: "green"
  },
  {
    id: 3,
    country: "Japan",
    capital: "Tokyo",
    active: false,
    background: "blue"
  },
  {
    id: 4,
    country: "Norway",
    capital: "Oslo",
    active: false,
    background: "orange"
  }
]

class App extends Component {
  state = {
    data
  }

  handleClick = (e, capital) => {
    const newData = this.state.data.map(x =>
      Object.assign({}, x, { active: false })
    )
    if (!capital) {
      this.setState({
        data: newData
      })
    } else {
      const foundIndex = newData.findIndex(x => x.capital === capital)
      newData[foundIndex].active = true
      this.setState({
        data: newData
      })
    }
  }

  render = () => (
    <Fragment>
      <div className="tab">
        {this.state.data
          .filter(x => x.active === true)
          .map(({ country, capital, background }) => (
            <ActiveContent
              background={background}
              key={1}
              handleClick={this.handleClick}
              country={country}
              capital={capital}
            />
          ))}
        {this.state.data.map(({ background, capital, id, active }) => (
          <ActiveButton
            handleClick={this.handleClick}
            background={background}
            key={id}
            capital={capital}
            active={active}
          />
        ))}
      </div>
    </Fragment>
  )
}

render(<App />, document.getElementById("root"))
