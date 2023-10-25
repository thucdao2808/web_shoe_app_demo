import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight} from '@fortawesome/free-solid-svg-icons';
import './Layout.css'
const PageFirst = () => {
    return (
        <div className='PageFirst'>
            <h1 className='page-first'><span className='auto-avaiable'>Trang chủ </span><FontAwesomeIcon icon={faCaretRight}/>Shop</h1>            
        </div>
    )
}

export default PageFirst