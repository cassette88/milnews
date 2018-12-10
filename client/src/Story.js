import React from  'react';
import { Segment } from 'semantic-ui-react';
import flag from './ludovic-gauthier-62746-unsplash.jpg';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

//import backdrop from './eberhard-grossgastelger.jpg';


const divStyle ={
// backgroundImage: 'url("https://images.unsplash.com/photo-1536497350214-99d33d7f7880?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a34c9361ffc74c009f5f6696b19e5e5e&auto=format&fit=crop&w=400&q=60")',
 // backgroundImage: 'url("./eberhard-grossgastelger.jpg")',
  //backgroundSize: 'cover',
 // backgroundPosition: 'center',
  //backgroundSize: 'contain'
  background: '#0052A5', 
  background: '-webkit-linear-gradient(to right, #E0162B, #0052A5)',
  background: 'linear-gradient(to right, #E0162B, #0052A5)' 
};

//let howbahdatnow = '';
//let howbahdis = "";
//let isEmpty = false;
let title = "";
let quote = "";
let amp = "";
let title_ = "";
let quote_ = "";
let amp_  = "";
let bold = "";
let bold_ = "";
let space = "";

//let howbahdisnow = howbahdis.split('&');

class Story extends React.Component {
  constructor(props){
    super(props);
  
    this.state = {
      newScoop: true,
      news:[]
    }
    const storyTitle = this.props.title;
    title = storyTitle.replace(/&#39;/g, "'");
    quote = title.replace(/&quot;/g, " \" ");
    amp = quote.replace(/&amp;/g, "and");
    
    const descript = this.props.description;
    title_ = descript.replace(/&#39;/g, "'");
    quote_ = title_.replace(/&quot;/g, " \" ");
    amp_ = quote_.replace(/&amp;/g, "and");
    bold = amp_.replace(/<b>/g, "");
    bold_ = bold.replace(/<\/b>/g, "");
    space = bold_.replace(/&nbsp;/g, "");

    //console.log(isEmpty);

    //howbahdatnow = howbahdat.split('&');
  
    
  }
  
render(){
  return (   
   
      <Segment className="segment" style={divStyle}>
       <Zoom>
     <div className="Eatery">
     <h2 className ="headline" align="center">{amp}</h2>
     {/* <img className = "ui centered image mar" src={require('./lauren-bryan-711710-unsplash.jpg')} alt="american flag" /> */}
    <img className = "ui centered image mar" src={require('./img/lieutenant-j-l-smith.jpg')} alt="lt smith" />
     {/* <a href={this.props.link}><p className="cordele">{howbahdatnow[0]}....</p></a> */}
    <Fade bottom>
    <h4 className="cordele" align="center">{space}....</h4>
    </Fade>
    {/* <img className = "ui centered image mar" src={flag} alt="american flag" /> */}
    <img className = "ui centered image mar" src={require('./img/marine-children.jpg')} alt="american flag" />

    <a href={this.props.link}> <button className="topbutton item ui blue button">Go to Story</button></a> 
     </div>
     </Zoom>
        </Segment>
    );
  };
}

export default Story;