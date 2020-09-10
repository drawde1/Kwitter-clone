import React from 'react'

const Button = (props) => {

  return(
    <div>
      <button onClick={props.action}>{props.buttonIcon}</button>
    </div>
  )
}

export default Button