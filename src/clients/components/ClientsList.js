import React from "react";

import './ClientsList.css'

import ClientItem from './ClientItem'

const ClientsList = props => {
    if (props.items.lenght === 0 ) {
        return (
            <div className="center">
                <h2> No Client Found </h2>
            </div>
        )
    }

    return (
        <ul>
            {props.items.map(client=> (
                <ClientItem
                    key={client.id}
                    id={client.id}
                    name={client.name}
                    request={client.request}
                    requestsSolved={client.requestsSolved}
                />
            ))}
        </ul>
    )
}

export default ClientsList