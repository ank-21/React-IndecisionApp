import React from 'react'

const Action = (props) => (
    <div>
        <button
        className="big-button"
         onClick={props.handlePick}
         disabled={!props.hasOptions}
         >What should i do?</button>
    </div>
)
//in all const func we just return something so can use short hand sybntax

export default Action