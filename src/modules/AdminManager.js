const remoteURL = "http://localhost:5002"
export default {
    getAdminData() {
        return fetch(`${remoteURL}/welcome`)
            .then(response => response.json())
    },
    get() {
        return fetch(`${remoteURL}/users`)
            .then(response => response.json())
    },

    getUser(id) {
        return fetch(`${remoteURL}/users/${id}`)
            .then(response => response.json())
    },
    checkUser(email, password) {
        return fetch(`${remoteURL}/users?email=${email}&password=${password}`)
            .then(response => response.json())
    },
    editUser(id, obj) {
        return fetch(`${remoteURL}/users/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(data => data.json())
    },
    deleteProfile(id) {
        return fetch(`${remoteURL}/profile/${id}`, {
            method: "DELETE"
        })
        .then(result => result.json())
    },
    patchUser(id, obj) {
        console.log("hey")
        console.log(id, obj)
        return fetch(`${remoteURL}/users/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(data => data.json())
    }
}