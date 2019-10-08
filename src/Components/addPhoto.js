import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddPhoto extends Component{



    constructor(){

        super();
        this.handleSubmit=this.handleSubmit.bind(this);
    }


    handleSubmit(event){
         event.preventDefault();
        const link = event.target.elements.link.value;
        const desc = event.target.elements.description.value;
        if(link && desc){
            const arr = {
                id:Number(new Date()),
                description : desc,
                ImageLink : link
            };
            this.props.addPost(arr)
            this.props.onHistory.push('/')

            // {this.props.onAdd(arr)}
        }
        
    }
    



    render(){
        return(
            <div>
                {/* <h1>Photowall</h1> */}
                <div>
                <Form className="form" inline onSubmit={this.handleSubmit} >
                <FormGroup>
                <Input type="text" name="link" placeholder="Link" name="link"/>
                </FormGroup>
                {' '}
                <FormGroup>
               
                <Input type="text" name="desc" placeholder="Description" name="description" />
                </FormGroup>
                {' '}
                <Button className="formbtn">Post</Button>
                </Form>
                </div>
            </div>
        )
    }
}

export default AddPhoto;