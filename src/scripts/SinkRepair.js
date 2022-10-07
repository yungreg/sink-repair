/* 
*todo: import starter code
*todo: investigate it to tell what to do next 
*todo: make a requests.js module
*todo: export a requests fn() from that module here //? what will that fn do..?
*todo: import and interpolate the Service Form
*/
import { ServiceForm } from "./ServiceForm.js"
import { Requests } from "./Requests.js"


export const SinkRepair = () => {
    return `
        <h1>Maude and Merle's Sink Repair</h1>
        <section class="serviceForm">
            <h2>Service Form:</h2>
            ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Service Requests:</h2>
            ${Requests()}
        </section>
    `
}
