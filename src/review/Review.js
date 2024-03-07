import { Button } from 'bootstrap'
import React, { Component, useState,useEffect } from 'react'
import Funk from './Funk'
import Header from './HeaderRewiev'

export default class Review extends Component {
    
  render() {
    const sendReview = (reviewText) => {
        // Ваша логика отправки отзыва
        console.log(`Review sent: ${reviewText}`);
      };
    return (
      <div className='rewiev_str' style={{position:"relative"}}>
        <h1 style={{color: 'white'}}>you can leave a review about this site</h1>
        <Funk onSendReview={sendReview}/>
      </div>
    )
  }
}
