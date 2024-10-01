import { useState } from "react"
import "./Forms.css"
import { createTicket } from "../../services/ticketService"
import { useNavigate } from "react-router-dom"
//cust create ticket:
//create ticket button take you to new service ticket form
//step 1: go to FilterBar -useNav()
//step 2:TicketForm create fn: so you know in ticket form user will see description input and emergency tick button 
export const TicketForm =({currentUser})=>{
//capture user input in description: define state to hold ticket
const [ticket,setTicket]=useState({description:"", emergency: false})
//we want to add all properties we need to tix obj
//capture input n store as properties in ticket obj--so add onchange in <input description below ---when value input changes, set description of tix to be that value

const navigate=useNavigate()

//first go to TicketService.jsx to create a fn that POST newly created tix:
const handleSave=(event)=>{
//prevent default behavior of button that refreshes:
event.preventDefault()

    //each ticket needs useId and date completed--add these b4 send to database
    //check if there description b4 send
    if (ticket.description){
//need userId from currentUser-so go to CustViews.jsx and put create currentUser={currentUser} in <TicketForm !! Then put currentUser in export fn declaration above as well!
        const newTicket={
            userId: currentUser.id,
            description: ticket.description,
            emergency: ticket.emergency,
            dateCompleted:"",
        }
        createTicket(newTicket)
        //when user submits new tix they go back to tickets view so declare navigate and useNav above handleSave fn
        navigate("/tickets")
    }else{window.alert("Please fill out the description!")}
}

return (
<form>
    <h2>New Service Ticket</h2>
        <fieldset>
            <div className="form-group">
                <label>Description</label>
                <input type="text" className="form-control" placeholder="Brief description of problem" 
                onChange={(event)=>{
//rmbr EmploEdit:must make copy of the state obj before setting it if we just want to change the state properties
                    const ticketCopy={...ticket}
                    ticketCopy.description=event.target.value//to get user input, captured on the event.event.target gets the user input. the event is obj rep what is happening, target is the element which the thing is happening, and value of <input.. >above
                    setTicket(ticketCopy)
               }}/>
            </div>
        </fieldset>

   {/* for emergency tick box: */}
   <fieldset>
    <div className="form-group">
        <label>Emergency:<input type="checkbox" onChange={(event)=>{
            const ticketCopy={...ticket}
            ticketCopy.emergency=event.target.checked
            setTicket(ticketCopy)  // set tix with new value
        }}/>
        {/* update Emergency checkbox in cust view of create tix page 
        if "checkbox" is checked: event.target.checked is true if not false*/}
        </label>
    </div>
   </fieldset>

   {/* buttons: */}
   <fieldset><div className="form-group">
    <div className="form-group"><button className="form-btn btn-info" onClick={handleSave}>Submit Ticket</button></div>
   </div></fieldset>
{/* now go to CustViews.jsx to update route */}

{/* chapter 16 so the issue is button has default refresh but we we it to do onClick instead so put (event) in handleSave fn line declaration*/}
{/* the go up up and put event.preventDefault! */}
</form>)
}



