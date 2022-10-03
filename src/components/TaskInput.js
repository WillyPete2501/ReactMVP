import React, {useState} from "react";

const TaskInput = () => {

    const [description, setDescription] = useState('');
    console.log(description)

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch('http://localhost:3350/task', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });
            console.log(response);
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div>
            <h1
                className="text-center mt-5">
                Task List</h1>
            <form
                className="d-flex mt-5"
                onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="add task"
                    className="form-control"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button
                className="">
                    Add
                </button>
            </form>
        </div>
    );
};

export default TaskInput;