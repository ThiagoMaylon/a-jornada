import './App.css';

const users = [
  {
    name: 'Carlos',
    address: 'Rua X',
    age: 28,
    isAdmin: false,
  },
  {
    name: 'Maria',
    address: 'Rua XX',
    age: 31,
    isAdmin: true,
  },
  {
    name: 'Matheus',
    address: 'Rua XI',
    age: 22,
    isAdmin: false,
  }
]
function App() {

  return (
    <div className="App">
      {users.map((user, index) => (
        <div className="user" key={index}>
          <h1>Nome: {user.name}</h1>
          <p>
            endereço: {user.address} <br />
            idade: {user.age} <br />
            adiministrador: {user.isAdmin ? "sim" : "não"}
          </p>
        </div>
      ))}
      
    </div>
  )
}

export default App
