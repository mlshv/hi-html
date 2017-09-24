import React from 'react';
import ReactHighlight from 'react-highlight';
import styled from 'styled-components';
import 'highlight.js/styles/atom-one-dark.css';

const EditorContainer = styled.div`
  position: relative;
  height: 100%;

  /* react-highlight container */
  pre {
    height: 100%;
    margin: 0;
    white-space: pre-line;
  }

  .hljs {
    height: 100%;
    font-size: 1rem;
    box-sizing: border-box;
  }
`;

const Editor = styled.textarea`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-top: 0;
  margin-left: -1px;
  padding: 0.5em;
  overflow-x: auto;
  font-size: 1rem;
  font-family: monospace, monospace;
  resize: none;
  outline: none;
  border: none;
  color: transparent;
  caret-color: #abb2bf;
  background: transparent;
`;

class Highlight extends React.Component {
  render() {
    return (
      <EditorContainer>
        <ReactHighlight className="html">
          {this.props.code + '\n'}
        </ReactHighlight>
        <Editor
          value={this.props.code}
          onChange={this.props.onChange}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </EditorContainer>
    );
  }
}

export default Highlight;