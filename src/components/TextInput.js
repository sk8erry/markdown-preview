import React from 'react'

class TextInput extends React.Component {
  render() {
    return(
      <textarea
        name="input"
        cols="30"
        rows="5"
        value={this.props.value}
        onChange={this.props.handleInput}
        className="box left">
        {this.props.placeholder}
      </textarea>

    )
  }
}

export default TextInput