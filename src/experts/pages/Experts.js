import React from 'react'

import ExpertsList from '../components/ExpertsList'

const Experts = () => {
    const EXPERTS = [
        {
            id:'expert1',
            expertName: 'Bob the Builder',
            profession: 'Builder',
            experience: '5 YEARS BUILDINNG',
            rating: 10
        }
    ]   
    
    return <ExpertsList items={EXPERTS}/>
   
}

export default Experts