const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/teachers/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/teachers`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/teachers/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  }
}