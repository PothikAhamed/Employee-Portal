import { useState } from 'react'
import './App.css'

import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashborad'
import TaskUnder from './components/Tasklist/TaskUnder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      {/* <Login/> */}
      <EmployeeDashboard/>
    </div>
    </>
  )
}

export default App
