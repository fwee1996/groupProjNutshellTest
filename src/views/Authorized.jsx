import { Navigate, useLocation } from "react-router-dom"

// We can access child components the same way we access props. Child components are passed to our props as a key/value pair where
// children is the key.

export const Authorized = ({ children }) => {
  let location = useLocation()

  // Check if user is logged in. If they are, render the CHILD components (in this case, the ApplicationViews component)
  if (localStorage.getItem("nutshell_user")) {//look for honey-user object in local storage see devtools if it exist will return children component you want to make APpView a child of Authorized
    return children
  }
  // If the user is NOT logged in, redirect them to the login page using the Navigate component from react-router-dom
  else {//if dont find honey-user object will go back to login
    return <Navigate to={`/login`} state={{ from: location }} replace />
  }
}
