import React, { Component } from 'react'

export default class modal extends Component {
  render() {
    return (
      <div className={"modal"}>
        <div className='modal_wrapper'>
          <div className='modal_content' onClick={e=>e.stopPropagation()}>
            <button className='close_modal'></button>
          </div>
        </div>
      </div>
    )
  }
}
