// import logo from './logo.svg';
import React from 'react';
import {Header} from './Header';
import {Nav} from './Nav';
import {Create} from './Create';


// import './App.css';

function App() {
  const [index, setIndex] = React.useState(['Create', 'Delete', 'Html', 'CSS','JS']);
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
