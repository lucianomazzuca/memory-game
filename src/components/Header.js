import React from 'react'
import Score from './Score'

function Header(props) {
    return (
        <div className="header">
            Memory Game

            <Score score={props.score} bestScore={props.bestScore}/>
        </div>
    )
}

export default Header
