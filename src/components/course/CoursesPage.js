import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursePage extends React.Component{
    constructor(state, context){
        super(state,context);

        this.state = {
            course: {  title: "" }
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course =  this.state.course
        course.title = event.target.value;
       /*  this.setState((prevState,props)=>{
            return {
                course: props.course
            }
        }); */
        this.setState({
            course: course
        });
    }

    onClickSave(){
        //console.log(`Saving ${this.state.course.title}`);
        this.props.createCourse(this.state.course);
    }

    courseRow (course, index){
        return <div key={index}>{course.title}</div>;
    }

    render(){
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />

                <input type="submit" value="Save" onClick={this.onClickSave} />
  
            </div>
        );
    }
}

CoursePage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps){
    return {
        courses: state.courses
    }
}

function mapDispatchToProp(dispatch){
    return{
        createCourse: course =>dispatch(courseActions.createCourse(course))
    }
}

export default connect(mapStateToProps,mapDispatchToProp)(CoursePage);