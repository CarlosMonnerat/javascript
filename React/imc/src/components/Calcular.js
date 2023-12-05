import React from 'react'

export default function Calcular(props){
    const calc=()=>{
        props.setR(props.p/(props.a*props.a))
    }
    return(
        <div>
            <button onClick={calc}>Calcular</button>
        </div>
    )
}