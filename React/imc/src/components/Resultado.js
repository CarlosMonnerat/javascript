import React from 'react'

export default function Resultado(props){
    return(
        <div>
          <p>Resultado: {props.r.toFixed(1)}</p>
        </div>
    )
}