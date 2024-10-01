// import { Route, Routes } from "react-router-dom"
// import "./App.css"
// import { Login } from "./components/auth/Login"
// import { Register } from "./components/auth/Register"
// import { Authorized } from "./views/Authorized"
// import { ApplicationViews } from "./views/ApplicationViews"


// export const App =()=>{
//   return (<>
//     <NavBar /> {/* Render NavBar outside the Routes */}
//   <Routes>

// <Route path="/login" element={<Login/>}/>
// <Route path="/register" element={<Register/>}/>

//     <Route path="*" element={
//       //Authorized checks if user is authorized(honey_user obj found) if so 
//       //then application view is the child component of authorized then routes in appView will be shown
//       <Authorized>
//         <ApplicationViews />
//       </Authorized>
//     }
//     />
//   </Routes>
//   </>
//   )
// }


//define route by wrap route in routes component from react router dom
//Dont need these inside return anymore: 
//{/* <TicketList/> */} 
// {/* <CustomerList/> */}
 // <EmployeeList/>

 //A Route is wrapped in Routes, Route has path and element
 //<Route path= "/tickets" element={<TicketList/>}/>
 //means when url at this path : /tickets
 //render this component <TicketList/>


// <Route path="/" element={<NavBar />} />
//"/" means:home , so always show navbar in the homepage, but we want for all pages how? 
//Wrap "/" Route as parent element around the other child  ROUTE.
//but rmbr RouteS is wrapped around all the above. And also remove / from "/tickets" 
//because no longer same level. now it is a child route of parent "/" home route 
//tell parent route where in relation to parent route path to render child route

//Outlet:
//whenever at/match one of these child routes below will render that element at NavBAr
//whenever find child route that matches will render the child element above NavBar!!!


//Purpose of  <Route index />
//is default child route bcs otherwise home will have welcome but when press ticket 
//or cust or employee their pages will render below each other on homepage

//so open up customer route make it parent route so can put stuff in
//<Route path="employees" element={<EmployeeList/>}/>-------to-------<<Route path="employees" element={<EmployeeList/>}/>  .....</Route>
//but the issue is now all cust render on each cust so need to make index route like with welcome!
//<Route path="customers">make index route here</Route>

//<Route path=":customerId"></Route>
//":customerId" is route parameter, so you can capture cust id--thats a key value pair cust id is key, 
//value is whatevewr id is rwendering like 1,2,3


//Authentication: so all <Routes> protected cant change unless you log in




import React from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Authorized } from "./views/Authorized";
import { ApplicationViews } from "./views/ApplicationViews";
// import NavBar from './components/NavBar'; // Ensure NavBar is imported

export const App = () => {
  return (
    <>
      <NavBar /> {/* Render NavBar outside the Routes */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={
          <Authorized>
            <ApplicationViews />
          </Authorized>
        } />
      </Routes>
    </>
  );
};

export default App;