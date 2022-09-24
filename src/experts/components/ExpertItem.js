import React from 'react'

import './ExpertItem.css'

const ExpertItem = props => {
    return (
        <li className="user-item">
        <div className="user-item__content">
            <div className="user-item__info">
                    <h2> {props.expertName} </h2>
                    <h3> {props.profession} </h3>
                    <h3> {props.experience}</h3>
                    <small> {props.rating}</small>
            </div>
        </div>
    </li>
    )
}

export default ExpertItem