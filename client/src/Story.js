import React from  'react';
// import { Segment } from 'semantic-ui-react';
// import flag from './ludovic-gauthier-62746-unsplash.jpg';
import Radium, {StyleRoot} from 'radium';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import LazyLoad from 'react-lazyload';
var uniqueRandomArray = require('unique-random-array');

//import backdrop from './eberhard-grossgastelger.jpg';


const divStyle ={
  // background: '#0052A5', 
  // background: '-webkit-linear-gradient(to right, #E0162B, #0052A5)',
  // background: 'linear-gradient(to right, #E0162B, #0052A5)' 

   background: 'linear-gradient(to right, #E0162B, #0052A5)',
   letterSpacing: '2px'
}

var mobile = {
  fontFamily: 'Fjalla One',
 '@media (max-width: 420px)': {
    width: '100%'
  }
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
let final = "";
var rImages = "";


//let howbahdisnow = howbahdis.split('&');

class Story extends React.Component {
  constructor(props){
    super(props);
    rImages = uniqueRandomArray([require('./img/lieutenant-j-l-smith.png'),
    require('./img/army-alaska.png'), require('./img/army-europe.png'),
    require('./img/national-guard-sc.png'), require('./img/harry-white-navy.png'),
    require('./img/decarlo-family-1944.png'), require('./img/culinary-spec-gomez-chef-ng.png'),
    require('./img/2maw-marines.png'), require('./img/boyd-santiago-navy.png'), 
    require('./img/LC-Ratliff.png'), require('./img/sea-breeze.png'),
    require('./img/captain-usmc-ww2.png'), require('./img/detainee-training.png'),  
    require('./img/adams-range.png'), require('./img/marines-kids-books.png'), 
    require('./img/good-old-days-parade.png'), require('./img/kelsey-casey-usmc-pilot.png'),
    require('./img/good-old-days-parade2.png'), require('./img/pebble-beach.png'),  
    require('./img/charles-m-daniels.png'), require('./img/home-lucian-friel.png'),
    require('./img/good-old-days-parade3.png'), require('./img/39-45-8th-air-force.png'), 
    require('./img/marine-children.png')
  ]); 

    this.state = {
      newScoop: true,
      news:[],
     
    }

// var randomInt = Math.floor(Math.random() * this.rImages.length)
// rImage = this.rImages[randomInt]

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
    final = space.replace(/&gt;/g, "");
  }
  
render(){
  return (   
   
      <div style={divStyle}className="col-sm-12 space" align="center">
        <LazyLoad height={'100%'}>
         <StyleRoot>
         <Fade>
     <div style={mobile} className="card-body Eatery" align="center">
   
     <h2 className ="headline" align="center">{amp}</h2>
     {/* <img className = "ui centered image mar" src={require('./lauren-bryan-711710-unsplash.jpg')} alt="american flag" /> */}
    <img className = "img-fluid" src={rImages()} alt="personel" />
     {/* <a href={this.props.link}><p className="cordele">{howbahdatnow[0]}....</p></a> */}
    <Fade bottom>
    <div className="mar">
    <h4 className="textBody" >{final}....</h4>
    </div>
    </Fade>
    {/* <img className = "ui centered image mar" src={flag} alt="american flag" /> */}
    <div>
      <Fade>
    <img className = "img-fluid" src={rImages()} alt="american flag" />
    </Fade>
    </div>
    <Zoom>
    <a className ="card-text"href={this.props.link}> <button type="button"className="btn btn-primary nav-item navspace">Go to Story</button></a> 
    </Zoom>
     </div>
     </Fade>
     </StyleRoot>
     </LazyLoad>
        </div>
    );
  };
}

export default Radium(Story);