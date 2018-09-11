import React from  'react';
import { Segment, Image } from 'semantic-ui-react';
import flag from './flag.jpg';


const Eatery = (props) => {

var howbahdat = props.content;
var howbahdatnow = howbahdat.split('&');

const divStyle ={
  backgroundImage: 'url("https://images.unsplash.com/photo-1536497350214-99d33d7f7880?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a34c9361ffc74c009f5f6696b19e5e5e&auto=format&fit=crop&w=400&q=60")',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundSize: 'cover'
};
     return (   
      <Segment style={divStyle}>
     <div className="Eatery">
     <img src={flag} alt="american flag" />
     <a href={props.link}><p className="cordele">{howbahdatnow[0]}....</p></a>
     <img src={require('./flag.jpg')} alt="tennis ball" />

     </div>
        </Segment>
    );
  };

export default Eatery;