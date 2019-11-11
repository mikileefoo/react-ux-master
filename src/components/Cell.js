import React from 'react'

const Cell = props => (
    <div>
        <img src={props.image} />
        <div>{props.title}</div>
        <audio src={props.audio} controls />
    </div>
)

export default Cell