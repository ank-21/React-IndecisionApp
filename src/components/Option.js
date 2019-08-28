import React from 'react'

const Option = (props)=> (
    <div class="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <button 
            className="button button--link"
            onClick= {(e) => {
                props.handleDeleteOption(props.optionText)
            }}
        >
            Remove
        </button>
    </div>
)

export default Option 
//in this way we can see option name with each option where a in using 
// we see option as anonymus or undefined in developer tools