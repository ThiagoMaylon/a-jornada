import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://reqres.in/api/users').
    then(response => response.json()).
    then(res => setUsers(res.data))
  }, [])
  
  console.log(users)
  return (
    <div className="App">
      {users.map((user) => (
        <div className="card" key={user.id}>
          <img src={user.avatar} alt={user.first_name} />
          <p>{user.first_name} {user.last_name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default App
