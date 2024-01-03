import React from 'react'

export default class Peso extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
        <div>
          <label>
            Altura
            <input type='text' value={this.props.a} onChange={(e)=>{this.props.setA(e.target.value)}}/>
          </label>
        </div>
    )
  }
}