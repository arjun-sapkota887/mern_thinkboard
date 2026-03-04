import express from 'express';


const app = express(); 

app.get("/api/notes", (req, res) => {
    res.status(200).send("you have 5 notes");
});

app.get("/api/notes", (req, res) =>{
    res.status(201).send("you have created a new note");
});

app.listen(5001, () => {
    console.log('Server started on port: 5001')
})