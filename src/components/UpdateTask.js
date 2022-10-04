import React, { useState } from "react";

const UpdateTask = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  const updateDescription = async e => {
    e.preventDefault();
    console.log(todo)
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:3350/task/${todo.task_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );
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
        className="modal"
        id={`id${todo.task_id}`}
        onClick={() => setDescription(todo.description)}
      >

        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">

              <h2 className="modal-title"
              >Update</h2>

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >&times;
              </button>

            </div>


            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="UpdateAgain btn btn-info"
                data-dismiss="modal"
                onClick={e => updateDescription(e)}
              >Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;