import React, { PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
export class ParentComp extends PureComponent {
    constructor(props) {
        super(props)
      
        this.state = {
           name: "SimpliLearn"
  
        }
      }
      componentDidMount(){
          setInterval(()=>{
              this.setState({
                  name:"SimpliLearn"
              });
  
          }, 3000); 
      }     
  render() {
      console.log("Parent component Rendered")
    return (
      <div>Im the Parent Component
          <RegComp name={this.state.name}/>
          <PureComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp