import React, { Component } from 'react'

export default class SelectZone extends Component {
    constructor(){
        super();
    }
 
    render() {
        return (
            <div className='selectZone' id={this.props.nomSelect} onChange={this.props.onComponentChange}>
                <input value={this.props.inputVal} type="number" placeholder='Saisissez la temperature' onInput={this.props.inputChange}/>

                <select >
                    <option value='c' selected={(this.props.defaultUnit=='c') ? true:false}>C</option>
                    <option value='f' selected={(this.props.defaultUnit=='f') ? true:false}>F</option>
                    <option value='k' selected={(this.props.defaultUnit=='k') ? true:false}>K</option>
                </select>
            </div>
        )
  }
}
