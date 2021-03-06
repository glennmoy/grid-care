import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import logo from './logo.svg';

class MadiraNavBar extends Component {
    render() {
	function handleSelect(selectedKey) {
	    alert('selected ' + selectedKey);
	};
	const navBarInstance = (
	  <Navbar>
	    <Navbar.Header>
	      <Navbar.Brand left>
		<img src={logo} className="App-logo" alt="ESB Networks Logo" />
              </Navbar.Brand>
	      <Navbar.Toggle />
	      </Navbar.Header>
		<Navbar.Collapse>
		<Nav>
		<NavItem>Coordinated Emergency Response Tool (CERT)</NavItem>
		<NavItem eventKey={1} href="#"></NavItem>
		<NavDropdown eventKey={3} title="Other Agencies" id="basic-nav-dropdown">
		<MenuItem eventKey={3.1}>Weather</MenuItem>
		<MenuItem eventKey={3.2}>Local News</MenuItem>
		<MenuItem divider />
		<MenuItem eventKey={3.3}>Bord Gais</MenuItem>
		<MenuItem eventKey={3.4}>Gardai</MenuItem>
		</NavDropdown>
		</Nav>
		<Nav pullRight>
		<NavItem eventKey={1} href="#">Nationwide Status</NavItem>
		</Nav>
		</Navbar.Collapse>
		</Navbar>
	);
	
    return (
	<div>
	    {navBarInstance}
	</div>

    );
  }
}

export default MadiraNavBar;
