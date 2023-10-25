
import React, { useState, useEffect } from 'react';
import './Layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Scroll = () => {
  const [show, setShow] = useState(false);
//  const handleClick =()=>{
//       if(window.scrollY >=540){
//         window.scrollY=0
//       }
//  }
  const handleScroll = () => {
    if (window.scrollY >=540) {
      setShow(true);
    } else {
      setShow(false);
    }
    console.log(window.scrollY); // Độ cuộn của trang
  };

  useEffect(() => {
    const scrollListener = () => {
      handleScroll();
    };

    window.addEventListener("scroll", scrollListener);

    // Clearup function sử dụng để tránh bị tràn bộ nhớ
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []); // Mảng trống để chỉ gọi một lần
 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Để có hiệu ứng cuộn mượt
    });
  };
  return (
    <div>
      {show && (
        <button className='scroll' style={{position:'fixed' , right:20,bottom:20}} onClick={scrollToTop}>
          <FontAwesomeIcon icon={faAngleUp} />
        </button>
      )}
    </div>
  );
};

export default Scroll;
