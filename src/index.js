import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Reset } from 'styled-reset';

import { ApolloProvider } from '@apollo/react-hooks';
import client from './apollo';

ReactDOM.render(
  <React.Fragment>
    <Reset />
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.Fragment>,
  document.getElementById('root')
);
