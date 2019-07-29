import React from "react";
import './index.css';
  // stae component
     class Footer extends React.Component{
  //state is working in aboutus
       constructor(props){
         super(props);
         this.state={
           name:"Nishant K",
           email:"nishant.k@goodworklabs.com",
           mobile:9479288477
         };

       }
       changeEmail= () =>{
         this.setState({email:"Nishant@outlook.com"});
       }
       render()
       {
         return(
          /* <div style ={{
             width :"100%",
             height: "50px",
             background : "red",

           }}>
           </div>
           */
<div class="contai">
<div class="row">
<div class="col-md-4">
<h3>About Us</h3>
<p>Name:{this.state.name}</p>
<p>Email:{this.state.email}</p>
<p>Mobile:{this.state.mobile}</p>
<button type="button" onClick={this.changeEmail}>Update Email</button>

</div>
         <div class="col-md-4">
          <h3>www.irctc.in</h3>
          <p>copyRight@2019</p>
          <p>Social Medias</p>
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-whatsapp"></a>
        </div>


  <div class ="col-md-4">
<h3>Contact-Address</h3>
          <h5> Plot 54, New Vihar</h5>
          <h5>  New Delhi</h5>
          <h5> INDIA</h5>
          <h5> 9479288477</h5>
</div>
</div>
</div>


         );
       }
     }
     export default Footer;
