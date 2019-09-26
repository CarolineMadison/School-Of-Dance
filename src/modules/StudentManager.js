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
  },
  post(newStudent) {
    return fetch(`${remoteURL}/students`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newStudent)
    }).then(data => data.json())  
  },
  update(editedStudent) {
    return fetch(`${remoteURL}/students/${editedStudent.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedStudent)
    }).then(data => data.json());
  }
}