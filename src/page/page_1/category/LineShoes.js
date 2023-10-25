
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

import "./Layout.css"


const LineShoe = () => {
  const LineShoes = [
    {
      LineShoe: 'Nike-air'
    },
    {
      LineShoe: 'Adidas-3 Pro'
    },
    {
      LineShoe: 'Puma-wiken'
    },
    {
      LineShoe: 'Jogarbola-1'
    },
    {
      LineShoe: 'Balenciaga'
    },
    {
      LineShoe: 'Wika-6z'
    },
    {
      LineShoe: 'Zocker'
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
         <span className='directory'>Dòng giày</span>
         <FontAwesomeIcon id='click-icon' onClick={toggleList}  icon={showList ? faMinus : faPlus}/>
         {showList && (
        <ul id='list-tag' className={showList ? 'show' : 'hide'}>
          {LineShoes.map((item, index) => (<li key={index}  style={{
            padding: '10px',
            cursor: 'pointer',
            backgroundColor: hoveredItem === index ? 'lightgray' : 'transparent',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={() => setHoveredItem(index)}
          onMouseLeave={() => setHoveredItem(null)}>{item.LineShoe}</li>))}
        </ul>
      )} 
         
      </div>
    </div>
  );
}

export default LineShoe;
