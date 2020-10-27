// renders list of alibis for the selected criminal.

import {  useCriminals } from "./CriminalProvider.js"


const eventHub = document.querySelector('.container')

export const alibiListener = () => {
    eventHub.addEventListener('alibiButtonClicked', (eventObj) => {
        const foundCriminal = useCriminals().find(criminalObj => criminalObj.id === eventObj.detail.criminalId)
        // const alibisForFoundCriminal = foundCriminal.known_associates
        render(foundCriminal)
    })
}
// fucnction that adds alibis to the criminal card


const render = (alibiCollection) => {
    const contentTarget = document.querySelector(`#associates--${alibiCollection.id}`)

    contentTarget.innerHTML += `
        <div class="alibi__list">${alibiCollection.known_associates.map(alibiObj => {
            return `
                <p>${alibiObj.name}</p>
                <p>${alibiObj.alibi}</p>
            `
    }).join("")}
        </div>
    `
}