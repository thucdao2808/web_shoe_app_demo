import React from 'react'
import QuestionNormal from './GuideClient/QuestionNormal'
import TotalFooter from '../../components/TotalFooter'
import TotalHeader from '../../components/TotalHeader'
const MainQuestionNormal = () => {
    return (
        <div>
            <TotalHeader/>
            <QuestionNormal/>
            <TotalFooter/>
        </div>
    )
}

export default MainQuestionNormal