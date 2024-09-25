
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import MiniBank from './components/Pages/MiniBank'
import Loans from './components/Pages/Loans'
import CreditTracker from './components/Pages/CreditTracker'
import Cards from './components/Pages/Cards'
import Calculators from './components/Pages/Calculators'
import ContactUs from './components/Pages/ContactUs'
import Login from './components/Pages/Login'
import Footer from './components/Footer'
function App() {

  const [user, setUser] = useState(null) // Track user login status

  const handleLogout = () => {
    setUser(null) // Reset user state to null on logout
  }



  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="">
      <Navbar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path='/minibank' element={<MiniBank/>} />
        <Route path='/Loans' element={<Loans />} />
        <Route path='/credit Tracker' element={<CreditTracker />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/calculators' element={<Calculators/>} />
        <Route path='/contact us' element={<ContactUs />} />
        <Route
          path='/login'
          element={<Login setUser={setUser} />} // Pass setUser to Login component
        />
      </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
