//library & variables
const express = require('express');
const cors = require('cors');
const pool = require('./database');
const app = express();
const PORT = 3350;

//middlewares
app.use(cors());
app.use(express.json());

//CRUD

//getAll////////////////////////////////////////////////
app.get('/task', async (request, response) => {
    try {
        const allTasks = await pool.query('SELECT * FROM todo_tbl');
        response.json(allTasks.rows);
    } catch (error) {
        console.log(error.message);
    }
});

//getOne/////////////////////////////////////////////
app.get('/task/:id', async (request, response) => {
    try {
        const {id} = request.params;
        const oneTask = await pool.query('SELECT * FROM todo_tbl WHERE task_id = $1', [id]);
        response.json(oneTask.rows);
    } catch (error) {
        console.log(error.message);
    }
});

//createOne/////////////////////////////////////////
app.post('/task', async (request, response) => {
    try {
        const {task} = request.body;
        const createTask = await pool.query("INSERT INTO todo_tbl (task) VALUES ($1) RETURNING *", [task]);
        response.json(createTask.rows);
    } catch (error) {
        console.error(error.message);
    }
});

//updateOne////////////////////////////////////////
app.put('/task/:id', async (request, response) => {
    try {
        const {id} = request.params;
        const {task} = request.body;
        const updateTask = await pool.query('UPDATE todo_tbl SET task = $1 WHERE task_id = $2', [task, id]);
        const oneTask = await pool.query('SELECT * FROM todo_tbl WHERE task_id = $1', [id]);
        response.json(oneTask.rows);
    } catch (error) {
        console.error(error.message);
    }
});

//deleteOne///////////////////////////////////////
app.delete('/task/:id', async (request, response) => {
    try {
        const {id} = request.params;
        const deleteTask = await pool.query('DELETE FROM todo_tbl WHERE task_id = $1', [id]);
        const allTasks = await pool.query('SELECT * FROM todo_tbl');
        response.json(allTasks.rows);
    } catch (error) {
        console.error(error.message)
    }
})
//listening
app.listen(PORT, () => {
    console.log(`${PORT} check`)
});