import React, { Component } from 'react'
    //import the components we will need
    import StudentCard from './StudentCard'
    import StudentManager from '../../modules/StudentManager'

    class StudentList extends Component {
        //define what this component needs to render
        state = {
            students: [],
        }

    componentDidMount(){
        console.log("Student LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        StudentManager.getAll()
        .then((students) => {
            this.setState({
                students: students
            })
        })
    }

    deleteStudent = id => {
        StudentManager.delete(id)
        .then(() => {
          StudentManager.getAll()
          .then((newStudents) => {
            this.setState({
                students: newStudents
            })
          })
        })
      }

    render(){
        console.log("StudentLIST: Render");

        return(
            <div className="container-cards">
                {this.state.students.map(student => 
                  <StudentCard 
                  key={student.id} 
                  student={student}
                  deleteStudent={this.deleteStudent} />
                )}
            </div>
        )
    }
}

export default StudentList
