import React, { Component } from 'react';
import axios from 'axios';
import Story from './Story';
import {Container, Row} from 'reactstrap';
const uuidv4 = require('uuid/v4');
//import Branches from './Branches'


class Stories extends Component {
    constructor(props){
        super(props);
        
        this.state = {
        headlines: [],
        army: true,
        navy: true,
        af: true,
        usmc: true,
        cg: true

    }
}
fetchRss (id) {

    axios.get(`/news/${id}`)
    .then(res => {

        const headlines = res.data;
       // console.log(headlines);
        this.setState({headlines});
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
                  //   content={headline.contentSnippet}
                     link={headline.link}
                      /> 
                 })}
			</div>                  
			    );    

			return (    
                <div>
                 <Container>
                     <Row className="text-center"> 
                     <h1>Latest Military News</h1>
                    </Row>
                </Container>      
              {/* <div className="ui center aligned container"> */}
              <div className="ui stackable center aligned container menu">
                {/* <ol className="button-list"> */}
               {/* <button className="ui blue button" onClick={this.fetchRss.bind(this, "3715726507793308443")}>Army</button>
               <button className="ui blue button"  onClick={this.fetchRss.bind(this, "8082617289749568491")}>Navy</button>
               <button className="ui blue button" onClick={this.fetchRss.bind(this, "14477008907129064916")}>Air Force</button>
               <button className="ui blue button" onClick={this.fetchRss.bind(this, "9509981562367748417")}>Marines</button>
               <button className="ui blue button" onClick={this.fetchRss.bind(this, "4736082232771657021")}>Coast Guard</button> */}
             
               <button className="topbutton item ui red button" onClick={this.fetchRss.bind(this, "army")}>Army</button>
               <button className="topbutton item ui blue button"  onClick={this.fetchRss.bind(this, "navy")}>Navy</button>
               <button className="topbutton item ui red button" onClick={this.fetchRss.bind(this, "air-force")}>Air Force</button>
               <button className="topbutton item ui blue button" onClick={this.fetchRss.bind(this, "usmc")}>Marines</button>
               <button className="topbutton item ui red button" onClick={this.fetchRss.bind(this, "coast-guard")}>Coast Guard</button>
               
               </div>
               {/* </ol> */}
                
						<div>
                         
                        {headlines}
                        </div>
                      
                        </div>
                    )
            }
            
        }           
export default Stories;