import React from 'react'

function Card(props) {
    const caracter = props.caracter
    const status = () => {
        if(caracter.clicked) {
            return 'Clicked'
        }
    }

    return (
        <div className='card' onClick={(e) => props.handleClick(e)}>

            <img src={caracter.image} alt="" srcset=""/>

            <div className="card-info">
                <span>{caracter.name}</span>
                <h3>{status()}</h3>
            </div>
        </div>
    )
}

export default Card