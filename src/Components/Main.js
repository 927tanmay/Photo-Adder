import React,{Component} from 'react';
import Title from './Title';
import Wall from './Wall';
import AddPhoto from './addPhoto';
import {Route} from 'react-router-dom';
import {removePost} from '../redux/action';
import {Link} from 'react-router-dom';
import Single from './single';

class Mains extends Component{
    constructor(){
        super();
        // this.state ={
        // posts: [{
        //     id: 0,
        //     description: "beautiful landscape",
        //     imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        //     "3919321_1443393332_n.jpg"
        //     }, {
        //     id: 1,
        //     description: "Aliens???",
        //     imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
        //     "08323785_735653395_n.jpg"
        //     }, {
        //     id: 2,
        //     description: "On a vacation!",
        //     imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
        //     }],
            // screen:"photos"   
    // }
   

    // this.removePhoto=this.removePhoto.bind(this);
    // this.addPhoto=this.addPhoto.bind(this);
    // this.add = this.add.bind(this); 
 }
    // componentDidMount(){
    //    console.log( this.props.removePost(1))
    // }
    



    // add(){
    //     this.setState({
    //         screen : "add"
    //     })
    // }


    render(){
        console.log(this.props.posts);
        return(
              <div>
                    <Link to="/" ><h1>Photowall</h1></Link>

                    <Route exact path="/" render={()=>(
                        <div>
                            {/* <Title name={"Photowall"}/> */}
                            {/* <Wall posts={this.state.posts} onRemove={this.removePhoto}/> */}
                            <Wall{...this.props}/>
                        </div>
                    )}/>
                  
                    <Route path="/AddPhoto" render={({history})=>(
                        <div>
                            <AddPhoto {...this.props} onHistory={history}
                        //     {
                        //         (addedpost)=>{
                        //          this.addPhoto(addedpost)
                        //         history.push('/')    
                        // }
                            
                        
                        // }
                             
                            />

                         </div>
                    )}/>}

                    <Route path='/single:id' render={(params)=>(
                       <div>
                           <Single {...this.props} {...params}/>
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