const { Component, Fragment } = React
const { render } = ReactDOM

const Anchor = ({ header, href, active }) => (
  <a className={`${active ? "active" : ""}`} href={href}>
    {header}
  </a>
)

const Content = ({ head, content }) => (
  <div style={{ paddingLeft: 16 }}>
    <h2>{head}</h2>
    <p>{content}.</p>
  </div>
)

const data = [
  {
    id: 1,
    header: "Home",
    href: "#home",
    active: true,
    head: "Top Navigation Home Example",
    content: "Some content..."
  },
  {
    id: 2,
    header: "News",
    href: "#news",
    active: false,
    head: "Top Navigation News Example",
    content: "Some content..."
  },
  {
    id: 3,
    header: "Contact",
    href: "#contact",
    active: false,
    head: "Top Navigation Contact Example",
    content: "Some content..."
  },
  {
    id: 4,
    header: "About",
    href: "#about",
    active: false,
    head: "Top Navigation About Example",
    content: "Some content..."
  }
]

class App extends Component {
  state = {
    data
  }

  render = () => (
    <Fragment>
      <div className="topnav">
        {this.state.data.map(({ id, header, href, active, head, content }) => (
          <Anchor
            key={id}
            header={header}
            head={head}
            active={active}
            href={href}
            content={content}
          />
        ))}
      </div>

      {this.state.data
        .filter(x => x.active)
        .map(({ head, content, id }) => (
          <Content key={id} head={head} content={content} />
        ))}
    </Fragment>
  )
}

render(<App />, document.getElementById("root"))
