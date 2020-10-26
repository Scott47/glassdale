/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions, getConvictions } from "./ConvictionProvider.js"

/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/
const eventHub = document.querySelector(".container")

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {
    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "crimeSelect") {
        console.log(event.target.value)
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })
        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

const render = convictionsCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map(convictObject => {
                    const conviction = convictObject.name
                    return `<option value="${conviction}">${conviction}</option>`
                })
            }
        </select>
    `
}

export const ConvictionSelect = () => {
    // Get all convictions from application state
    getConvictions().then(() => {
    const convictions = useConvictions()
    render(convictions)
    })
}
