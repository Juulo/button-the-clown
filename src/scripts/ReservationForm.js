// import our setter function
import { sendReservations } from "./dataAccess.js"
// create a variable to store our query select
const mainContainer = querySelector("#container")
// create an event listener that takes the user input data and sends it to our api
mainContainer.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "submitReservation") {
            const userParentName = document.querySelector("input[name='orderName']").value
            const userChildName = document.querySelector("input[name='orderChildName']").value
            const userAddress = document.querySelector("input[name='orderAddress']").value
            const userDate = document.querySelector("input[name='orderDate']").value
            const userTime = document.querySelector("input[name='orderTime']").value

            const sendToAPI = {
                parent: userParentName,
                child: userChildName,
                address: userAddress,
                partyDate: userDate,
                partyHours: userTime
            }

            sendReservations(sendToAPI)
        }
})

export const ReservationForm = () => {
    return `
    <div>
        <label class="label" for="orderParentName">Your Name</label>
        <input type="text" name="orderName" class="input"/>
    </div>
    <div>
        <label class="label" for="orderChildName">Your Child's Name</label>
        <input type="text" name="orderChildName" class="input"/>
    </div>
    <div>
        <label class="label" for="orderAddress">Your Address</label>
        <input type="text" name="orderAddress" class="input"/>
    </div>
    <div>
        <label class="label" for="orderDate">Date of Reservation</label>
        <input type="date" name="orderDate" class="input"/>
    </div>
    <div>
        <label class="label" for="orderTime">Reservation Hours</label>
        <input type="number" name="orderTime" class="input"/>
    </div>
    <button class="button" id="submitReservation">Submit</button>
    `
}