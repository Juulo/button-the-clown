const API = "http://localhost:8088"

const mainContainer = querySelector("#container")

export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
        .then(res => res.json())
        .then(
            (makeReservations) => {
                applicationState.reservations = makeReservations
            }
        )
}

export const sendReservations = () => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }

    return fetch(`${API}/reservations`, fetchOptions)
        .then(res => res.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

const applicationState = {
    reservations: []
}

export const getReservations = () => {
    return applicationState.reservations.map(reservation => ({...reservation}))
}