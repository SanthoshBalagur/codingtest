import React,{Component} from 'react';
import image  from './family-large.jpg';
import meeting from './meeting.jpg';

class section  extends  Component{
 render(){
let ret = <div className="container">
  <div style={{display:"flex",justifyContent:"center"}}>
  <img src ={ image } className="img-fluid"/>
  </div>
  
  <div className="container">
    <div className="row">
    <div className="col-md-6">
      <h1>The Manes Winchester Promise</h1>
      <p>
      This website template has been designed by Free Website Templates for you, for free.
       You can replace all this text with your own text. 
       You can remove any link to our website from this website template, 
       you're free to use this website template without linking back to us.
       If you're having problems editing this website template, 
       then don't hesitate to ask for help on the Forums.
      </p>
    </div>
    <div className="col-md-6 " style={{display:"inline-block"}}>
      <blockquote className="blockquote">
        <h1> Testimonials </h1>
        <p>Aenean ullamcorper purus vitae nisl tristique sollicitudin. 
          Quisque vestibulum, erat ornare.</p>
          <footer>John Doe and Jane Doe-</footer>
      </blockquote>
      </div>
     
      </div>
    </div>
    <section>
      <div className="container"style={{backgroundColor:"#e2e2e2",width:"100$",marginLeft: "auto",
   marginright:"auto",
   maxwidth: "initial"}}>
      <h2 style={{marginRight:"4px"}}>WHY CHOOSE US?</h2>
        <div className="row">
  
      <div className="col-md-3">
      <div className="box">
        <img src = { meeting } style ={{width:"100%", marginLeft:"6px",marginRight:"4px",marginTop:"4px",marginBottom:"4px"}}/>
        <h4>OUR LAWYERS  </h4>  
        <p style={{display:"block"}}>Our website templates are created with inspiration,
         checked for quality and originality. </p>
         <a href="index.html" className="more" style={{marginLeft:"4px",backgroundPosition:"-107px 0",color:"#fff",display:"inline-block",textAlign:"center"}}>Read More</a>
        </div> 
      </div>
      <div className="col-md-3 col-sm-1 ">
      <div className="box" style={{marginLeft:"13px"}}>
        <img src = { meeting } style ={{width:"100%", marginLeft:"5px",marginRight:"5px",marginTop:"5px",marginBottom:"5px"}}/>
        <h4>OUR LAWYERS  </h4>  
        <p style={{display:"block"}}>Our website templates are created with inspiration,
         checked for quality and originality. </p>
        </div> 
      </div>
      <div className="col-md-3 col-sm-1">
      <div className="box" style={{marginLeft:"13px"}}>
        <img src = { meeting } style ={{width:"100%", marginLeft:"5px",marginRight:"5px",marginTop:"5px",marginBottom:"5px"}}/>
        <h4>OUR LAWYERS  </h4>  
        <p style={{display:"block"}}>Our website templates are created with inspiration,
         checked for quality and originality. </p>
        </div> 
      </div>
      <div className="col-md-3 col-sm-1">
      <div className="box" style={{marginLeft:"13px"}}>
        <img src = { meeting } style ={{width:"100%", marginLeft:"5px",marginRight:"5px",marginTop:"5px",marginBottom:"5px"}}/>
        <h4>OUR LAWYERS  </h4>  
        <p style={{display:"block"}}>Our website templates are created with inspiration,
         checked for quality and originality. </p>
        </div> 
      </div>
        </div>
        </div>
        </section>
    
  </div>
return ret
 }
}
export default section