import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header/index";
import './App.css';
//Amplify
import amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
//Pages
import Home from "./pages/Home";

amplify.configure(aws_exports);


function App() {
  return (
    <AmplifyAuthenticator>
    <Router>
    <Header />
    <Route exact path="/" component={Home} />
    </Router>
      <AmplifySignOut />
    </AmplifyAuthenticator>
  );
}

export default App;
