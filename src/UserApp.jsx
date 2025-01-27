import React from 'react'
import {useState, useEffect} from 'react'
export const UserApp = () => {
  const [users, setUsers] = useState([])
  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchUsers()
  }, []);
  return (
    <>
      <h1>Lista de Usuarios</h1>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}
