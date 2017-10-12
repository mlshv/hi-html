import React from 'react';
import styled from 'styled-components';
import Highlight from './Highlight';

const SnippetStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  background: #fff9af;
`;

const HighlightWrapper = styled.div`
  flex-basis: 100%;
  width: 100%;
  @media screen and (min-width: 48rem) {
    flex-basis: 50%;
    width: 50%;
  }
`;

const ResultView = styled.div`
  flex-basis: 100%;
  box-sizing: border-box;
  padding: 0.5rem;
  @media screen and (min-width: 48rem) {
    flex-basis: 50%;
    padding-left: 1rem;
  }
`;

class Snippet extends React.Component {
  constructor(props) {
    super(props);
    console.log();
  }

  state = {
    code: this.props.code
  };

  handleChange = code => {
    return new Promise(resolve => {
      this.setState({ code }, resolve);
    });
  };

  render() {
    return (
      <SnippetStyled>
        <HighlightWrapper>
          <Highlight code={this.state.code} onChange={this.handleChange} />
        </HighlightWrapper>
        <ResultView dangerouslySetInnerHTML={{ __html: this.state.code }} />
      </SnippetStyled>
    );
  }
}

export default Snippet;
