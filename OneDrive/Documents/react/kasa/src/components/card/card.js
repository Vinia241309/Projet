import React from 'react';

function Card({ cover, title, }) {
    console.log(cover)
    return (
        <div className="card">
            <img src={cover} alt={title} />
            <h3>{title}</h3>

        </div>
    );
}

export default Card;