import React, { Component } from 'react';
import axios from 'axios';
import Eatery from './Eatery';
import Branches from './Branches'


class Eateries extends Component {
    constructor(props){
        super(props);
        
        this.state = {
        headlines: []
    }
}
fetchRss (id) {

    axios.get(`/rss/${id}`)
    .then(res => {

        const headlines = res.data.items;
      
        this.setState({headlines});
    })
    .catch(err => console.log(err));

}


   componentDidMount() {
    
    axios.get('/rss')
    .then(res => {
       const headlines = res.data.items;
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
          return  <Eatery 
          
                     key={headline.id}
                     title= {headline.title}
                     content={headline.contentSnippet}
                     link={headline.link}
                      /> 
                 })}
			</div>                  
			    );    

			return (    
                <div>
                <div className="ui center aligned container">
                <ol>
               <button className="ui blue button" onClick={this.fetchRss.bind(this, "3715726507793308443")}>Army</button>
               <button className="ui blue button"  onClick={this.fetchRss.bind(this, "8082617289749568491")}>Navy</button>
               <button className="ui blue button" onClick={this.fetchRss.bind(this, "14477008907129064916")}>Air Force</button>
               <button className="ui blue button" onClick={this.fetchRss.bind(this, "9509981562367748417")}>Marines</button>
               <button className="ui blue button" onClick={this.fetchRss.bind(this, "4736082232771657021")}>Coast Guard</button>
               
               </ol>
                </div>
						<div>
                        {headlines}
                        </div>
                      
                        </div>
                    )
            }
            
        }           
export default Eateries;