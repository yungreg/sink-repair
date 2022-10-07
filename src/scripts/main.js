/*
*todo: copy/paste to import the FEtch state fn() here
*/

import { fetchRequests, fetchPlumbers, fetchCompletions} from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"

//copy pasta of the completion code
const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
        .then(() => fetchPlumbers())
        .then(() => fetchCompletions())
        .then(
            () => {
                mainContainer.innerHTML = SinkRepair()
            }
        )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

