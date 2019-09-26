const remoteURL = "http://localhost:5002"

export default {

    checkAdmin(username, email, password) {
        return fetch(`${remoteURL}/admins?username=${username}&email=${email}&password=${password}`)
            .then(response => response.json())
    },
    getAdminData() {
        return fetch(`${remoteURL}/admins`)
            .then(response => response.json())
    },
    createNewAdmin(admin) {
        return fetch (`${remoteURL}/admins`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(admin)
        }).then(results => results.json()) 
    }

}