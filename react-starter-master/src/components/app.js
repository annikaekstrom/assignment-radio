import React from "react"

class App extends React.Component {
  contructor(props) {
    super(props)
    this.state = {
      radiostation: []
    }
  }

  componentDidMount() {
    fetch("https://api.sr.se/api/v2/channels?format=json&size=100").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        radioStation: json.channels
      })
    })
  }

  render() {
    return (
      <div className="main">
        <h1>Sveriges Radio</h1>
      <div className="stations">
        {this.state.radioStations.map((item) => {
          return <Station
            channelName={item.name} />
        })}
      </div>
      </div>
    )
  }

}

export default App
