import React,{Component} from 'react'
import { Counter } from './Counter';
import UpdatedComp from './HigherOreder';
export class Click extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      };
    }
    UpdateClick=()=>{
        this.setState({count: this.state.count +1});
    }
    render(){
        const {count} = this.state; 
        return(
            <div>
                <button onClick={this.UpdateClick}>{this.props.name} Clicked {count} times</button>
            </div>
        )
    }
    
}
export default UpdatedComp(Click);