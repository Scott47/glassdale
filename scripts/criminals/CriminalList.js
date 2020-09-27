import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from './Criminal.js'


const criminalContainer = document.querySelector('.criminalsContainer')

export const CriminalList = () => {
    getCriminals().then(() => {
        const criminalArray = useCriminals()
            criminalArray.forEach(criminal => {
                criminalContainer.innerHTML += Criminal(criminal)
            })
        })
        }
        /*
            Now that you have the data, what
            component should be rendered?
        */