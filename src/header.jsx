import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import App from './App';
import About from './components/about';
import Contact from './components/contact';
import Blog from './components/blog';
import Profile from './components/profile';

export default class header extends Component {
    render() {
        return (
         <Router>
            <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand > <Link to="/">LearnHunter</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link ><Link to="/contact">Contact</Link></Nav.Link>
                    <Nav.Link ><Link to="/about">About</Link></Nav.Link>
                    <Nav.Link ><Link to="/blog">Blog</Link></Nav.Link>
                    <Nav.Link ><Link to="/profile">Profile</Link></Nav.Link>         
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/blog">
                    <Blog />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/">
                    <App />
                </Route>
            </Switch>
         </Router>
        );
    }
}

