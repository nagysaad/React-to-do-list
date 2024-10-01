
import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [tasks , setTasks] = useState([]); //hook

  const inputRef = useRef();

  const handleAddToDo = () => {
    const taskText = inputRef.current.value;
    const newItem = { completed : false , taskText};
    setTasks([...tasks , newItem]);
    console.log(taskText);
    inputRef.current.value = "";
  }


  const handleTaskDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = ! newTasks[index].completed;
    setTasks(newTasks);

  }

  console.log(tasks);


  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index , 1);
    setTasks(newTasks);

  }



  return (
    <div className="App">
      <h2>To Do List With React</h2>
      <div className='to-do-container'>
      <ul>
        {tasks.map(({taskText , completed}, index ) => {
        
          return (
            <div className='box'>
              <li className={completed ? "done" : ""} key={index} onClick={() => handleTaskDone(index)}>{taskText}</li>
              <span onClick={() => handleDeleteTask(index)}>❌</span>
            </div>
          )
        }
        )}
      </ul>

      <input ref={inputRef} placeholder='Enter The Task'/>
        <button  onClick={  handleAddToDo }>Add Task</button>
      </div>
    </div>
  );
}

export default App;
