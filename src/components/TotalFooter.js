import React from 'react'

import Communication from './footer/Communication'
import ShowRoom from './footer/ShowRoom'
import EmailRearch from './footer/EmailRearch'
import Link from './footer/Link'
const TotalFooter = () => {
    return (
        <div>
          
            <Communication></Communication>
            <div className='footer-content-end'>
                <ShowRoom></ShowRoom>
                <EmailRearch></EmailRearch>
                <Link></Link>
             </div> 
            
        </div>
    )
}

export default TotalFooter