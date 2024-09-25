import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({ setUser }) {
  const [isRegistering, setIsRegistering] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: ''
  })
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleLogin = () => {
    if (formData.username && formData.password) {
      setUser(formData.username)
      navigate('/minibank') // Redirect to MiniBank page after login
    } else {
      alert('Please enter a valid username and password')
    }
  }

  const handleRegister = () => {
    if (
      formData.username &&
      formData.email &&
      formData.password === formData.confirmPassword
    ) {
      setUser(formData.username)
      navigate('/minibank') // Redirect to MiniBank page after registration
    } else {
      alert('Please fill out all fields correctly')
    }
  }

  return (
    <div className='bg-blue-100 min-h-screen'>
       
    <div className=" mx-auto max-w-md p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">
        {isRegistering ? 'Register' : 'Login'}
      </h1>
      {isRegistering ? (
        <>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            className="block w-full mb-2 p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="block w-full mb-2 p-2 border rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="block w-full mb-2 p-2 border rounded"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="block w-full mb-2 p-2 border rounded"
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleInputChange}
            className="block w-full mb-2 p-2 border rounded"
          />
          <button
            onClick={handleRegister}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
          >
            Register
          </button>
          <p
            onClick={() => setIsRegistering(false)}
            className="text-blue-500 mt-2 cursor-pointer"
          >
            Already have an account? Login here
          </p>
        </>
      ) : (
        <>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            className="block w-full mb-2 p-2 border rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="block w-full mb-2 p-2 border rounded"
          />
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
          >
            Login
          </button>
          <p
            onClick={() => setIsRegistering(true)}
            className="text-blue-500 mt-2 cursor-pointer"
          >
            Don't have an account? Register here
          </p>
        </>
      )}
    </div>
    </div>
  )
}

export default Login
