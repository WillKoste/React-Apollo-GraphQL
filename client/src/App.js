import React from 'react';
import './App.css';
import logo from './spacex.png';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch';

const client = new ApolloClient({
  uri: '/graphql'
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='container'>
          <img src={logo} alt="SpaceX" style={{width:'400px', height:'150px', display:'block', margin:'auto'}} />
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
