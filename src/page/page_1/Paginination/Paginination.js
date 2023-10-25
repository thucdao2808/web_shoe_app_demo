import React from 'react'
import './Layout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'; 
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
const Pagination = () => {
 
    return (
        <div className='pagination'>
           <span><a className='click-pagination' href='#none' ><button className='button-click-pagination' style={{color:'yellow'}}>1</button></a></span>
           <span><a className='click-pagination' href='#none' ><button className='button-click-pagination'>2</button></a></span>
           <span><a className='click-pagination' href='#none' ><button className='button-click-pagination'>3</button></a></span>
           <span><a className='click-pagination' href='#none' ><button className='button-click-pagination'>4</button></a></span>
           <span><a className='click-pagination' href='#none' ><button className='button-click-pagination'><FontAwesomeIcon icon={faAngleRight} />
</button></a></span>
           <span><a className='click-pagination' href='#none' ><button className='button-click-pagination'><FontAwesomeIcon icon={faAngleDoubleRight} /></button></a></span>
        </div>
    )
}

export default Pagination