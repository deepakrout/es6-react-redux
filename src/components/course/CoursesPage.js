import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursePage extends React.Component{
    constructor(state, context){
        super(state,context);

        this.state = {
            course: {  title: "" }
        };
/*         this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this); */
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

  /*   onTitleChange(event) {
        const course =  this.state.course
        course.title = event.target.value;
          this.setState({
            course: course
        });
    }

    onClickSave(){

        this.props.actions.createCourse(this.state.course);
    } */

    courseRow (course, index){
        return <div key={index}>{course.title}</div>;
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    render(){
        const {courses} = this.props;
        //debugger;
        return (
            <div>
                <h1>Courses</h1>
                <input type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage}/>
                <br/>    
                <CourseList courses = {courses} />
            </div>
        );
    }
}

CoursePage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired 
}

function mapStateToProps(state, ownProps){
    return {
        courses: state.courses
    }
}

function mapDispatchToProp(dispatch){
    return{
       // createCourse: course =>dispatch(courseActions.createCourse(course))
       actions: bindActionCreators(courseActions,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProp)(CoursePage);