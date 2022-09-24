import React from "react";

import './ExpertsList.css'

import ExpertItem from "./ExpertItem.js";

const ExpertsList = props => {
    if (props.items.length === 0 ) {
        return (
            <div className="center">
                    <h2> No Expert Found </h2>
            </div>
        )
    }

    return (
        <ul>
            {props.items.map(expert=>(
                <ExpertItem
                    key={expert.id}
                    id={expert.id}
                    expertName={expert.expertName}
                    profession={expert.profession}
                    experience={expert.experience}
                    rating={expert.rating}
                />
            ))}
        </ul>
    )
}

export default ExpertsList