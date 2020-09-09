import { connect } from 'react-redux'
import * as Actions from ''
import CounterComponent from '../../components/likes/Counter'

const mapStateToProps = (state) => ({
  count: state.counterReducer.count
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(counterIncrement),
  decrement: () => dispatch(counterDecrement)
});

export const counterIncrement = () => ({
  type: actions.COUNTER_INCREMENT
})

export const counterDecrement = () =({
  type: actions.COUNTER_DECREMENT
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent)