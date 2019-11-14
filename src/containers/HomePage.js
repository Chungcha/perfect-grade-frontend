import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import CourseCards from '../components/CourseCards'
import HomePageBtns from '../components/HomePageBtns'


class HomePage extends Component {

  render() {
    return (
      <div className='offside' id='home-page'>
        <img id='main-logo' src='https://i.imgur.com/yh4Je8f.png' />
        {/* <h1 id='main-header'>Perfect Grade</h1> */}
        {
          this.props.loading ?
            <h5>Loading...</h5>
          :
          <Fragment>
            <CourseCards
              courses={this.props.courses}
            />
            <HomePageBtns/>
          </Fragment>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    courses: state.coursesReducer.courses,
    loading: state.coursesReducer.requesting
  }
}

export default connect(mapStateToProps)(HomePage)
