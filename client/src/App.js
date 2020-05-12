import React from 'react';
import './App.css';
import logo from './spacex.png';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Launches from './components/Launches';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='container'>
        <img src={logo} alt="SpaceX" style={{width:'400px', height:'150px', display:'block', margin:'auto'}} />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
