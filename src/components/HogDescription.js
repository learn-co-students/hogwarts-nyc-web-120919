import React from 'react'

export default function HogDescription(props) {
    return (
        <div>
            <p>Specialty: {props.specialty}</p>
            <p>Weight: {props.weight}</p>
            <p>Highest Medal Achieved: {props.medal}</p>
        </div>
    )
}