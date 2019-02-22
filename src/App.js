import React, { Component } from 'react';
import TextInput from './components/TextInput'
import MarkdownOutput from './components/MarkdownOutput'
import './App.css';
const placeholder = `## A minimalist Markdown preview built with React <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="react-logo" width="50"/>
----
### What is Markdown?
see [Wikipedia](http://en.wikipedia.org/wiki/Markdown)

> Markdown is a lightweight markup language, originally created by John Gruber and Aaron Swartz allowing people "to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML)".

----
### usage
1. Write markdown text in this textarea.
2. Live preview on the right side

----
### Markdown quick reference
# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

*emphasis*

**strong**

* list

>block quote

    code (4 spaces indent)
[links](http://wikipedia.org)`

class App extends Component {
  state = {
    userInput: placeholder
  }

  handleInput = (e) => {
    this.setState({
      userInput: e.target.value
    })
    console.log(this.state.placeHolder)
    console.log(placeholder)
  }

  render() {
    return (
      <div className="wrapper">
        <div className="info">
          <span>Made by <a href="https://rickyyang.moe/">Ricky Yang</a></span><br/>
          <span>Powered by <a href="https://github.com/markedjs/marked">Marked</a></span><br/>
          <span><a href="https://github.com/sk8erry/markdown-preview">Github repo</a></span>
        </div>
        <div className="container-fluid">
          <div className="content">
            <div>
              <header className="header">
              </header>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="text-input-wrapper">
                  <TextInput handleInput={this.handleInput} placeholder={this.state.userInput}/>
                </div>
              </div>
              <div className="col-6">
                <div className="markdown-preview-wrapper">
                  <MarkdownOutput userInput={this.state.userInput} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
