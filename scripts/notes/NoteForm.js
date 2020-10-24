import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const noteTitle = document.querySelector("#note-title")
        const noteAuthor = document.querySelector("#note-author")
        const noteDate = document.querySelector("#note-timestamp")
        const noteContent = document.querySelector("#note-content")

        // Make a new object representation of a note
        const newNote = {
            title: noteTitle.value,
            author: noteAuthor.value,
            date: noteDate.value,
            noteContent: noteContent.value,
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

const render = () => {
    contentTarget.innerHTML = `
    <input type="text" id="note-title" name="note" placeholder="Enter note title"/>
    <input type="text" id="note-author" name="date" placeholder="Your name here..."/>
    <input type="date" id="note-timestamp" name="date" />
    <text area id="note-content" placeholder="Note text here" name="crime"></text>
    <button id="saveNote">Save Note</button>
    `
}


export const NoteForm = () => {
    render()
}