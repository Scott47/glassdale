


export const Officer = (officerObject) => {
    return `
    <section class="officer__card">
        <div class="col">
            <h2 class="officer__" id="id--${officerObject.id}">${officerObject.name}</h2>
        </div>
    </section>
    `
}
