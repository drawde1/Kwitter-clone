import React, { Component } from 'react'
import Button from './Button'
import { connect } from 'react-redux'
import { incrementCount, decrementCount } from '.../redux/actions/likes'
import { connect } from "react-redux"

class Likes extends Component {

handleLikesIncrement = () => {
  this.props.onIncrementClick(this.props.count)
}

handleLikesDecrement = () => {
  this.props.onDecrementClick(this.props.count)
}

render () {
  const {count} = this.props
  return (
    <div>
      <Button action={this.handleLikesIncrement} buttonIcon="" />
      <Button action={this.handleLikesDecrement} buttonIcon=""/>
    </div>
  )
}
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = (dispatch) => {
  reutrn {
    onIncrementClick: (count) => {
      dispatch(incrementCount(count))
    },
    onDecrementClick: (count) => {
      if(count !== 0)
      dispatch(decrementCount(count))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)
