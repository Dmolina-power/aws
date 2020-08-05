import React from 'react';
import logo from './logo.svg';
import './App.css';
import amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
amplify.configure(aws_exports);

function App() {
  return (
    <AmplifyAuthenticator>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <AmplifySignOut />
    </div>
    </AmplifyAuthenticator>
  );
}

export default App;
