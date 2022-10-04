import React, { useState } from "react";

const UpdateTask = ({ todo }) => {
  const [task, setTask] = useState(todo.task);

  const updateDescription = async (task_id) => {
    try {
      const body = { task };
      const response = await fetch(
        `http://localhost:3350/task/${task_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );
      window.location = "/"
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>

      <button
        type="button"
        className="btn btn-info"
        data-toggle="modal"
        data-target={`#id${todo.task_id}`}
      >Update
      </button>

      <div
        className="modal fade"
        id={`id${todo.task_id}`}
      >
        <div
          className="modal-dialog"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">

              <h5>Update Task</h5>

            </div>

            <div className="modal-body">
              <input
                className='form-control'
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </div>

            <div className="modal-footer">

              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >Close
              </button>

              <button
                type="button"
                className="btn btn-info"
                onClick={() => updateDescription(todo.task_id)}
              >Save
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default UpdateTask;