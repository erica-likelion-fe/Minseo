// import logo from './logo.svg';
import React from 'react';
import {Header} from './Header';
import {Nav} from './Nav';
import {Create} from './Create';


// import './App.css';

function App() {
<<<<<<< HEAD:src/App.js
  const [index, setIndex] = React.useState(['Create', 'Html', 'CSS','JS']);
=======
  const [index, setIndex] = React.useState(['Create', 'Delete', 'Html', 'CSS','JS']);
>>>>>>> 45d1bc2f65e2641c079a31336a6119c128999d8a:Week 6/src/App.js
  const [input, setInput] = React.useState('');
  
  const IndexAdd = () => {
    setIndex([...index,input]);
    setInput('');
  }
  

return (
    <div>
      <Header title="ERICA x React Props State" />
      <Nav index = {index}/>
      <Create 
        inputIndex = {input}
        setInput={setInput}
        IndexAdd={IndexAdd}/>
    </div>
  )

}

export default App;
