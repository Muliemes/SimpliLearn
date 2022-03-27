import React, { PureComponent } from 'react'
export class PureComp extends PureComponent {
   
  render() {
      console.log("Pure Component Rendered from")
    return (
      <div>
        Im the Pure Component {this.props.name}

      </div>
    )
  }
}

export default PureComp