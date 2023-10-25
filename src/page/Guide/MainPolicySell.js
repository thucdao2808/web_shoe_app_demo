import React from 'react'
import PolicySell from './GuideClient/PolicySell'
import TotalFooter from '../../components/TotalFooter'
import TotalHeader from '../../components/TotalHeader'
const MainPolicySell = () => {
    return (
        <div>
            <TotalHeader/>
            <PolicySell/>
            <TotalFooter/>
        </div>
    )
}

export default MainPolicySell