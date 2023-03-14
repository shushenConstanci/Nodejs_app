import express from 'express'
const app = express()
import { getAllNotes,getSingleNote,createNote } from './database.js'
app.use(express.json())



app.get("/notes",async(req,res) => {
    const notes = await getAllNotes()
    res.send(notes)
})

app.get("/notes/:id",async(req,res) => {
    const id = req.params.id
    const notes = await getSingleNote(id)
    res.send(notes)
})

app.post("/notes",async(req,res) => {
    const {title,content} = req.body
    const note = await createNote(title,content)
    res.status(201).send(note)

})

app.use((err,req,res,next)=>{
     console.error(err.stack)
     res.status(500).send('Something broke!')

})

app.listen(8080,()=>{
    console.log('Server is running on port 8080')
})