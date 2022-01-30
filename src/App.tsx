import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import { LoggedIn } from './components/LoggedIn';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import {ThemeContextProvider} from './components/context/ThemeContextProvider';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/User/UserContext';
import { User } from './components/context/User/User';

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
      <Greet name="test" messageCount={4} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList}/>
      <Status status="loading"/> 
      <LoggedIn/>

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>


      <UserContextProvider>
        <User/>
      </UserContextProvider>
    </div>
  );
}

export default App;
