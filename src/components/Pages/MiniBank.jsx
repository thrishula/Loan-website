import React from 'react'

function Moneyview() {
  return (
    <div className=''>
      <div className=' max-w-6xl mx-auto p-8  flex items-center bg-white rounded-lg shadow-lg  mb-10'>
        <div className='w-1/2 mt-3 '><img className="rounded-3xl w-[400px] h-[300px] ml-10"src='Images/house-investments-elements-assortment_23-2148793805.avif' alt='' /></div>
        <div className='w-1/2 mr-12 mt-3'>
          <h1  className='text-4xl font-bold text-orange-500 mb-4'>HOME LOAN</h1>
          
          <p className='text-lg text-gray-600 mr-40 mb-4'>
            A home loan is a financial solution that allows you to buy or construct your dream house. 
            With affordable interest rates and flexible repayment options, applying for a home loan 
            is one of the easiest ways to make your dream a reality.
          </p>
          <p className='text-lg text-gray-600'>
            Take advantage of attractive interest rates and easy documentation to get your home loan approved. 
            With quick processing and minimal paperwork, you can become a homeowner sooner than you think!
          </p>
        </div>
        </div>
         {/* carloan-section */}
         <div  className="max-w-6xl mx-auto p-8 flex items-center bg-white rounded-lg shadow-lg mb-10">
          <div className='w-1/2 mt-3'><img className="rounded-3xl w-[400px] h-[300px] ml-10" src='Images\happy-woman-buying-new-car-automobile-store_74855-14072.avif'  alt=''/></div>
          <div className='w-1/2 mr-12 mt-3'><h1 className='text-4xl font-bold text-orange-500 mb-4'>CAR LOAN</h1>
          <p className="text-lg text-gray-600 mb-4">
            A car loan gives you the flexibility to purchase your dream car without financial constraints. With attractive interest rates and simple repayment plans, owning your own vehicle has never been easier.
          </p>
          <p className="text-lg text-gray-600">
            Whether you're buying a new or used car, our car loans offer fast approvals and flexible terms to suit your needs.
          </p>
          </div>
        </div>
        {/* personal loan section */}
        <div className="max-w-6xl mx-auto p-8 flex items-center bg-white rounded-lg shadow-lg mb-10">        
          <div className='w-1/2 mt-3'><img  className="rounded-3xl w-[400px] h-[300px] ml-10"src='Images/high-angle-father-daughter-with-piggy-bank_23-2148542846.avif' alt='' /></div>
        <div className='w-1/2 mr-12 mt-3'><h1 className='text-4xl font-bold text-orange-500 mb-4'>PERSONAL LOAN</h1>
        <p className="text-lg text-gray-600 mb-4">
            A personal loan is a versatile financing option for various personal expenses, such as home renovations, travel, or medical emergencies. With no collateral required, personal loans offer quick access to funds with flexible repayment terms.
          </p>
          <p className="text-lg text-gray-600">
            Apply for a personal loan today and enjoy fast approval and hassle-free processing.
          </p>
        </div>
        </div>
      
    </div>
    
  )
}

export default Moneyview
