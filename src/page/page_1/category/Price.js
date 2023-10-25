
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

import "./Layout.css"


const Price = () => {
  
  const [showList, setShowList] = useState(true);

  const toggleList = () => {
    setShowList(!showList);
    console.log(showList)
  };
  // const [sliderValue, setSliderValue] = useState(50); // Giá trị của thanh trượt
  // const [min, setMin] = useState(0);                 // Giới hạn tối thiểu
  // const [max, setMax] = useState(100);               // Giới hạn tối đa

  // const handleSliderChange = (event) => {
  //   const value = parseInt(event.target.value, 10);
  //   setSliderValue(value);
  //   console.log(handleSliderChange)
  // };
  
  return (
    <div>
     <div className='string-selection'>
         <span className='directory'>Giá cả</span>
         <FontAwesomeIcon id='click-icon' onClick={toggleList}  icon={showList ? faMinus : faPlus}/>
         {showList && (
        <ul id='price-tag' className={showList ? 'show' : 'hide'}>
           <div className='range-mount'>
              <input 
                   
                    min='1'
                    max='100' type='range' ></input>
           </div>
          {/* {Colors.map((item, index) => (<span key={index}>{item..Color}</span>))} */}
        </ul>
      )} 
         
         
      </div>
    </div>
  );
}

export default Price;
