import React from 'react'
import { useEffect, useState } from 'react'
function Users() {
    const [users, setUsers ] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9292/users")
        .then(response => response.json())
        .then(data => setUsers(data))
    })
  return (
    <div>
        {users.map(user =>(
            <div key={user.id}>{user.name} <br/>
            {user.email} <br/>
            {user.password}
            </div>
        ))}
    </div>
  )
}

export default Users
