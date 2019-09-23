import React, { Component } from 'react'
import TeacherCard from './TeacherCard'
import TeacherManager from '../../modules/TeacherManager'

class TeacherList extends Component {
    state = {
        teachers: [],
    }

    componentDidMount() {
        TeacherManager.getAll()
            .then((teachers) => {
                this.setState({
                    teachers: teachers
                })
            })
    }

    deleteTeacher = id => {
        TeacherManager.delete(id)
            .then(() => {
                TeacherManager.getAll()
                    .then((newTeachers) => {
                        this.setState({
                            teachers: newTeachers
                        })
                    })
            })
    }

    render() {

        return (
            <div className="container-cards">
                {this.state.teachers.map(teacher =>
                    <TeacherCard
                        key={teacher.id}
                        teacher={teacher}
                        deleteTeacher={this.deleteTeacher} />
                )}
            </div>
        )
    }
}

export default TeacherList
