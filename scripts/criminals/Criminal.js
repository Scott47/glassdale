
const eventHub = document.querySelector('.container')

export const Criminal = (criminalObject) => {
    return `
    <section id="criminal-${criminalObject.id}" class="criminal__card">
        <div class="col">
            <h2 class="criminal__">${criminalObject.name}</h2>
            <div><Age: ${criminalObject.age}</div>
            <div>Crime: ${criminalObject.conviction}</div>
            <div>Term Start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</div>
            <div>Term End: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</div>
            <button id="associates--${criminalObject.id}">Associate Alibis</button>
        </div>
    </section>
    `
}

eventHub.addEventListener("click", (eventObj) => {
    // check to see if the button was clicked is the correct button
    const [prefix, criminalId] = eventObj.target.id.split('--')
    if (eventObj.target.id.startsWith('associates') ) {

        const myCustomEvent = new CustomEvent('alibiButtonClicked', {
                detail: {
                    criminalId: +criminalId
                }
            })
        eventHub.dispatchEvent(myCustomEvent)
    }
})