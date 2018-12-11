import React, { Component } from 'react';
import axios from 'axios';
import Story from './Story';
// import {Container, Row} from 'reactstrap';

//import Branches from './Branches'
import { animateScroll as scroll } from 'react-scroll'
const uuidv4 = require('uuid/v4');

class Stories extends Component {
    constructor(props){
        super(props);
        
        this.state = {
        headlines: [],
        branch: "usmc"
       
    }
    
}
fetchRss (id) {

    axios.get(`/news/${id}`)
    .then(res => {

        const headlines = res.data;
        const branch = id;
        // console.log(headlines);
        this.setState({headlines});
        this.setState({branch});
    })
    .catch(err => console.log(err));

}


   componentDidMount() {
    
   // axios.get('/rss')
   axios.get('/news/usmc') 
   .then(res => {
       //const headlines = res.data.items;
      const headlines = res.data;
       // (console.log(res.data));
        this.setState({headlines});
    })
    .catch(err => console.log(err));
    // (console.log(res.data.items));
   
}

scrollToTop() {
    scroll.scrollToTop();
  }

     render() {
        
let headlines = null;
headlines = (
		
		<div>
         { this.state.headlines.map((headline) => {
             const id_ = uuidv4();
         return  <Story 

                   //  key={headline._id}
                   key={id_}  
                   title= {headline.title}
                   description={headline.description}
                   link={headline.link}
                   branch = {this.state.branch}
                      /> 
                 })}
            
			</div>                  
			    );    

			return (    
                <div>
                 
                     <div className="row text-center" align="center"> 
                     <div className="col">
                     <h1 align ="center">Latest Military News</h1>
                     </div>
                    </div>
                   
              {/* <div className="ui stackable center aligned container menu"> */}
            <div align="center">
               <button align="center" type="button" class="btn btn-danger" onClick={this.fetchRss.bind(this, "army")}>Army</button>
               <button align="center" type="button" class="btn btn-primary"  onClick={this.fetchRss.bind(this, "navy")}>Navy</button>
               <button align="center" type="button" class="btn btn-danger" onClick={this.fetchRss.bind(this, "air-force")}>Air Force</button>
               <button align="center" type="button" class="btn btn-primary" onClick={this.fetchRss.bind(this, "usmc")}>Marines</button>
               <button align="center" type="button" class="btn btn-danger" onClick={this.fetchRss.bind(this, "coast-guard")}>Coast Guard</button>
               
               </div>
               
                
						<div>
                         
                        {headlines}
                        </div>
                        <div align="center">
               {/* <button align="center" type="button" class="btn btn-danger" onClick={this.fetchRss.bind(this, "army")}>Army</button>
               <button align="center" type="button" class="btn btn-primary"  onClick={this.fetchRss.bind(this, "navy")}>Navy</button>
               <button align="center" type="button" class="btn btn-danger" onClick={this.fetchRss.bind(this, "air-force")}>Air Force</button>
               <button align="center" type="button" class="btn btn-primary" onClick={this.fetchRss.bind(this, "usmc")}>Marines</button>
               <button align="center" type="button" class="btn btn-danger" onClick={this.fetchRss.bind(this, "coast-guard")}>Coast Guard</button> */}
                 <button align="center" type="button" class="btn btn-success"><a onClick={this.scrollToTop}>To the top!</a></button>
               </div>   


                        </div>
                    )
            }
            
        }           
export default Stories;