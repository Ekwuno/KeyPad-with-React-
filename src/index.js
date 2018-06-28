import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Box from './components/box'


function Outside (){
    return (
        <div> 
            <Box/>
        </div>
    )
}

// class Outside extends Component {
//     render(){
//         return (
//             <div> 
//                 <Box/>
//             </div>
//         )
//     }
// }


ReactDOM.render(<Outside/>, document.getElementById('root'));

