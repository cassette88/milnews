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
var rImage = "";

//let howbahdisnow = howbahdis.split('&');

class Story extends React.Component {
  constructor(props){
    super(props);
    this.rImages = [require('./img/lieutenant-j-l-smith.jpg'),
    require('./img/army-alaska.jpg'), require('./img/army-europe.jpg'),
    require('./img/national-guard-sc.jpg'), require('./img/harry-white-navy.jpg'),
    require('./img/decarlo-family-1944.jpg'), require('./img/culinary-spec-gomez-chef-ng.jpg'),
    require('./img/2maw-marines.jpg'), require('./img/boyd-santiago-navy.jpg'), 
    require('./img/LC-Ratliff.jpg'), require('./img/sea-breeze.jpg'),
    require('./img/captain-usmc-ww2.jpg'), require('./img/detainee-training.jpg'),  
    require('./img/adams-range.jpg'), require('./img/marines-kids-books.jpg'), 
    require('./img/good-old-days-parade.jpg'), require('./img/kelsey-casey-usmc-pilot.jpg'),
    require('./img/good-old-days-parade2.jpg'), require('./img/pebble-beach.jpg'),  
    require('./img/charles-m-daniels.jpg'), require('./img/home-lucian-friel.jpg'),
    require('./img/good-old-days-parade3.jpg'), require('./img/39-45-8th-air-force.jpg'), 
  ] 

    this.state = {
      newScoop: true,
      news:[],
     
    }

var randomInt = Math.floor(Math.random() * this.rImages.length)
rImage = this.rImages[randomInt]

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
    <img className = "ui centered image mar" src={rImage} alt="personel" />
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