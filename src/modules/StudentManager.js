const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/students/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/students`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/students/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  }
}