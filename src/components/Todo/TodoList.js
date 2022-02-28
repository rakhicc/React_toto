import React, { useContext } from "react";


import classes from "./TodoList.module.css";
import { NotesContext } from "../store/todoStore";
const TodoList = () => {
  const context=useContext(NotesContext);
  console.log(context);
  const removeHandler=(id)=>{
    context.removeToDo(id);

  }
  return (
    <div className={classes.todos}>
      <h1>Notes:</h1>
      {context.notes.map((note) => {
        return (
          <div
            className={`${classes.todo} ${
              note.done ? classes.done : classes.notDone
            }`}
            key={note.id}
            onClick={() => context.doneTodo(note.id)}
          >
            <h2>{note.title}</h2>
            <p>{note.task}</p>
            <p></p>
            <span
              className={`material-icons ${classes.delete}`}
              onClick={() => removeHandler(note.id)}
            >
              delete
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
