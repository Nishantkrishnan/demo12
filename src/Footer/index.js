import React from "react";
import './index.css';
  // stae component
     class Footer extends React.Component{
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
<div class="cent">
<div class="container-fluid">
<div class="row">
         <div class="col-md-6">
           <h3>www.irctc.in</h3>
          <p>copyRight@2019</p>
         </div>


          <div class ="col-md-6">
        
          <h5> Plot 54, New Vihar</h5>
          <h5>  New Delhi</h5>
          <h5> INDIA</h5>
          <h5> 9479288477</h5>

</div>
</div>
          </div>
            <p>Social Medias</p>
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-whatsapp"></a>
          </div>
         );
       }
     }
     export default Footer;
