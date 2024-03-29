import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return; //함수 종료
    }
    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo("");
  };
  return (
  <div>
    <h1>My To Dos({toDos.length})</h1>
      <form id="form1" onSubmit={onSubmit}>
        <input 
        onChange={onChange} 
        value={toDo} 
        type="text" 
        placeholder="write your to do..." 
        />
        <button>Add To Do</button>
        <hr />
        <ul>
          {toDos.map((item, index)=> 
          (<li key={index}>{item}</li>))}
        </ul>
        
      </form>
  </div>
  );
}

export default App;
