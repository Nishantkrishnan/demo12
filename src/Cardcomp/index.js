import React from "react";
import './index.css';
  // stae component
     class Cardcomp extends React.Component{
       render()
       {
         return(
           <div class="row">

     <div class="column">
       <div class="card">
         <h3>Southern Railways</h3>
         <p>Indian railways are always there to support you</p>
         <img src ="data:image/jpeg;base64,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"></img>
       </div>
     </div>

     <div class="column">
       <div class="card">
         <h3>Book Tickets</h3>
         <p> Train Timings and Details</p>
         <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHv_taFiFgarI71TEybuU9_6fytsu7u603n0KPx_3tTDMc1IDuKA">
         </img>
       </div>
     </div>

     <div class="column">
       <div class="card">
         <h3>Tourism</h3>
         <p> www.irctc.tourism.org</p>
          <p>Rules and Regulations</p>
         <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-FpnHbyfumkNHuvBds6IPrTr85ECVpNTx5ACEwWHQCYY385z8GQ"></img>
       </div>
     </div>





   </div>

         );
       }
     }
     export default Cardcomp;
