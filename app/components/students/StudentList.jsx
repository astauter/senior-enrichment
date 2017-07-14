import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

function StudentList ({students}) {
    return (
        <div>
            <h2>STUDENTS</h2>
            <div className='row'>
                {
                    students.map(student => (
                        <div className='col-xs-4' key={student.id}>
                            <Link to={`/students/${student.id}`}>
                            <h3>{student.name}</h3>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        students: state.students
    }
}

const mapDispatchToProps = null

export default connect(mapStatetoProps, mapDispatchToProps)(StudentList)
