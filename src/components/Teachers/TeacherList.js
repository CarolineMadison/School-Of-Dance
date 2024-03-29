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
            <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { this.props.history.push("/teachers/new") }}>
                    Hire a New Teacher
                </button>
            </section>
            <div className="container-cards">
                {this.state.teachers.map(teacher =>
                    <TeacherCard
                        key={teacher.id}
                        teacher={teacher}
                        deleteTeacher={this.deleteTeacher} 
                        {...this.props}
                        />
                )}
            </div>
            </>
        )
    }
}

export default TeacherList
