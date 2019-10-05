import React,{Component} from 'react';
import ReactDom from 'react-dom';

// const arr = ["Hello one","Hello two","Hello three"];

// const element = (
//     <h1>Ordered List</h1><ol>
   
//         {arr.map((task,index)=> <li key={index}>{task}</li>)}
// </ol>)
class Title extends Component{
    render(){
        return <h1>{this.props.name}</h1>


    }
}



class List extends Component{
    render(){

       return( <ol> {this.props.tasks.map((task,index)=> <li key={index}>{task}</li>)}
        </ol>
       )
}
}


class Mains extends Component{
    render(){
        return(
              <div>
                    <Title name={"Task List Items"}/>
                    <List tasks={["Hello Tanmay","Hello may","Hello Tanmay",]}/>
            </div>
        )
    }
}



ReactDom.render(<Mains/>,document.getElementById('root'));