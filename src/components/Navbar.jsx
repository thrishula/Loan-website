import React from 'react'
import { Link, useNavigate} from 'react-router-dom'

function Navbar({ user, handleLogout }) {

  const navigate = useNavigate()


  return (
    <div className="bg-gray-800  w-full  ">
      <nav className=" w-full p-4">
        <ul className="flex flex-row space-x-14 justify-between list-none ">
          
            <div className='ml-12 font-serif text-2xl'> 
                <li>
                <Link to="/minibank"  className="text-white hover:text-yellow-400 font-medium ">
                Mini-Bank
                 </Link>
            </li>
            </div>
           <div className=' flex flex-row space-x-12'> 
            <li>
                <Link to="/Loans"
                 className="text-white hover:text-yellow-400 font-medium"> Loans</Link>
            </li>
            <li>
                <Link to="/credit Tracker"
                 className="text-white hover:text-yellow-400 font-medium">Credit Tracker</Link>
            </li>
            <li>
                <Link to="/cards"
                 className="text-white hover:text-yellow-400 font-medium">Cards</Link>
            </li>
            <li>
                <Link to="/calculators"
                 className="text-white hover:text-yellow-400 font-medium">Calculators</Link>
            </li>
            <li>
                <Link to="/contact us"
                 className="text-white hover:text-yellow-400 font-medium">Contact us</Link>
            </li>
            </div>
           <div className=''>
           {user ? (
                <li>
                  <button
                    onClick={() => {
                      handleLogout()
                      navigate('/')
                    }}
                    className="text-white hover:text-yellow-400 font-medium"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li>
                  <Link
                    to="/login"
                    className="text-white hover:text-yellow-400 font-medium"
                  >
                    Login
                  </Link>
                </li>
              )}
 
           </div>
           
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
