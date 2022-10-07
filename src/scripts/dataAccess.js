/*
*todo: create a requests property w/ value of empty array 
*todo: import fn() for the fetch request
*todo: make getter fn() that maps the state of requests
*todo: //? do I create  a fetch for comopletions?
todo: make saveCompletion()
*/
const mainContainer = document.querySelector("#container")

const applicationState = {
    requests: [],
    plumbers: [],
    completions: []
}

const API = "http://localhost:8088"

//refactor for this to be fetchCompletions:
export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
        .then(response => response.json())
        .then(
            (completed) => {
                // Store the external state in application state
                applicationState.completions = completed
            }
        )
}


export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}


export const fetchPlumbers = () => {
    return fetch(`${API}/plumbers`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.plumbers = data
            }
        )
}

//getter

export const getRequests = () => {
    return applicationState.requests.map(requests => ({...requests}))
}

export const getPlumbers = () => {
    return applicationState.plumbers.map(plumbers => ({...plumbers}))
}

// HTTP Post Request w/ Fetch copy and paste:

export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged")) // aadded this line to display new state
        })
}

//refactor to be the saveCokmpletion() POST request:
export const saveCompletion = (completedRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completedRequest)
    }


    return fetch(`${API}/completions`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged")) // aadded this line to display new state
        })
}


//delete w/ fetch code copy pasta
export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
