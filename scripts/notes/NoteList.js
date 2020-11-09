import { getNotes, useNotes } from "./NoteDataProvider.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"
import { Note } from "./Note.js"


const contentTarget = document.querySelector('.noteListContainer')

const render = (noteCollection, criminalCollection) => {
    let notesAsHTML = ''
    contentTarget.innerHTML = noteCollection.map(note => {
        console.log(note)
        // Find the related criminal
        const currentCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)
        notesAsHTML += Note(note, currentCriminal)

        return `
        <section class="note">
                <h2>Note about ${currentCriminal.name}</h2>
                ${note.noteContent}
            </section>
        `
    })
}

export const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {
            const notes = useNotes()
            const criminals = useCriminals()
            render(notes, criminals)
        })
}