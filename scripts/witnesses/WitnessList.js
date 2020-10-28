import { getWitnesses, useWitnesses } from './WitnessProvider.js'
import {Witness} from './Witness.js'

const eventHub = document.querySelector(".container")
const witnessesContainer = document.querySelector(".criminalsContainer")

eventHub.addEventListener("witnessButtonClicked", () => {
    console.log('are you here?')

    WitnessesList()
  })

const WitnessesList = () => {

    getWitnesses()
      .then(() => {
        const witnessesArray = useWitnesses()
        console.log(witnessesArray)
        render(witnessesArray)
      })
  }

const render = (witnessStatementsArray) => {
    let witnessStatementsHTMLRepresentations = ""
    for (const witness of witnessStatementsArray) {

      witnessStatementsHTMLRepresentations += Witness(witness)

      witnessesContainer.innerHTML = `
            <h3>Glassdale Witnesses</h3>
            <section class="witnessesList">
              ${witnessStatementsHTMLRepresentations}
            </section>
          `
    }
  }