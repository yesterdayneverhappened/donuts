import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./Items";
import bootstrap from 'bootstrap'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../src/Mainstr'
import Shop from "./Shop";
import Modal from "./modal";
import Review from "./review/MainReviev";
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [
        {id:1,
          title: 'the flip flop',
          img: '/image/image-8.png',
          category: 'donuts',
          prise: '1,49'},
      ],
      items: [
        {
          id:1,
          title: 'the flip flop',
          img: '/image2/image-8.png',
          category: 'donuts',
          prise: '1,49'
        },
        {
          id:2,
          title: 'beach ball',
          img: '/image2/image3.png',
          category: 'donuts',
          prise: '1,99'
        },
        {
          id:3,
          title: 'the beach',
          img: '/image2/image4.png',
          category: 'donuts',
          prise: '0,99'
        },
        {
          id:4,
          title: 'diabetes',
          img: '/image2/image12.png',
          category: 'donuts',
          prise: '1,99'
        },
        {
          id:5,
          title: 'chief keef',
          img: '/image2/image6.png',
          category: 'donuts',
          prise: '1,49'
        },
        {
          id:6,
          title: 'sukk',
          img: '/image2/image7.png',
          category: 'donuts',
          prise: '1,49'
        },
        {
          id:7,
          title: 'spooky box',
          img: '/image2/box1.png',
          category: 'box',
          prise: '1,49'
        },
        {
          id:8,
          title: 'sweet as pie box',
          img: '/image2/box2.png',
          category: 'box',
          prise: '1,49'
        },
      ]
      
    }
    ///this.addToOrder = this.addToOrder.bind(this)
    this.addToOrder = (orders) => {
      this.setState((state) => ({
        orders: state.orders.contact([orders])
      }))
    }
    
  }
  
  render() {
    const { orders } = this.state;
    const { items } = this.state;
    // index.js
    return (
      <div className="wrapper">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/shop" element={<Shop/>}/>
            <Route exact path="/review" element={<Review/>}/>
          </Routes> 
        </Router>
        <Footer/>
        
      </div>
    );
  }
  
}

export default App;
