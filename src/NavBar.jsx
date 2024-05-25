// src/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav style={styles.nav}>
    <Link to="/" style={styles.link}>Home</Link>
    <Link to="/about" style={styles.link}>About</Link>
    <Link to="/contact" style={styles.link}>Contact</Link>
  </nav>
);

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '1em',
    backgroundColor: '#333',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
};

export default NavBar;
