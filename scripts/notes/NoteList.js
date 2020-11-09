import { getNotes, useNotes, deleteNote } from "./NoteDataProvider.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"
import { Note } from "./Note.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector('.noteListContainer')

const render = (noteCollection, criminalCollection) => {
    let notesAsHTML = ''
    console.log(noteCollection)
    contentTarget.innerHTML = noteCollection.map(note => {
        // Find the related criminal
        const currentCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)
        notesAsHTML = Note(note, currentCriminal)
        return notesAsHTML
    })
}
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
       deleteNote(id).then(
           () => {
               const updatedNotes = useNotes()
               const criminals = useCriminals()
               render(updatedNotes, criminals)
           }
       )
    }
})

export const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {
            const notes = useNotes()
            const criminals = useCriminals()
            render(notes, criminals)
        })
}