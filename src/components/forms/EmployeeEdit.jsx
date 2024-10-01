// //in homepage> profile>employee can edit profile
//see/edit specialty rate & hours 
//step 1 go to NavBar create link/profile button then go create route in ApplicationView
import { useState, useEffect } from "react"
import { getEmployeeByUserId, updateEmployee } from "../../services/employeeService"
import "./Forms.css"
import { useNavigate } from "react-router-dom"//useNav hook returns a fn that allow us to nav


//edit specialty and rate
export const EmployeeForm =({ currentUser })=>{

   const [employee,setEmployee]=useState({})

   //for useNav
   const navigate=useNavigate()
console.log(currentUser)
   //EmployeeServices has fn to get employee by id --useEff to do on initial render
   useEffect(()=>{
    getEmployeeByUserId(currentUser.id).then((data)=>{
        const employeeObj= data//the employee obj is the first and only obj in the data array
        console.log(employeeObj)
        setEmployee(employeeObj[0])
    })
   }, [currentUser]) //dependency currentUser otherwise undefined because current user is empty object
   //so you want to run AGAIN above code block when get current user
   //in appview, get current user--- useEffect const localHoneyUser obj from local storage and set current user with it

   //save the updated Profile:
   const handleSave =(event)=>{
    event.preventDefault()// prevent page refresh bcs button always refresh page so that clicked dont keep appearing and disappearing
    console.log("clicked!")

    const editedEmployee={ 
        //want all properties of employee --cant just use [employee state above, 
        //instead of creating new obj editedEm bcs we get much more than just employee 
        //in employee state we embed emTix and user--dont want to post that in database
        id: employee.id,
        specialty: employee.specialty,
        rate: employee.rate,
        userId: employee.userId,
   }
   //now go to employeeService create a fn to post
   updateEmployee(editedEmployee).then(()=>{
    navigate(`/employees/${currentUser.id}`)//nav to logged in user's employee details after updating profile
   })
   //once click save for updated profile lets take user to employee details
   }

    return ( 
    <form className="profile">
    <>
        <h2>Update Profile</h2>
        <fieldset>
            <div className="form-group">
                <label>Specialty:</label>
                <input 
                type = "text" 
                value={employee?.specialty} 
                onChange={(event)=>{ 
                    //onChange allow you to make changes to input field otherwise it will just display current specialty
                    const copy={ ...employee } 
                    //spread operator {...}: take all the properties of employee and paste them in new object here{}
                    copy.specialty=event.target.value 
                    //this means specialty= whatever user typed in this copy allow you to prreserve object and only update specialty
                    setEmployee(copy)//always use set State fn!
                }} 
                required 
                className="form-control"/>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label>Hourly Rate:</label>
                <input type = "number" value={employee?.rate} 
                required 
                onChange={(event)=>{
                    const copy={...employee} 
                    //spread operator {...}: take all the properties of employee and paste them in new object here{}
                    copy.rate=event.target.value 
                    //this means specialty= whatever user typed in this copy allow you to prreserve object and only update specialty
                    setEmployee(copy)//
                }} className="form-control"/>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <button className="form-btn btn-primary" onClick={handleSave}>Save Profile</button>
            {/* then go back to AppView to change element={..} */}
            </div>
        </fieldset>
        </>
        </form>
    )
    // return<></>
}






