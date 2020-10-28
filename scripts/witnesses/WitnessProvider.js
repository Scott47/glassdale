
let witnesses = []

export const useWitnesses = () => [...witnesses]

export const getWitnesses = () => {
    return fetch('https://criminals.glassdale.us/witnesses')
        .then(res => res.json())
        .then(parsedRes => witnesses = parsedRes)
}

