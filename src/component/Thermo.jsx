import React, { Component } from 'react'

export default class Thermo extends Component {
  render() {
    return (
      <div>
        <div className='thermo-main' onChange={this.props.changeLiquide}>
          <div className='thermoLiquide' style={this.style}>
            <span>{this.props.temp} C</span>
          </div>
        </div>
      </div>
    )
  }
}
