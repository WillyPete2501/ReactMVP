import React, { useState } from "react";

const TaskInput = () => {
    const [task, setTask] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = { task };
            const response = await fetch('http://localhost:3350/task', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            window.location = "/"
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div>

            <h1
                className="mt-5 h2 font-weight-bold"
            >Task List
            </h1>

            <form className="d-flex mt-3">
                <input
                    type="text"
                    placeholder="add task"
                    className="form-control font-italic"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button
                    type="button"
                    className="Add btn btn-info"
                    onClick={handleSubmit}
                >Add
                </button>
            </form>

        </div>
    );
};

export default TaskInput;