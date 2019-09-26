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
  },
  post(newTeacher) {
    return fetch(`${remoteURL}/teachers`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTeacher)
    }).then(data => data.json())
  },
  update(editedTeacher) {
    return fetch(`${remoteURL}/teachers/${editedTeacher.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedTeacher)
    }).then(data => data.json());
  }
}