
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../features/auth/authSlice'

function Dashboard() {
  const dispatch = useDispatch()

  const currentUser = useSelector(
    (state) => state.auth.currentUser
  )

  function handleLogout() {
    dispatch(logoutUser())
  }

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4">
        Dashboard
      </h1>

      <p className="text-gray-700 mb-4">
        Welcome, {currentUser?.name}!
      </p>

      <button
        onClick={handleLogout}
        className="w-full bg-red-600 text-white p-3 rounded"
      >
        Logout
      </button>
    </div>
  )
}

export default Dashboard
