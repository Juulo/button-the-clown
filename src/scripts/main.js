import { ButtonClown } from "./ButtonClown.js";
import { fetchReservations } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

const renderHTML = () => {
    fetchReservations().then (
        () => {
            mainContainer.innerHTML = ButtonClown()
        }
    )
}

mainContainer.addEventListener(
    "stateChanged",
    event  => {
        console.log("State of data has changed. Rendering HTML...")
        renderHTML()
    }
)

renderHTML()