import React from 'react'
import { AiFillLock, AiOutlineMail } from 'react-icons/ai'
import {Link} from 'react-router-dom'

function SignIn() {
  return (
    <div>
      <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
        <h1 className='text-2xl font-bold'>Sign In</h1>
        <form >
          <div className='my-4'>
            <label>Email</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
              <input className='w-full p-2 bg-primary border border-input rounded-2xl' type="email" />
              <AiOutlineMail />
            </div>
          </div>
          <div className='my-4'>
            <label>Password</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
              <input className='w-full p-2 bg-primary border border-input rounded-2xl' type="password"/>
              <AiFillLock />
            </div>
          </div>
          <button>Sign In</button>
        </form>
        <p>Dont have an account? <Link to='/signup'>Sign Up</Link></p>
      </div>
    </div>
  )
}

export default SignIn