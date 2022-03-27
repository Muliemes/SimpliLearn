import React, { Component } from 'react'

export class RegComp extends Component {
  render() {
      console.log("Regular Component Rendered")
    return (
      <div>This is the Regular Component{this.props.name}</div>
    )
  }
}

export default RegComp