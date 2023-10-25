
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

import "./Layout.css"


const Size = () => {
  const Sizes = [
    {
      Size: '39'
    },
    {
      Size: '40'
    },
    {
      Size: '41 '
    },
    {
      Size: '42'
    },
  ];


  const [showList, setShowList] = useState(true);

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
          {Sizes.map((item, index) => (<li key={index}>{item.Size}</li>))}
        </ul>
      )} 
         
      </div>
    </div>
  );
}

export default Size;
