

let criminals = []

export const useCriminals = () => {
    return criminals.slice()
}

export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals?_sort=date&_order=desc")

        .then(response => response.json())
        .then(
            parsedCriminals => {
                // console.table(parsedCriminals)
                criminals = parsedCriminals
            }
        )
}