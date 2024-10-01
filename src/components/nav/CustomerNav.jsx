import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const CustomerNav =() =>{

    //step 2: define navigate in <ul></ul>:to use useNavigate hook in ul navigate below: 
    //useNav return a fn thats stored in variable navigate
    const navigate= useNavigate()


    return <ul className="navbar">
        {/* step 3: chapter 15
        //tickets view for cust: when cust click on tickets in nav bar, go to ticketlist 
        //so they can see tickets they created, they can delete those tix,
        //they can see buttons: create tix, open tix(display only open tix) and all my tix.   
        //also a link to edit ticket when you click on Ticket#
        //rmbr for employee you saw emergency and show all button*/}
        <li className="navbar-item">
           <Link className="navbar-link" to ="/tickets">Tickets</Link>
        </li>{/* now add a route to listen for that path CustomerViews*/}
        

        {/* step 1: copy paste from emNav */}
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
      </ul>
}