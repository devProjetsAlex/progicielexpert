import React from 'react'

import ClientsList from '../components/ClientsList'

const Clients = () => {
    const CLIENTS = [
    {
        id:'Client1',
        name: 'Alex',
        request: 'Création de produit',
        requestsSolved: 5
    }
    ]

    return <ClientsList items={CLIENTS}/> 
}


export default Clients