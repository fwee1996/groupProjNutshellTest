import "./NavBar.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
//make NavBAr:

export const EmployeeNav = () =>{
const navigate=useNavigate()

    return (<ul className="navbar">
<li className="navbar-item">
<Link to="/tickets">Tickets</Link> 
</li>
<li className="navbar-item">
<Link to="/customers">Customers</Link> 
</li>
<li className="navbar-item">
<Link to="/employees">Employees</Link> 
</li>
<li className="navbar-item">
<Link to="/profile">Profile</Link> 
</li>
{localStorage.getItem("honey_user") ? (
  <li className="navbar-item navbar-logout">
    <Link
      className="navbar-link"
      to=""
      onClick={() => {
        localStorage.removeItem("honey_user") //when user click logout honey_user object removed and navigate back to home
        navigate("/", { replace: true })
      }}
    >
      Logout
    </Link>
  </li>
) : (
  ""
)}
    </ul>)
}

//so we have navbar <li className="navbar-item">
//we have link when user click on ticket, App.jsx  listens for it in App fn, 
//go to /tickets page <Link to="/tickets">Tickets</Link> 
//then you'll see tickets

//step2:link to customers


