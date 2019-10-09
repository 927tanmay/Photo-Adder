import React,{Component} from 'react';
import {
  Card, CardImg, CardText, CardBody,Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Cards extends Component{
    render(){
        return(

<div>
  
<Card className="figure" >

  <Link to={`single${this.props.post.id}`}><img className="photo" src={this.props.post.imageLink}></img></Link>
   
  {/* <CardImg className="photo" src={this.props.post.imageLink} alt="Card image cap"></CardImg> */}
  <CardBody>
    <CardText className="desc">{this.props.post.description}</CardText>
    <div className="button-container">
    <Button className="remove"  onClick={()=>{
      this.props.removePost(this.props.index)
       this.props.history.push('/')
    }}>Remove</Button>
    <Link className='button' to={`single${this.props.post.id}`}>
      <div className="comment-count">
          <div className="speech-bubble"></div>
          {this.props.comments[this.props.post.id] ? this.props.comments[this.props.post.id].length : 0
          } 
      </div>

    </Link>
    </div>        
  </CardBody>
 
</Card>
 </div>
        )
    }
}

Cards.propTypes={
  // post:PropTypes.object.isRequired,
  // onRemove:PropTypes.func.isRequired
}


 export default Cards;