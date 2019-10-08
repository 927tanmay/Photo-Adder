import React,{Component} from 'react';
import Title from './Title';
import Wall from './Wall';
import AddPhoto from './addPhoto';
import {Route} from 'react-router-dom';

class Mains extends Component{
    constructor(){
        super();
        this.state ={
        posts: [{
            id: 0,
            description: "beautiful landscape",
            imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
            "3919321_1443393332_n.jpg"
            }, {
            id: 1,
            description: "Aliens???",
            imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
            "08323785_735653395_n.jpg"
            }, {
            id: 2,
            description: "On a vacation!",
            imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
            }],
            // screen:"photos"   
    }
   

    this.removePhoto=this.removePhoto.bind(this);
    this.addPhoto=this.addPhoto.bind(this);
    // this.add = this.add.bind(this); 
}
    
    removePhoto(postRemoved){
        console.log(postRemoved.description);
        this.setState((state)=>({
            posts: state.posts.filter( post => post!==postRemoved)
        }))
    }

    addPhoto(postAdded){
       //console.log(postAdded);
        this.setState((state)=>(
            {  posts: state.posts.concat([postAdded])             }

        ))
    }

    componentDidUpdate(prevProp,prevState){
        console.log(prevState.posts);
        console.log(this.state.posts);
    }

    // add(){
    //     this.setState({
    //         screen : "add"
    //     })
    // }


    render(){

        return(
              <div>
                    <Route exact path="/" render={()=>(
                        <div>
                            <Title name={"Photowall"}/>
                            <Wall posts={this.state.posts} onRemove={this.removePhoto}/>
                        </div>
                    )}/>
                  
                    <Route path="/AddPhoto" render={({history})=>(
                        <div>
                            <AddPhoto onAdd={(addedpost)=>{this.addPhoto(addedpost)
                                history.push('/')    
                        }
                            
                        
                        }
                             
                            />

                        </div>
                    )}/>        
            </div>
        )
    }




    //     return(
    //           <div>
    //               {
    //                this.state.screen === "photos" && (   
    //               <div>
    //                 <Title name={"Photowall"}/>
    //                 <Wall posts={this.state.posts} onRemove={this.removePhoto} add = {this.add}/>
                    
    //                 </div>
    //                )
    //               }
    //               { this.state.screen ==="add" && (
    //               <div>
    //                 <AddPhoto />
    //               </div>
    //               )
    //               }  
    //         </div>
    //     )
    // }
}

export default Mains;