export default function menu( state = {
  open: false,
}, action ) {
  switch ( action.type ) {
    case 'TOGGLE_MENU':
      return { open: action.open };
    case 'CLOSE_MENU':
      return { open: false };
    default:
      return state;
  }
}