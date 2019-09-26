const remoteURL = "http://localhost:5002"
export default {
    checkAdmin(username, email, password) {
        return fetch(`${remoteURL}/users?username=${username}&email=${email}&password=${password}`)
            .then(response => response.json())
    }
}