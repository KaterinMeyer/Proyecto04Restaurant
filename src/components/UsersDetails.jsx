import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const UsersDetails = () => {
  const [data, setData] = useState({})

  let { id } = useParams();
  console.log('id', id)
  const fetchUser = async () => {
    const result = await fetch(`https://api.github.com/users/${id}`)
    const data  = await result.json();
    console.log(data)
    setData(data)
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
    <div>{data.name}</div>
    <img src={data.avatar_url} width="150"/>
    </>
  )
};

