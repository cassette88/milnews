import React, { Component } from 'react';
import axios from 'axios';
import Eatery from './Eatery';
import { Segment, Image } from 'semantic-ui-react';

class Eateries extends Component {
    constructor(props){
        super(props);
        
        this.state = {
        headlines: []
    }
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
                        {headlines}
						</div>
                    )
            }
            
        }           
export default Eateries;