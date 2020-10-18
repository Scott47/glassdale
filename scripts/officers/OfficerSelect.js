/*
 *   OfficerSelect component that renders a select HTML element
 *   which lists all officers in the Glassdale PD API
 */
import { getOfficers, useOfficers } from "./OfficerProvider.js"
// import { useCriminals } from "../criminals/CriminalProvider.js"

/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/
const eventHub = document.querySelector(".container")

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__officer")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", changeEvent => {
    // Only do this if the `officerSelect` element was changed
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectOfficer = changeEvent.target.value
        // Create custom event.
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectOfficer
            }
        })
        console.log(customEvent)
        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

const render = officersCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select the arresting officer...</option>
            ${
                officersCollection.map(officerObject => {
                    const arrestingOfficer = officerObject.name
                    return `<option value="${officerObject.name}">${arrestingOfficer}</option>`
                })
            }
        </select>
    `
}

export const OfficerSelect = () => {
    // Get all convictions from application state
    getOfficers().then(() => {
    const arrestingOfficerArray = useOfficers()
    render(arrestingOfficerArray)
    })
}

