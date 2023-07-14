import React, { useState, useEffect } from 'react';
import style from "./NoteGallery.module.css"
function NoteGallery() {

  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  // console.log(tasks,"hello 1");

  useEffect( () => {
    const storedTasks =  localStorage.getItem('tasks');
    // console.log(storedTasks,"hello 2");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
      // console.log(tasks,"after set task");
    }
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      const newTask = { task: inputValue, checked: false };
      setTasks([newTask,...tasks]);
      setInputValue('');
      updateLocalStorage([...tasks, newTask]);
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  const handleToggleCheck = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].checked = !updatedTasks[index].checked;
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  const updateLocalStorage = (updatedTasks) => {
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    console.log(tasks);
  };

  return (
    <div className={style.container}>
    <h1>Checklist</h1>
    <div>
      <form  onSubmit={ handleAddTask}>
      <input type="text" className={style.TextInput} value={inputValue} onChange={handleInputChange} />
      <button className={style.AddNoteBtn} type="submit" >Add</button>
      </form>
    </div>
      <ul className={style.UlNote}>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => handleToggleCheck(index)}
            />
            {task.task}
            <button  onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
   
    </div>
  )
}

export default NoteGallery
