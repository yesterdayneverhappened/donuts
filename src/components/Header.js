import React, { useState, useEffect } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';
import items from '../App';
import orders from '../App';
import Modal from '../modal';
export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  

  const removeFromCart = (itemId) => {
    // Вызовите функцию onRemove, чтобы удалить товар из корзины
    props.onRemove(itemId);
  };
  return (
    <header>
       <div className="header2">
          <div className="header-left">
              <div className="logo"></div>
          </div>
          
          <div className="header-right">
              <FaShoppingCart onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={`shop-buds ${cartOpen && 'active'}`}/>
              <a className="active" href="/">Home</a>
              <a href="/shop">Menu</a>
              <a href="/review">About</a>
              
              {cartOpen && (
                <div className='shop-cart'>
                  {props.orders.map(el => (
                    <Order key={el.id} item={el} onRemove={props.onRemove}/>
                    
                  ))}
                  <button className='order' >Make a order</button>
                  
                </div>
              )}
    
          
          </div>
        </div>
                     
    </header>
  )

}

