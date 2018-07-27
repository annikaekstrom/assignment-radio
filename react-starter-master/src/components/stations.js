import React from "react"

class Station extends React.Component {
  render() {
    return (

      <div className="radio" >
        <div className="image">
          <img src={this.props.channelImage} alt="logo"/>
        </div>
      </div>
    )
  }
}
