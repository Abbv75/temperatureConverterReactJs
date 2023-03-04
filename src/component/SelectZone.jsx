import React, { Component } from 'react'

export default class SelectZone extends Component {
  render() {
    return (
        <div className='selectZone' id={this.props.nomSelect}>
        <input value={input2} type="number" placeholder='Saisissez la temperature' onChange={changeInput2}/>

        <select >
          <option value='f'>F</option>
          <option value='c'>C</option>
          <option value='k'>K</option>
        </select>
      </div>
    )
  }
}
