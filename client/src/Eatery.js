import React from  'react';
import { Segment, Image } from 'semantic-ui-react';
import ball from './ball.png';


const Eatery = (props) => {

var howbahdat = props.content;
var howbahdatnow = howbahdat.split('&');

const divStyle ={
  backgroundImage: 'url("https://images.unsplash.com/photo-1523658473-41a7ca4772c8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e975aeb4be8d80fa3bd51fa4f3063ae9&auto=format&fit=crop&w=675&q=80")',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundSize: 'cover'
};
     return (   
      <Segment style={divStyle}>
     <div className="Eatery">
     <img src={ball} alt="tennis ball" />
     <a href={props.link}><p className="cordele">{howbahdatnow[0]}....</p></a>
     <img src={require('./ball.png')} alt="tennis ball" />

     </div>
        </Segment>
    );
  };

export default Eatery;