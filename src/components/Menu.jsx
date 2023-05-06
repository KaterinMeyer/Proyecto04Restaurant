import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
  const [data, setData] = useState([]);
  const fetchUsers = async () => {
    const result = await fetch("https://api.github.com/users")
    const data = await result.json();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className='list-of-users'>
      {data.map((persona, idx) => (
        <Link to={`/users/${persona.id}`}>
          <h2 key={`persona-${idx}`}>{persona.login}</h2></Link>

      ))}

    </div>
  )
};
