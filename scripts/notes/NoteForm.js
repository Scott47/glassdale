import { saveNote } from "./NoteDataProvider.js"
import { NoteList } from "./NoteList.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        let noteTitle = document.querySelector("#note-title")
        let noteAuthor = document.querySelector("#note-author")
        let noteDate = document.querySelector("#note-timestamp")
        let noteContent = document.querySelector("#note-content")
        let criminalId = document.querySelector("#note--criminal")
        let timestamp = Date.now()

        // Make a new object representation of a note
        const newNote = {
            title: noteTitle.value,
            author: noteAuthor.value,
            date: noteDate.value,
            criminalId: +criminalId.value,
            noteContent: noteContent.value,
            timestamp: timestamp
        }
        // Change API state and application state
        saveNote(newNote)
        noteTitle.value = ''
        noteAuthor.value = ''
        noteDate.value = ''
        noteContent.value  = ''
        criminalId.value = 0
        NoteList()
    }
})

const render = (arrayOfCriminals) => {
    contentTarget.innerHTML = `
    <input type="text" id="note-title" name="note" placeholder="Enter note title"/>
    <input type="text" id="note-author" name="date" placeholder="Your name here..."/>
    <input type="date" id="note-timestamp" name="date" />
    <select id="note--criminal" class="criminalSelect">
    <option value="0">Please select a criminal...</option>
    ${
        arrayOfCriminals.map(criminal => {
            return `<option value="${ criminal.id }">${ criminal.name }</option>`
        }).join("")
    }
    </select>
    <textarea id="note-content" placeholder="Note text here" name="crime"></textarea>
    <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    getCriminals()
    .then(() => {
        const allCriminals = useCriminals()
        render(allCriminals)
    })
}