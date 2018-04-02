const { Component, Fragment } = React
const { render } = ReactDOM

function ActiveContent({ handleClick, country, capital }) {
  return (
    <div className="tabcontent">
      <span onClick={e => handleClick(e)} className="topright">
        x
      </span>
      <h3>{country}</h3>
      <p>
        {capital} is the capital of {country}.
      </p>
    </div>
  )
}
function ActiveCity({ handleClick, capital, active }) {
  return (
    <Fragment>
      <button
        className={`tablinks ${active ? "active" : ""}`}
        onClick={e => handleClick(e, capital)}
      >
        {capital}
      </button>
    </Fragment>
  )
}

const data = [
  {
    id: 1,
    country: "England",
    capital: "London",
    active: true
  },
  {
    id: 2,
    country: "France",
    capital: "Paris",
    active: false
  },
  {
    id: 3,
    country: "Japan",
    capital: "Tokyo",
    active: false
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
      <p>
        Click on the x button in the top right corner to close the current tab:
      </p>

      <div className="tab">
        {this.state.data.map(({ id, capital, active }) => (
          <ActiveCity
            handleClick={this.handleClick}
            key={id}
            capital={capital}
            active={active}
          />
        ))}
        {this.state.data
          .filter(x => x.active === true)
          .map(({ country, capital }) => (
            <ActiveContent
              key={1}
              handleClick={this.handleClick}
              country={country}
              capital={capital}
            />
          ))}
      </div>
    </Fragment>
  )
}

render(<App />, document.getElementById("root"))
