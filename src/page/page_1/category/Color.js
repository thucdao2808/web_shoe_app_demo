
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

import "./Layout.css"


const Color = () => {
  

  const [showList, setShowList] = useState(true);

  const toggleList = () => {
    setShowList(!showList);
    console.log(showList)
  };
  
  return (
    <div>
     <div className='string-selection'>
         <span className='directory'>Màu sắc</span>
         <FontAwesomeIcon id='click-icon' onClick={toggleList}  icon={showList ? faMinus : faPlus}/>
         {showList && (
        <ul id='Color-tag' className={showList ? 'show' : 'hide'}>
           <div className='Color-select-1'></div>
           <div className='Color-select-2'></div>
           <div className='Color-select-3'></div>
           <div className='Color-select-4'></div>
           <div className='Color-select-5'></div>
           <div className='Color-select-6'></div>
           <div className='Color-select-7'></div>
           <div className='Color-select-8'></div>
          {/* {Colors.map((item, index) => (<span key={index}>{item..Color}</span>))} */}
        </ul>
      )} 
         
      </div>
    </div>
  );
}

export default Color;
