import React,{Component} from 'react';
import Cards from './Card';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Wall extends Component{
    render(){
        return(

            <div>
                <Link to="/AddPhoto"><button className="addbtn"> </button></Link>
                {/* <a className="addbtn" onClick={()=>this.props.add()} href="#AddPhoto"></a> */}
                {/* <button className="addbtn" onClick={()=>this.props.add()}> </button> */}
            <div className="photo-grid">
               {this.props.posts.map((post,index)=>  <Cards key={index} post={post} onRemove={this.props.onRemove}/> )}
            </div>
            </div>
       )
     }
}

Wall.propTypes={
    posts: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired,
};


export default Wall;