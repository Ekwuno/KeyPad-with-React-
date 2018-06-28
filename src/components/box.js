import React,{Component} from 'react';
import Input from './input';
import Btn from './btn';


class Box extends Component {

    render(){
        return (
            <div className ="calculator"> 
                
                <Btn/>
            </div>
        )
    }
}
export default Box