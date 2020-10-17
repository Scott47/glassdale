

let criminals = []

export const useCriminals = () => {
    return criminals.slice()
}

export const getCriminals = () => {
    debugger
    return fetch("https://criminals.glassdale.us/criminals")

        .then(response => response.json())
        .then(
            parsedCriminals => {
                // console.table(parsedCriminals)
                criminals = parsedCriminals
            }
        )
}