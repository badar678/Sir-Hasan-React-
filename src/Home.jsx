// src/Home.js
import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h2>Home Page</h2>
      <div style={styles.cvSection}>
        <h3>Curriculum Vitae</h3>
        <p><strong>Name:</strong> Badar</p>
        <p><strong>Email:</strong> badar678@gmail.com</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <h4>Education</h4>
        <ul>
          <li>B.Sc. in Computer Science, XYZ University, 2020</li>
        </ul>
        <h4>Experience</h4>
        <ul>
          <li>Software Engineer at ABC Corp, 2021-present</li>
          <li>Intern at DEF Inc, 2019-2020</li>
        </ul>
        <h4>Skills</h4>
        <ul>
          <li>JavaScript, React, Node.js</li>
          <li>HTML, CSS, SASS</li>
          <li>Git, GitHub</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2em',
  },
  cvSection: {
    marginTop: '2em',
    padding: '1em',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
};

export default Home;
