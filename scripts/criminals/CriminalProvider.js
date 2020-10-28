
let criminals = []

export const useCriminals = () => {
    return criminals.slice()
}

export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals?_sort=incarceration.end&_order=asc")
        .then(response => response.json())
        .then(parsedCriminals => criminals = parsedCriminals)
}