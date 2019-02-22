import React from 'react'
import marked from 'marked'

class MarkdownOutput extends React.Component {
  createMarkUp(a) {
    return {__html: a};
  }
  render() {
    return (
      <div
        dangerouslySetInnerHTML = {this.createMarkUp(marked(this.props.userInput))}
        />
    )
  }
}

export default MarkdownOutput