import { getOfficers, useOfficers } from "./OfficerProvider.js";
import { Officer} from "./Officer.js";


const contentTarget = document.querySelector(".officersContainer")


export const OfficerList = () => {

    getOfficers()
        .then(() => {
            const officerArray = useOfficers()
            let officerHTMLRepresentation = ""
            officerArray.forEach(officer => {
                officerHTMLRepresentation += Officer(officer)
            })
            contentTarget.innerHTML = officerHTMLRepresentation
        })
    }

