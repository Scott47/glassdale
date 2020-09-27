

export const Criminal = (criminalObject) => {
    return `
    <section class="criminal__card">
        <div class="col">
            <h2 class="criminal__">${criminalObject.name}</h2>
            <div><Age: ${criminalObject.age}</div>
            <div>Crime: ${criminalObject.conviction}</div>
            <div>Term Start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</div>
            <div>Term End: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</div>
        </div>
    </section>
    `
}
