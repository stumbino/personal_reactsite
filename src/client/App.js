import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import Layout from './components/layout';
import {createBrowserHistory} from 'history';
import { Router, Route} from "react-router-dom";
import Index from './components/index';
import About from './components/about';
import Blog from './components/blog';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import "./styles/styles.scss";
export const history = createBrowserHistory();
export default class App extends Component {
  state = { username: null };

  // componentDidMount() {
  //   fetch('/api/getUsername')
  //     .then(res => res.json())
  //     .then(user => this.setState({ username: user.username }));
  // }

  render() {
    const { username } = this.state;
    return (
      <div>
          <Router history={history}>
              <Layout>
                <Route path= "/" exact component={Index} />
                <Route path = "/about" exact component={About} />
                <Route path = "/blog" exact component={Blog} />
                <Route path = "/portfolio" exact component={Portfolio} />
                <Route path = "/contact" exact component={Contact} />
              </Layout>
          </Router>
      </div>
    );
  }
}
