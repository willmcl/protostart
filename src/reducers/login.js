export default function login( state = {
  loggedIn: !!localStorage.getItem('Protostart_username'),
  userEmail: localStorage.getItem('Protostart_username') || 'guest',
}, action ) {
  switch ( action.type ) {
    case 'LOGOUT':
      localStorage.removeItem('Protostart_username');
      return {
        loggedIn: false,
        userEmail: 'guest',
      };
    case 'LOGIN':
      localStorage.setItem('Protostart_username', action.email);
      return {
        loggedIn: true,
        userEmail: action.email,
      };
    default:
      return state;
  }
}