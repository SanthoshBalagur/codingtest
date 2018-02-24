import React,{Component} from 'react';
import './footer.scss'

class footer extends Component{
render(){
 let ret =  <div className="containerfluid footer">
   <div className="row">
     <div className="col-md-4">
       <h4>Latest News </h4>
       <p>
       This website template has been designed by Free Website Templates for you,for free. 
       You can replace all this text with your own text. You can remove any link.
         </p>
         <hr/>
     </div>
     <div className="col-md-4">
      
       <h4>CONTACT US</h4>
       <li>Address:the address city , state  1111</li>
        <li>Phone:(+20)000 222 999</li>
        <li>Email:info@freewebsitetemplates.com</li>
      <hr/>
     </div>
     <div className="col-md-4">
       <h4>SEND US A MESSAGE</h4>
       <p>if you're having problems editing this website template, then don't hesitate to ask for help on the Forums.</p>
       <input id="inputlg" placeholder="Enter your email id" style={{margin:"6px"}}/>
				<a class="btn-success btn-sm btn" style={{fontSize:"18px"}}>Subscribe</a>
        <hr/>
  </div>
  </div>
     
   </div>
 return ret
}


}

export default footer