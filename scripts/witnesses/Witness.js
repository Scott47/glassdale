
export const Witness = (witnessObj) => {
    return `
        <div class="witness--{witnessObj.id}">
        <p>${witnessObj.name}</p>
        <p>${witnessObj.statements}</p>
        </div>
    `
}
const eventHub = document.querySelector('.container')

eventHub.addEventListener("click", (eventObj) => {
    console.log(eventObj)
    // check to see if the button was clicked is the correct button
    if (eventObj.target.id === 'witness__statments' ) {
        console.log(eventObj, "whatever")

        const myCustomEvent = new CustomEvent('witnessButtonClicked')

        eventHub.dispatchEvent(myCustomEvent)
    }
})


