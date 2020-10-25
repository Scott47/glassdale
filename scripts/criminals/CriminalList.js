import { getCriminals, useCriminals } from "./CriminalProvider.js";
import { Criminal } from "./Criminal.js";

const criminalContainer = document.querySelector(".criminalsContainer");
const eventHub = document.querySelector(".container");

// Render ALL criminals initally
export const CriminalList = () => {
  getCriminals().then(() => {
    const appStateCriminals = useCriminals();
    render(appStateCriminals);
  });
};

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", (event) => {
  console.log(event);
  // Use the property you added to the event detail.
  if (event.detail.crimeThatWasChosen !== "0") {
    /*
            Filter the criminals application state down to the people that committed the crime
        */
    const appStateCriminals = useCriminals();

    const matchingCriminals = appStateCriminals.filter((currentCriminal) => {
      return currentCriminal.conviction === event.detail.crimeThatWasChosen;
    });
    /*
        Then invoke render() and pass the filtered collection as
        an argument
     */
    render(matchingCriminals);
  } else {
    CriminalList();
  }
});

eventHub.addEventListener("officerSelected", (event) => {
  const officerName = event.detail.officer;
  const criminals = useCriminals();
  if (officerName !== "0") {
    const matchingOfficers = criminals.filter(
      (currentCriminal) => currentCriminal.arrestingOfficer === officerName
    );
    render(matchingOfficers);
  } else {
    render(criminals);
  }
});

const render = (criminalCollection) => {
  // console.log(criminalCollection)
  criminalContainer.innerHTML = "";
  criminalCollection.forEach((oneCriminal) => {
    criminalContainer.innerHTML += Criminal(oneCriminal);
  });
};