import React from 'react';
import './Layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function ShoppingCart() {
  return (
    <div className='cart'>
      <Link to='/delivery'> <FontAwesomeIcon icon={faShoppingCart}  className='icon-cart'></FontAwesomeIcon></Link>
    </div>
  );
}
;