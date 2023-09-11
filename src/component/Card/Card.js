import React from 'react'

import "./Card.css"
import { NavLink } from 'react-router-dom'

function Card(props) {
    return (
        <NavLink to={`/single/${props.id}`}>
            <div className='card'>
                <h2>{props.name}</h2>
                <h3>{props.dep}</h3>
                <h4>{props.year}</h4>
            </div>
        </NavLink>
  )
}

export default Card