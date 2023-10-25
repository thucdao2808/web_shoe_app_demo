
import React from 'react'
import './Layout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Datas } from '../../data-all';
 function ToogleSearch ({Datas}) {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        
            <div>
                <div class="input-container">
                     <input className="input" placeholder="search..." onChange={(e) => setSearchQuery(e.target.value)}/>
                     <span class="-search"> 
                          <Link to={`/btn-result/${searchQuery}`} >
                              <FontAwesomeIcon icon={faSearch} />
                         </Link>
                    </span>
               </div>
            </div>
    )
}

export default ToogleSearch