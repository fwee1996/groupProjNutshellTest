// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import news from './components/news';
// //import OtherComponent from './components/OtherComponent'; // Add other components as needed


//   export const ApplicationViews = () => {

//     //add state to hold our current user
//     //In ApplicationViews create a new state variable for currentUser. 
//    const [currentUser, setCurrentUser] = useState({});

//    //On the initial render of the application, get the user from local storage and set your currentUser.
//    useEffect(() => {
//        const localNutshellUser = localStorage.getItem("nutshell_user");
//        const nutshellUserObject = JSON.parse(localNutshellUser);//DON'T forget this step!
//        setCurrentUser(nutshellUserObject);
//    }, []);

//    return (
//        <>
           
//            <Routes>
              
//                <Route path="/news" element={<news />} /> {/* Use element prop to render components */}
//                <Route path="/newArticle" element={<newArticle currentUser={currentUser} />} /> {/* Pass currentUser as prop */}
//                {/* Add other routes here */}
              
//            </Routes>
//            <Outlet /> {/* Render Outlet to allow rendering of child routes */}
//        </>
//    );
// };

// export default ApplicationViews;




import React, { useState, useEffect } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import news from '../news/news'; // Corrected import

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localNutshellUser = localStorage.getItem("nutshell_user");
    const nutshellUserObject = JSON.parse(localNutshellUser);
    setCurrentUser(nutshellUserObject);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/news" element={<news currentUser={currentUser} />} />
        {/* Add other routes here */}
      </Routes>
      <Outlet />
    </>
  );
};

export default ApplicationViews;
