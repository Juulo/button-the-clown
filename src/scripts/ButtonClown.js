import { ReservationForm } from "./ReservationForm.js";
import { Reservation } from "./Reservations.js";

export const ButtonClown = () => {
    return `
    <h1>Buttons the Clown</h1>
    <section class="reservationForm">
        ${ReservationForm()}
    </section>
    <section class="reservations">
        <h2>Reservations</h2>
        ${Reservation()}
    </section>
    `
}