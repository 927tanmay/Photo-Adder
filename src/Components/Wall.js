import React,{Component} from 'react';
import Cards from './Card';
import PropTypes from 'prop-types';

class Wall extends Component{
    render(){
        return(

            <div>
                <button className="btn"> </button>
            <div className="photo-grid">
               {this.props.posts.map((post,index)=>  <Cards key={index} post={post} onRemove={this.props.onRemove}/> )}
            </div>
            </div>
       )
     }
}

Wall.propTypes={
    posts: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired
};


export default Wall;