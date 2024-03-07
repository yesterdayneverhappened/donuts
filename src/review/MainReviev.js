import React, { Component } from 'react'
import Header from './HeaderRewiev'
import Review from './Review'

class MainReviev extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Review/>
      </div>
    )
  }
}
export default MainReviev;