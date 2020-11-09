// convert object to HTML string
// return that HTML String
export const Note = (noteObj, criminalObj) => {
    return `
    <section class="col one__note">
        <h2>Title: ${noteObj.title}</h2>
        <p>Author: ${noteObj.author}</p>
        <p>Suspect: ${criminalObj.name}</p>
        <p>Time Note Entered: ${new Date(noteObj.date).toLocaleDateString('en-US')}</p>
        <p>Note: ${noteObj.note}</p>
        <button id="deleteNote--${noteObj.id}">Delete</button>
    </section>
    `
}
