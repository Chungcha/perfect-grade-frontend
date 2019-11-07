import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import AdjustedScheduleList from '../components/AdjustedScheduleList'
import ScheduleSidebar from '../components/ScheduleSidebar'
import { fetchAssignments } from '../actions/fetchAssignments'

class SchedulePage extends Component {

  componentDidMount() {
    this.props.fetchAssignments()
    // this.props.fetchCourses()
  }

  render() {
    return (
      <div id='schedule-page' className='offside'>
        <h2>Final Adjusted Schedule</h2>
        {
          this.props.loading ?
            <h5>Please wait, loading assignments</h5>
          :
          <AdjustedScheduleList
            assignments={this.props.assignments}
          />
        }
        <ScheduleSidebar />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    assignments: state.assignmentsReducer.assignments,
    loading: state.assignmentsReducer.requesting
  }
}

function matchDispatchToProps(dispatch) {
  return {
    fetchAssignments: () => dispatch(fetchAssignments()),
    // fetchCourses: () => dispatch(fetchCourses())
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(SchedulePage)
