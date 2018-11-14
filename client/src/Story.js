import React from  'react';
import { Segment } from 'semantic-ui-react';
import flag from './ludovic-gauthier-62746-unsplash.jpg';
//import backdrop from './eberhard-grossgastelger.jpg';


//const divStyle ={
// backgroundImage: 'url("https://images.unsplash.com/photo-1536497350214-99d33d7f7880?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a34c9361ffc74c009f5f6696b19e5e5e&auto=format&fit=crop&w=400&q=60")',
 // backgroundImage: 'url("./eberhard-grossgastelger.jpg")',
  //backgroundSize: 'cover',
 // backgroundPosition: 'center',
  //backgroundSize: 'contain'
//};

//let howbahdatnow = '';
//let howbahdis = "";
//let isEmpty = false;
let title = "";
let quote = "";
let amp = "";

//let howbahdisnow = howbahdis.split('&');

class Story extends React.Component {
  constructor(props){
    super(props);
  
    this.state = {
      newScoop: true,
      news:[]
    }
    const howbahdat = this.props.title;
    title = howbahdat.replace(/&#39;/g, "'");
    quote = title.replace(/&quot;/g, " \" ");
    amp = quote.replace(/&amp;/g, "and");

    //console.log(isEmpty);

    //howbahdatnow = howbahdat.split('&');
  
    
  }
  
render(){
  return (   
   
      <Segment>
       
     <div className="Eatery">
     <img className = "ui centered image" src={require('./lauren-bryan-711710-unsplash.jpg')} alt="american flag" />
   
     {/* <a href={this.props.link}><p className="cordele">{howbahdatnow[0]}....</p></a> */}
     <a href={this.props.link}><p className="cordele" align="center">{amp}....</p></a>
    
     <img className = "ui centered image" src={flag} alt="american flag" />
    
     </div>
       
        </Segment>
    );
  };
}

export default Story;