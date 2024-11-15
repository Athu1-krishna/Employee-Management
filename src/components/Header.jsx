import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className='bg-dark d-flex justify-content-between align-items-center p-5' style={{width:'100vw', height:'60px'}}>
              <Link to={'/'}><span className='text-white' style={{textDecoration:'none'}}>Employee Management App</span></Link>
              <Link to='/add'> <button className='btn btn-success'>Add New Employee</button></Link>
        </div>
    </div>
  )
}

export default Header