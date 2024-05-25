// src/Contact.js
import React, { useEffect, useState } from 'react';

function Contact() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <div style={styles.container}>
      <h2>Users List</h2>
      <ul style={styles.list}>
        {data.map(user => (
          <li key={user.id} style={styles.listItem}>
            {user.name} <br /> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    padding: '2em',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    margin: '1em 0',
    padding: '1em',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
};

export default Contact;
