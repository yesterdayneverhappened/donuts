import React, { useState } from 'react';
import './index.css'; // Подключаем ваши стили
import { Link } from 'react-router-dom';
import bootstrap from 'bootstrap';

const ImageChanger = () => {
  const [backgroundImage, setBackgroundImage] = useState('url(/image2/layer2.jpg)');
  const [activeButton, setActiveButton] = useState(null);

  const changeBackgroundImage = (newImage, newColor, buttonId) => {
    setBackgroundImage(`url(/image2/${newImage})`);
    if (activeButton) {
      document.getElementById(activeButton).style.backgroundColor = '#4d0407'; // Возвращаем прежний цвет предыдущей активной кнопке
    }

    setActiveButton(buttonId);
    document.getElementById(buttonId).style.backgroundColor = newColor; // Устанавливаем новый цвет текущей кнопке
  };

  return (
    <div className="new">
          <div className="container px-4 text-center" style={{ marginTop: '50px'}}>
            <div className="row gx-5">
      <div className="col">
        <div className='p-3'>
          <div className="layer" id="layer" style={{ backgroundImage }}></div>
        </div>
      </div>
      <div className='col'>
        <div className="p-3">
          <h1 style={{ fontSize: '60px', margin: '0'}}>new DONUTS</h1>
          <p style={{ fontSize: '19px', margin: '0'}}>You can make your ouwn donut</p>
          <p style={{ fontSize: '12px', margin: '0',color: '#d6d6d6'}}>in the new chocolade donuts you can choose the level of its coverage</p>
          <div className="buttons">
            <button id="button1" className="new_but" style={{ backgroundColor: "new_but" }} onClick={() => changeBackgroundImage('layer.png', '#3787A0', 'button1')}></button>
            <button id="button2" className="new_but" style={{ backgroundColor: "new_but" }} onClick={() => changeBackgroundImage('layer2.jpg', '#3787A0', 'button2')}></button>
            <button id="button3" className="new_but" style={{ backgroundColor: "new_but" }} onClick={() => changeBackgroundImage('layer3.jpg', '#3787A0', 'button3')}></button>
          </div>
          <button className="new_but2"><Link to = "/shop">Make an ORDER</Link></button>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default ImageChanger;
