import React,{Component} from 'react';
import Card from './Card';
import Comments from './comments';

class single extends Component{
    render(){
        console.log(this.props.match.params.id); 
        const id=Number(this.props.match.params.id);  
        const post = this.props.posts.find((post)=>post.id===id);
        const comments = this.props.comments[id] || []
        const index = this.props.posts.findIndex((post)=>post.id === id)
        return(
            <div className='single-photo'>
               <Card post={post} {...this.props} index={index}/>
               <Comments addComment={this.props.addComment} comments={comments} id={id}/>
            </div>
        )
    }





}


export default single; 