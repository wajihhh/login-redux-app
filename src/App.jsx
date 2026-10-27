// import { useState } from 'react'
// import Signup from './pages/Signup'
// import './App.css'
// import Login from './pages/Login'
// import Dashboard from './pages/Dashboard'

// function App() {
//   // const [count, setCount] = useState(0)

//   return (
   

//      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <Dashboard />
//     </div>
//   )
// }

// export default App


// import { useSelector } from 'react-redux'
// import Signup from './pages/Signup'
// import Login from './pages/Login'
// import Dashboard from './pages/Dashboard'

// function App() {
//   const isLoggedIn = useSelector(
//     (state) => state.auth.isLoggedIn
//   )

//   const currentUser = useSelector(
//     (state) => state.auth.currentUser
//   )

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       {isLoggedIn && currentUser ? (
//         <Dashboard />
//       ) : (
//         <Login />
//       )}
//     </div>
//   )
// }

// export default App



import { useState } from 'react'
import { useSelector } from 'react-redux'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'

function App() {
  const [showSignup, setShowSignup] = useState(false)

  const isLoggedIn = useSelector(
    (state) => state.auth.isLoggedIn
  )

  const currentUser = useSelector(
    (state) => state.auth.currentUser
  )

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {isLoggedIn && currentUser ? (
        <Dashboard />
      ) : showSignup ? (
        <Signup
          onLoginClick={() => setShowSignup(false)}
        />
      ) : (
        <Login
          onSignupClick={() => setShowSignup(true)}
        />
      )}
    </div>
  )
}

export default App
