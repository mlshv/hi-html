import React from 'react';
import Snippet from './Snippet';
import styled from 'styled-components';
import 'normalize.css';
import snippets from './snippets.js';

const App = styled.article`
  padding: 0.5rem;
  @media screen and (min-width: 36rem) {
    padding: 1rem;
  }
`;

const Description = styled.p`margin-bottom: 0.5rem;`;

export default () => (
  <App>
    <h1>Hi HTML</h1>
    <h2>Интерактивные HTML сниппеты</h2>

    {snippets.map((snippet, i) => (
      <div key={i}>
        <Description>{snippet.description}</Description>
        <Snippet code={snippet.code} />
      </div>
    ))}
  </App>
);
