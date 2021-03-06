import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={this.props.reviews} restaurantId={this.props.restaurant.id} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {reviews: state.reviews}
}

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({ type:'ADD_REVIEW', review: review}),
  deleteReview: reviewId => dispatch({ type:'DELETE_REVIEW', reviewId})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
