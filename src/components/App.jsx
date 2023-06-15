import Header from "./Header"
import Footer from "./Footer"
import CreateArea from "./CreateArea"
import Note from "./Note"
import { useState } from "react"

function App() {
  const [notes, setNotes] = useState([])

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    })
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map(noteItem => {
        return <Note title={noteItem.title} content={noteItem.content} />
      })}
      <Footer />
    </>
  )
}

export default App
