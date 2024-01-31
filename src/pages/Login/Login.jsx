import React, { useState } from 'react'
import './Login.scss'
import Sinein from './Sinein'
import Sinneupp from './Sinneupp'

function Login() {
  const [mode , setMode] = useState(true)
  const [action,setAction] = useState('Login')
  return (
    <div className='login'>
      <div className="container">
  {
    mode ? <Sinein data={{mode , setMode}}/> :<Sinneupp data={{mode , setMode}}/>
  }
     
    
      
  

      </div>
    </div>
  )
}

export default Login