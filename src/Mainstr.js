import React, { Component, useState } from 'react'
import bootstrap from 'bootstrap'
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import "./image/image simpson.png"
import ImageChanger from './Layer';
import backgroundImage from './Layer';

export default class main extends Component {
    
  render() {
    
    return (
      <div>
         <div className="header">
      
          <div className="header-left">
            <div className="logo"></div>
          </div>
          <div className="header-right">
            <a className="active" href="/">Home</a>
            <a href="/shop">Menu</a>
            <a href="/review">About</a>
          </div>
          <div className="mom">
            <p className="mom_text1">Donuts are juicier</p> 
            <p className="mom_text2">than your mom</p>
          </div>
          <button className="mom_but"><Link to = "/shop">MAKE AN ORDER</Link></button>
        </div>
        <div className="fon"></div>

      <div className="body">
        <p className="all">ALL DONUTS</p>
        <div className="container px-4 text-center" style={{ paddingTop: '130px'}}>
        <div className="row gx-5"> 
            <div className="col">
            <div className="p-3"><img src="/image2/image-8.png" width="300px"/></div>
            <div className="p-3">shalapin</div>
            </div>
            <div className="col">
              <div className="p-3"><img src="/image2/image 3.png" width="300px"></img></div>
              <div className="p-3">beach ball</div>
            </div>
            <div className="col">
              <div className="p-3"><img src="/image2/image 5.png" width="300px"></img></div>
              <div className="p-3">plug</div>
            </div>
          </div>
          <div className="row gx-5">
            <div className="col">
            <div className="p-3"><img src="/image2/image 12.png" width="300px"/></div>
            <div className="p-3">diabetes</div>
            </div>
            <div className="col">
              <div className="p-3"><img src="/image2/image 6.png" width="300px"></img></div>
              <div className="p-3">chief keef</div>
            </div>
            <div className="col">
              <div className="p-3"><img src="/image2/image 7.png" width="300px"></img></div>
              <div className="p-3">SUKK</div>
            </div>
          </div>
        </div>
        
        <ImageChanger/>
                  
        <div className="box">
          <p className="all">DONUTS BOX</p>
          <div className="container px-4 text-center" style={{ paddingTop: '120px'}}>
            <div className="row gx-5">
              <div className="col">
              
              <div className="p-3"><div className="box1"><div className="info" id="info">• Apple Cobbler - Cinnamon Sugar with Streusel & Apple<br></br>

                • Blueberry Crumble - Blueberry Icing with Streusel & Vanilla Drizzle<br></br>
                
                • Glazed<br></br>
                
                • Coconut Cream Pie - Vanilla Icing with Shredded Coconut<br></br>
                
                • Caramel Apple Pie - Vanilla Icing with Apple, Streusel & Salted Caramel<br></br>
                
                • French Silk Pie - Chocolate Icing with Vanilla Drizzle & Chocolate Sprinkles<br></br>
                
                • Apple Tart - Glazed with <br></br>
                Apple
                
                • Pumpkin Roll - Pumpkin Icing with Vanilla Drizzle<br></br>
                
                • Pumpkin Coffee Cake - Pumpkin Icing with Streusel & Powdered Sugar<br></br>
                
                • Raspberry Tart - Vanilla Icing with Raspberry Drizzle & Streusel• Cinnamon Sugar</div></div></div>
              <div className="p-3" style={{ paddingTop: '0', margin: '0', fontSize: '35px'}}>spooky box assortiment</div>
              </div>
              <div className="col">
                <div className="p-3"><div className="box2"><div className="info" id="info">• Apple Cobbler - Cinnamon Sugar with Streusel & Apple<br></br>

                  • Blueberry Crumble - Blueberry Icing with Streusel & Vanilla Drizzle<br></br>
                  
                  • Glazed<br></br>
                  
                  • Coconut Cream Pie - Vanilla Icing with Shredded Coconut<br></br>
                  
                  • Caramel Apple Pie - Vanilla Icing with Apple, Streusel & Salted Caramel<br></br>
                  
                  • French Silk Pie - Chocolate Icing with Vanilla Drizzle & Chocolate Sprinkles<br></br>
                  
                  • Apple Tart - Glazed with <br></br>
                  Apple
                  
                  • Pumpkin Roll - Pumpkin Icing with Vanilla Drizzle<br></br>
                  
                  • Pumpkin Coffee Cake - Pumpkin Icing with Streusel & Powdered Sugar<br></br>
                  
                  • Raspberry Tart - Vanilla Icing with Raspberry Drizzle & Streusel• Cinnamon Sugar</div></div></div>
                <div className="p-3" style={{ paddingTop: '0', margin: '0', fontSize: '35px'}}>sweet as pie box</div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
    )
  }
}
