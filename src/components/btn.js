import React, {Component} from 'react' ;
import Input from './input';


var myButton = {
        backgroundColor :"rgba(0, 0, 0, 0.5)",
        color : "rgb(0, 0, 0)",
        width : '',
        height : '',
        borderRadius : '5px',
        padding : "20px",
        fontSize: "22px",
       border : '1px solid #111',

    };
class Btn extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: []
        }
    }

   click(par){
       let statenow = this.state.value;
       if(typeof par == 'number'){
           statenow.push(par);
           this.setState({
               value: statenow
           })
       }
       if(par == 'Bs'){
           statenow.pop();
           this.setState({
               value: statenow
           })
       }
       if (par == 'OK'){
           alert(statenow.join(''));
       }
   }

    render(){
        var numbers = [1,2,3,4,5,6,7,8,9,'Bs',0,'OK'];

        return (
            <div>
                <Input inputed={this.state.value}/>
                <div className="calculator-buttons">
                    {/* {numbers.map((number)=>{
                    return <button style = {myButton} >{number}</button>
                    })} */}
                    {numbers.map((number)=>{
                        return <button  onClick = {this.click.bind(this, number)}style = {myButton}>{number}</button>
                    })} 
                </div>
            </div>
        )
    }
}

export  default Btn