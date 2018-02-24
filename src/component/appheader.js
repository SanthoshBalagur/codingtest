import React,{Component} from 'react';
import logo from './logo.png'

class appHeader extends Component{
  render(){
   let ret = <div className="containerfluid" style = {{ padding:'20px',paddingRight:'300px', paddingLeft:'300px',backgroundColor:'black',margin:0}}>
<div className="row">
  <div className="col-md-6" >
    <img src  ={ logo } style={ {width:'100%'}}/>
  </div>
  <div className="col-md-6">
  <nav className="navbar navbar-toggleable-md navbar-dark bg-company-red">
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#">About</a>
      <a className="nav-item nav-link" href="#">Practices</a>
      <a className="nav-item nav-link" href="#">OurLawyers</a>
      <a className="nav-item nav-link" href="#">News</a>
    </div>
  </div>
</nav>

  </div>
</div>
    </div>

return ret
   
     
  }
}

export default appHeader