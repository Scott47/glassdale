import { getCriminals, useCriminals } from "./CriminalProvider.js";
import { Criminal } from "./Criminal.js";

const criminalContainer = document.querySelector(".criminalsContainer");



// Render ALL criminals initally
export const CriminalList = () => {
    getCriminals().then(() => {
        const criminalArray = useCriminals()
            criminalArray.forEach(criminal => {
                criminalContainer.innerHTML += Criminal(criminal)
            })
        })
        }
