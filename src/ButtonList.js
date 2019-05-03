import React, { Component } from 'react'
import './ButtonList.css'

class ButtonList extends Component {
  static defaultProps = {
    colors: ['#e056fd', '#eb4d4b', '#badc58', '#f0932b']
  }

  constructor(props) {
    super(props)
    this.state = { color: 'cyan' }
  }

  changeColor(newColor) {
    this.setState({ color: newColor })
  }

  render() {
    return (
      <div className='ButtonList' style={{ background: this.state.color }}>
        {this.props.colors.map(c => {
          const colorObj = { backgroundColor: c }
          return (
            <button style={colorObj} onClick={this.changeColor.bind(this, c)}>
              Click on me!
            </button>
          )
        })}
      </div>
    )
  }
}

export default ButtonList
