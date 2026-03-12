import express from 'express';


const app = express(); 

app.get("/api/notes", (req, res) => {
    res.status(200).send("you have 15  notes");
});

app.get("/api/notes/note1", (req, res) => {
    res.status(200).send("This is the content of your first note");
});

app.post("/api/notes", (req, res) => {
    res.status(201).json({"message": "note created successfully"});
});

app.put('/api/notes/:id', (req, res) => {
    res.status(200).json({"message": "note updated successfully"});
});

app.delete('/api/notes/:id', (req,res) => {
    res.status(200).json({"message": "note deleted successfully"});
});
 
app.listen(5001, () => {
    console.log('Server started on port: 5001')
}) 