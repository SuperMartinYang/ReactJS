import React, { Component } from 'react';
import './style.css'
import logo from './images/logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Code from './components/Code'
import Contact from './components/Contact'
import Info from './components/Info'

const MainMenu = () => {
return (
<div>
  <Link to="/">
	<button>home</button>
  </Link>
  <Link to="/about">
	<button>About</button>
  </Link>
  <Link to="/code">
	<button>code</button>
  </Link>
  <Link to="/contact">
	<button>contact</button>
  </Link>
  <Link to="/info">
	<button>info</button>
  </Link>
</div>
);
};


class App extends Component {
  render() {
	return (
	  <Router>
		<div className="App">
		  <header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h1 className="App-title">Welcome to React</h1>
			<MainMenu />
		  </header>
		  <div className="main-content">
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
			<Route exact path="/code" component={Code} />
			<Route exact path="/contact" component={Contact} />
			<Route exact path="/info" component={Info} />
		  </div>
		</div>
	  </Router>
	);
  }
}

export default App;
