
// // src/components/Navbar.js
// import React from 'react';

// const Navbar = () => {
//   return (
//     <div>
//       {/* Your Navbar content goes here */}
//       <h2>Navbar</h2>
//     </div>
//   );
// };

// export default Navbar;
// jsx
// Copy code
// // src/components/Sidebar.js
// import React from 'react';

// const Sidebar = () => {
//   return (
//     <div>
//       {/* Your Sidebar content goes here */}
//       <h2>Sidebar</h2>
//     </div>
//   );
// };

// export default Sidebar;
// jsx
// Copy code
// // src/components/Dashboard.js
// import React from 'react';

// const Dashboard = ({ username }) => {
//   return (
//     <div>
//       {/* Your Dashboard content goes here */}
//       <h2>Welcome, {username}!</h2>
//       <p>This is your dashboard.</p>
//     </div>
//   );
// };

// export default Dashboard;

// jsx
// Copy code
// // src/App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// import LoginForm from './components/LoginForm';
// import Dashboard from './components/Dashboard';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';

// const App = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [username, setUsername] = useState('');

//   const handleLogin = () => {
//     setLoggedIn(true);
//     // Set the username based on your authentication logic
//     setUsername('exampleUser');
//   };

//   return (
//     <Router>
//       <div>
//         {/* Layout with Navbar and Sidebar */}
//         {loggedIn && <Navbar />}
//         {loggedIn && <Sidebar />}   

//         {/* Routes */}  
//         <Route  
//           path="/login"     
//           render={() =>    
//             loggedIn ? (     
//               <Redirect to="/dashboard" />        
//             ) : (
//               <LoginForm onLogin={handleLogin} />         
//             )
//           }
//         />
//         <Route
//           path="/dashboard"  
//           render={() =>
//             loggedIn ? <Dashboard username={username} /> : <Redirect to="/login" />  
//           }
//         />
//       </div>  
//     </Router>     
//   );
// };

// export default App;






