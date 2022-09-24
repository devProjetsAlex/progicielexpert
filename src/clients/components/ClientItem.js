import React from "react";

import './ClientItem.css'

const ClientItem = props => {
    return (
        <li className="user-item">
            <div className="user-item__content">
                <div className="user-item__info">
                        <h2> {props.name} </h2>
                        <h3> {props.request} </h3>
                        <small> {props.requestsSolved}</small>
                </div>
            </div>
        </li>
    )
}

export default ClientItem