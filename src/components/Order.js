import React, { Component } from 'react'
import Shop from '../Shop';
export class Order extends Component {
  
  render() {
    const { item, onRemove } = this.props;
    return (
      <div className='item'>
        <img src={"./image2/" + this.props.item.img}/>
        <h2>{this.props.item.title}</h2> 
        <b>{this.props.item.prise}</b>
        <button className='remove' onClick={() => onRemove(item.id)}>—</button>
      </div>
    )
  }
}

export default Order