import React, { PureComponent } from 'react'
export class PureComp extends PureComponent {
   
  render() {
      console.log("Pure Component Rendered from")
    return (
      <div>
        <p>Im the Pure Component {this.props.name}</p>

      </div>
    )
  }
}

export default PureComp