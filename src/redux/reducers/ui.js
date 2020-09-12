import { TOGGLE_SWITCHER } from '../actions/index'
import { LIGHT_MODE, DARK_MODE } from '../../components/assets/styles'

export default (
  state = {
    isDarkMode: true,
    ...DARK_MODE
  },
  action
) => {
  switch (action.type) {
    case TOGGLE_SWITCHER:
      const isDarkMode = !state.isDarkMode;
      const colorObject = isDarkMode ? DARK_MODE : LIGHT_MODE;
      return { ...state, isDarkMode, ...colorObject };
    default:
      return state;
  }
}