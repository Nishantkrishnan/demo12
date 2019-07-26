import React from 'react';
import './index.css';


class TrainInfo extends React.Component{
  render(){
    return(
      <div class="bl">
      <div class="card">
      <img src={this.props.brand.img} />
      <p> Railway region:{this.props.brand.head}</p>
      <h5>{this.props.brand.subhead}</h5>
      </div>
      </div>
    );
  }
}
export default TrainInfo;
