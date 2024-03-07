import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
     
      <header>
        <div className="header2">
          <div className="header-left">
              <div className="logo"></div>
          </div>
          
          <div className="header-right">
              <a className="active" href="/">Home</a>
              <a href="/shop">Menu</a>
              <a href="/review">About</a>
          </div>
        </div>      
      </header>
      
    )
  }
}
