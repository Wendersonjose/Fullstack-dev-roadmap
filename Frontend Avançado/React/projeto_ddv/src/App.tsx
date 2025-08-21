import './App.css'
import { Button } from './components/button';
import { User } from './components/user' 


export default function App() {
  const users = [
    { id: 1, name: 'Alice',   occupation: 'Engineer' },
    { id: 2, name: 'Bob',     occupation: 'Designer' },
    { id: 3, name: 'Charlie', occupation: 'Teacher' },
  ];

  return (
    <>
      <h2>Usuarios</h2>
      <ul>
        {users.map(u => (
          <User
            key={u.id}
            name={u.name}
            occupation={u.occupation}
            onClick={() => alert(`Clicou em ${u.name}`)}
          />
         
        ))}
      </ul>

        <Button type = "button" onClick={() => alert('Clicou no botao')}>
          Enviar
        </Button>

    </>
  );
}
