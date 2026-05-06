// practical question no. 02
// Fetch data using api which displays each user: name , website.

import React, { useState, useEffect } from 'react';

const ApiCall = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>Name:</strong> {user.name} <br />
            <strong>Website:</strong> {user.website}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiCall;