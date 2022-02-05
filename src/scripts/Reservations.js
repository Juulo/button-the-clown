import { getReservations } from "./dataAccess.js";


const convertReservationToList = (reservation) => {
    return `
    <li>
    Making reservation for ${reservation.partyDate}
    </li>
    `
}

export const Reservation = () => {
    const reservations = getReservations()
    
    return `
        <ul>
            ${
                reservations.map(convertReservationToList).join("")
            }
        </ul>
    `
}