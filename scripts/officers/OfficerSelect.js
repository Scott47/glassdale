/*
 *   OfficerSelect component that renders a select HTML element
 *   which lists officers in the Glassdale PD API
 */
import { getOfficers, useOfficers } from "./OfficerProvider.js"
//Get reference to main container, eventHub
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
        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

const render = officersCollection => {
    /*
        Use interpolation to invoke the map() method on
        the convictionsCollection to generate the option elements.
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

