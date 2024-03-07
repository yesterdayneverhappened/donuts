import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"/image2/" + this.props.item.img}/>
        <h2>{this.props.item.title}</h2> 
        <b>{this.props.item.prise}</b> 
        <div className='add-to' onClick={() => this.props.onAdd(this.props.item) }>+</div>
      </div>
    )
  }
}

export default Item