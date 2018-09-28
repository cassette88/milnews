import React from  'react';
import { Segment, Image } from 'semantic-ui-react';
import flag from './ludovic-gauthier-62746-unsplash.jpg';
import axios from 'axios';

const divStyle ={
  backgroundImage: 'url("https://images.unsplash.com/photo-1536497350214-99d33d7f7880?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a34c9361ffc74c009f5f6696b19e5e5e&auto=format&fit=crop&w=400&q=60")',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundSize: 'cover'
};

let howbahdatnow = '';
let howbahdis = "";
let howbahdisnow = howbahdis.split('&');

class Eatery extends React.Component {
  constructor(props){
    super(props);
    this.fetchRSS = this.fetchRSS.bind(this);
    this.state = {
      newScoop: true,
      news:[]
    }
    const howbahdat = this.props.content;
    howbahdatnow = howbahdat.split('&');
    
  }
  fetchRSS (id) {

    axios.get(`/rss/${id}`)
    .then(res => {
       const news = res.data.items;
      // (console.log(res.data));
        this.setState({news: news});
        this.setState({newScoop: false})
        howbahdisnow = howbahdis.split('&');
    })
    .catch(err => console.log(err));
  
  }
  
render(){
  return (   
      <Segment style={divStyle}>
     <div className="Eatery">
     <img className = "ui centered image" src={require('./lauren-bryan-711710-unsplash.jpg')} alt="american flag" />
     <a href={this.props.link}><p className="cordele">{howbahdatnow[0]}....</p></a>
     <img className = "ui centered image" src={flag} alt="american flag" />

     </div>
        </Segment>
    );
  };
}

export default Eatery;