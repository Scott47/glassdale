// convert object to HTML string
// return that HTML String

export const Note = (noteObj) => {
    return `
    <section class="one__note">
        <h2>Title: ${noteObj.title}</h2>
        <p>Author: ${noteObj.author}</p>
        <p>Time Note Entered: ${new Date(noteObj.date).toLocaleDateString('en-US')}</p>
    </section>
    `
}
