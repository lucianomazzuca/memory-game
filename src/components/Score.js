import React from 'react'

function Score(props) {
    return (
        <div className="score">
            <div>
                Score: {props.score}
            </div>
            <div>
                Best Score: {props.bestScore}
            </div>
        </div>
    )
}

export default Score
