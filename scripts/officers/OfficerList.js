import { getOfficers, useOfficers } from "./OfficerProvider.js";
import { Officer} from "./Officer.js";
import { useCriminals } from "../criminals/CriminalProvider.js";


const contentTarget = document.querySelector(".officersContainer")
const eventHub = document.querySelector(".container");


export const OfficerList = () => {

    getOfficers()
        .then(() => {
            const officerArray = useOfficers()
            let officerHTMLRepresentation = ""
            officerArray.forEach(officer => {
                officerHTMLRepresentation += Officer(officer)
            })
            contentTarget.innerHTML = officerHTMLRepresentation
            // return officerHTMLRepresentation
        })
    }

eventHub.addEventListener("officerSelect", event => {
    const officerName = event.target.value
    const criminals  = useCriminals()
    criminals.filter(criminalObject => {
        if (criminalObject.arrestingOfficer === officerName) {
            return true
        }
    })
})