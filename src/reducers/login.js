export default function login( state = {
  loggedIn: false,
  userEmail: 'guest',
}, action ) {
  switch ( action.type ) {
    case 'LOGOUT':
      return {
        loggedIn: false,
        userEmail: 'guest',
      };
    case 'LOGIN':
      return {
        loggedIn: true,
        userEmail: action.email,
      };
    default:
      return state;
  }
}