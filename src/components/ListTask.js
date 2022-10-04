import React, { useEffect, useState } from "react";
import UpdateTask from "./UpdateTask";

const ListTask = () => {
  const [todos, setTodos] = useState([]);
  const deleteTodo = async id => {
    try {
      const deleteTodo = await fetch(`http://localhost:3350/task/${id}`, {
        method: "DELETE"
      });
      setTodos(todos.filter(todo => todo.task_id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  const getTasks = async () => {
    try {
      const response = await fetch("http://localhost:3350/task");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  console.log(todos);
  return (
    <div>
      <table className="table mt-5">

        <thead className='h3'>
          <tr>
            <th>Task</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {todos.map(todo => (
            <tr
              className="h5"
              key={todo.task_id}>
              <td>{todo.task}</td>
              <td>
                <UpdateTask todo={todo} />
              </td>
              <td>
                <button
                  className="delete btn btn-danger"
                  onClick={() => deleteTodo(todo.task_id)}
                >Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTask;