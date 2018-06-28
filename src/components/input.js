import React, {Component} from 'react'

class Input extends Component {

    render(){
        
        return (
          <input className = "calculator input"type ="text" value={this.props.inputed.join('')} />
        )
    }
}

export default Input 