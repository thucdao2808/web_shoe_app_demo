
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

import "./Layout.css"


const TradeMark = () => {
  const TradeMarks = [
    {
      TradeMark: 'Nike'
    },
    {
      TradeMark: 'Adidas'
    },
    {
      TradeMark: 'Puma '
    },
    {
      TradeMark: 'Mizuno'
    },
    {
      TradeMark: 'Jogarbola'
    },
    {
      TradeMark: 'Kamito'
    },
    {
      TradeMark: 'Wika'
    },
  ];


  const [showList, setShowList] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);
  const toggleList = () => {
    setShowList(!showList);
    console.log(showList)
  };
  
  return (
    <div>
     <div className='string-selection'>
         <span className='directory'>Thương hiệu</span>
         <FontAwesomeIcon id='click-icon' onClick={toggleList}  icon={showList ? faMinus : faPlus}/>
         {showList && (
        <ul id='list-tag' className={showList ? 'show' : 'hide'}>
          {TradeMarks.map((item, index) => (<li key={index}  style={{
            padding: '10px',
            cursor: 'pointer',
            backgroundColor: hoveredItem === index ? 'lightgray' : 'transparent',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={() => setHoveredItem(index)}
          onMouseLeave={() => setHoveredItem(null)}>{item.TradeMark}</li>))}
        </ul>
      )} 
         
      </div>
    </div>
  );
}

export default TradeMark;
