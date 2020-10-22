const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
    <input type="text" id="note-text"> name="note"></input>
    <input type="date" id="note-datet"> name="date"></input>
    <input type="name" id="note-name"> name="name"></input>
    <input type="crime" id="note-crime"> name="crime"></input>
    <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}