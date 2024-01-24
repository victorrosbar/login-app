import React, {useState} from 'react'
import './LoginApp.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

export const LoginApp = () => {

  const [action,setAction] = useState('Login');

  return (
    <div className='container'>
        <div className='header'>
          <div className='text'>{action}</div>
          <div className='underline'></div>
        </div>
        <div className='inputs'>
          {action === 'Login'?<div/>:<div className='input'>
            <img src={user_icon} alt='' />
            <input type='text' placeholder='Name'/>
          </div>}
          
          <div className='input'>
            <img src={email_icon} alt='' />
            <input type='email' placeholder='Email'/>
          </div>
          <div className='input'>
            <img src={password_icon} alt='' />
            <input type='password' placeholder='Password'/>
          </div>
        </div>
        {action === 'Sign Up'?<div/>:<div className='forgot-password'>Lost Password? <span>Click Here!</span></div>}
        <div className='submit-container'>
          <div className={action==='Login'?'submit disabled':'submit'} onClick={()=>{setAction('Sign Up')}}>Sign Up</div>
          <div className={action==='Sign Up'?'submit disabled':'submit'} onClick={()=>{setAction('Login')}}>Login</div>
        </div>
    </div>
  )
}
