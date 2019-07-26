import React from "react";
import './index.css';
import  TrainInfo from '../TrainInfo';
  // stae component

     class Cardcomp extends React.Component{

       render()     {
         const info={head:"Northen Railway",subhead:"WEL COME",img:"/Assets/images/card2.jpeg"};
         const info2={head:"Southern Railway",subhead:"Train Timings",img:"/Assets/images/card3.jpeg"};
         const info3={head:"Tourism",subhead:"Travel the world",img:"/Assets/images/card2.jpeg"};


         return(
 <div class= "container"><div class="row">
        <div class="col-md-4">
      <TrainInfo brand={info} />
         </div>
         <div class="col-md-4">
       <TrainInfo brand={info2} />
          </div>
          <div class="col-md-4">
        <TrainInfo brand={info3} />
           </div>


</div>
        </div>





         );

       }

     }

     export default Cardcomp;
