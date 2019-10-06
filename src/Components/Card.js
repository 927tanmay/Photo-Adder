import React,{Component} from 'react';
import {
  Card, CardImg, CardText, CardBody,Button
} from 'reactstrap';
import PropTypes from 'prop-types';

class Cards extends Component{
    render(){
        return(

<div>
<Card className="figure" >
   
  <CardImg className="photo" src={this.props.post.imageLink} alt="Card image cap"></CardImg>
  <CardBody>
    <CardText className="desc">{this.props.post.description}</CardText>
    <div className="button-container">
    <Button className="remove"  onClick={()=>{this.props.onRemove(this.props.post)}}>Remove</Button>
    </div>        
  </CardBody>
 
</Card>
 </div>
        )
    }
}

Cards.propTypes={
  post:PropTypes.object.isRequired,
  onRemove:PropTypes.func.isRequired
}


 export default Cards;