const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/studios/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/studios`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/studios/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(newStudio) {
    return fetch(`${remoteURL}/studios`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newStudio)
    }).then(data => data.json())
}
}