import { getNotes, useNotes } from "./NoteDataProvider.js"
import { Note } from "./Note.js"


const contentTarget = document.querySelector('.noteListContainer')
// const eventHub = document.querySelector('.container')

export const NoteList = () => {
    getNotes().then(() => {
        const noteArray = useNotes()
        console.log(noteArray)
        render(noteArray)
    })
}

const render = notesCollection => {
        // console.log(notesCollection)
        let notesHTMLRepresentations = ""
        notesCollection.forEach(currentNote => {
        notesHTMLRepresentations += Note(currentNote)
        })
        contentTarget.innerHTML = `
        ${notesHTMLRepresentations}
        `
    };
