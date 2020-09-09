import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { Button, Icon, Label } from 'semantic-ui-react'

const mapStatetoProps = state => ({
  counter: state
})

const mapDispatchToProps = {
  incrementAction,
  decrementAction
}

 const Counter = props =>
  <div class="ui labeled button" tabIndex="0">
  <button class="ui blue button" onClick={props.onIncrement}>
      <i class="heart icon"></i> Like(s)
  </button>
  <a class="ui basic blue left pointing label">
      {props.likes.length} 
  </a>
  </div>
  <div class="ui labeled button" tabIndex="0">
  <button class="ui red button" onClick={props.onDecrement}>
      <i class="frown icon"></i> Dislikes
  </button>
  <a class="ui basic left pointing red label">
      {props.counter.value}
  </a>
  </div>

export default connect(mapStatetoProps, mapDispatchToProps)(Counter)
