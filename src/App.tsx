import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import { LoggedIn } from './components/LoggedIn';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const personName = {
    first: 'Laura',
    last: 'Lili',
  };

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Princess',
      last: 'Diana',
    },
  ];

  return (
    <div className="App">
      <Greet name="MACICKA" messageCount={4} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList}/>
      <Status status="loading"/> 
      <LoggedIn/>
    </div>
  );
}

export default App;
