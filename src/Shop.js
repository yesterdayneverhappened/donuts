import React, { Component } from 'react'
import Header from './components/Header'
import Items from './Items'
export default class Shop extends Component {
    constructor(props){
        super(props)
        this.state = {
          orders: [],
          items: [
            {
              id:1,
              title: 'the flip flop',
              img: 'image-8.png',
              category: 'donuts',
              prise: '1,49$'
            },
            {
              id:2,
              title: 'beach ball',
              img: 'image 3.png',
              category: 'donuts',
              prise: '1,99$'
            },
            {
              id:3,
              title: 'the beach',
              img: 'image 4.png',
              category: 'donuts',
              prise: '0,99$'
            },
            {
              id:4,
              title: 'diabetes',
              img: 'image 12.png',
              category: 'donuts',
              prise: '1,99$'
            },
            {
              id:5,
              title: 'chief keef',
              img: 'image 6.png',
              category: 'donuts',
              prise: '1,49$'
            },
            {
              id:6,
              title: 'sukk',
              img: 'image 7.png',
              category: 'donuts',
              prise: '1,49$'
            },
          ]
        }
        this.addToOrder = this.addToOrder.bind(this);
        this.removeFromOrder = this.removeFromOrder.bind(this);
    }
    componentDidMount() {
      // Проверяем наличие и корректность данных в localStorage
      const localStorageOrders = localStorage.getItem('orders');
    
      if (localStorageOrders) {
        try {
          // Пытаемся разобрать данные из localStorage
          const savedOrders = JSON.parse(localStorageOrders);
          this.setState({ orders: savedOrders });
        } catch (error) {
          console.error('Error parsing localStorage data:', error);
          // Если разбор данных не удался, можно обработать ошибку по вашему усмотрению
          // Например, можно установить пустой массив в состояние orders
          this.setState({ orders: [] });
        }
      } else {
        // Если в localStorage нет данных, устанавливаем пустой массив в состояние orders
        this.setState({ orders: [] });
      }
    }
    
    removeFromOrder(itemId) {
      const updatedOrders = this.state.orders.filter((item) => item.id !== itemId);
      this.setState({ orders: updatedOrders }, () => {
        localStorage.setItem('orders', JSON.stringify(updatedOrders));
      });
    }
  render() {
    const { orders } = this.state;
    return (
     
      <div>
        <Header orders={orders} onRemove={this.removeFromOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder}/>
      </div>
    )
  }
  addToOrder(item) {
    // Обновляем состояние и сохраняем заказы в localStorage
    this.setState({ orders: [...this.state.orders, item] }, () => {
      localStorage.setItem('orders', JSON.stringify(this.state.orders));
    });
  }
}

