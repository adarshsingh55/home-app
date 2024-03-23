import React from "react";
import taskContext from "./Taskcontext";
import { useState } from "react";
// import { logRoles } from "@testing-library/react";
// const host = "https://chatverse.cyclic.app/";
const host = "http://localhost";
// const host = process.env.REACT_APP_HOST;


function TaskeState(props) {


  const [notes, setNote] = useState([]);


  // 1 get notes-----------------

    const getNotes = async () => {

      try {
        
     
      let url = `${host}/api/notes/fetchall`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
        // body: JSON.stringify({ title, description, tag }),
      });
      const json = await response.json();
      console.log(json);
      setNote(json)
    } catch (error) {
        
    }
    };

    function Hi() {
      console.log("hello hi");
    }
  
  return (
   <taskContext.Provider
   value={{notes,getNotes,Hi}}>
    {props.children}
   </taskContext.Provider>
  )
};

export default TaskeState;
