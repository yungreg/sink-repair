/*
*todo: import getter from dataacess.js
*todo: define imprt yo a variable
*todo: define and export a requests function 
*todo: 3:55 10/4/22 figure out how plumbers copy/paste works. why would plumbers.map not be defined in dev tools? //!ln 21-30. also, is importing fetchplumbers needed?
todo: //?do I need to make a getter for plumbers
todo: import get plumbers 
todo: figure out what goes in value on line 24
todo: import sendRequest()
*/
import { getRequests, deleteRequest, getPlumbers, saveCompletion } from "./dataAccess.js"



//^ my for of version works 
export const Requests = (object) => {
  const requests = getRequests();
  const plumbers = getPlumbers();

  let html = "<ul>";

  // !change the type l8r.. i'm not sure if this is right
  for (const request of requests) {
    html += `<li class="requests" value="${request.id}"> 
        User needs you to complete the following request: ${
          request.description
        } 
        <button class="request__delete"
        id="request--${request.id}"> Delete </button>
        
        <select class="plumbers" id="plumbers">
        <option value="0">Completed By:</option>
    ${plumbers
      .map((plumber) => {
        return `<option value="${request.id}"--${plumber.id}">${plumber.name}</option>`;
      })
      .join("--")}
</select> 
</li>`;
  }

  html += "</ul>";
  return html;
};
// copy pasta event listener
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})
  

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId] = event.target.value.split("--")
            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
            const completion = { 
                requestId: `${requestId}`, 
                plumberId: `${plumberId}`, //?why is plumberId undefined?
                date_created: Date.now()
            }
            saveCompletion(completion)
            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */

        }
    }
)
    //^ but so does this .map version Jessier usxed 
    // export const Requests = (object) => {
    //     const requests = getRequests()
    //     let html = '<ul>'
    
    //     // !change the type l8r.. i'm not sure if this is right
    //     // for(const request of requests){
    //     //     html += `<li class="requests" value="${request.id}"> 
    //     //          ${request.description}/></li>`
    //     //     return html
    //     //     }
    //     // }
    //     const requestListItems = requests.map(requests => {return `<li> User has requested that we ${requests.description}</li>`})
        
    //         html += requestListItems.join("")
    //         html += "</ul>"
    
    //     return html  
    // }

//     <select class="plumbers" id="plumbers">
//     <option value="">Choose</option>
//     ${
//         plumbers.map(
//             plumber => {
//                 return `<option value="${request.id}--${plumber.id}">${plumber.name}</option>`
//             }
//         ).join("")
//     }
// </select>