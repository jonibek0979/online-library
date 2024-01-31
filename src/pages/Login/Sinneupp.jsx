import React from 'react'
import { Link } from 'react-router-dom'


function Sinneupp({data}) {
  return (
    <div className='Sineup'>
    <form action="#">
        <h2 className='Sinein__title'>Login</h2>
        <div className="Sinein__box">
            <input type="text" name="" id="" placeholder='first name'  />
            <i class='bx bxs-user-plus' ></i>
        </div>
        <div className="Sinein__box">
            <input type="text" name="" id="" placeholder='last name'  />
            <i class='bx bxs-user-plus' ></i>
        </div>
        <div className="Sinein__box">
            <input type="number" name="" id="" placeholder='phone'  />
            <i class='bx bxs-phone'></i>
        </div>
        <div className="Sinein__box">
            <input type="text" name="" id="" placeholder='email'  />
            <i class='bx bxs-user' ></i>
        </div>
        <div className="Sinein__box">
            <input type="password" name="" id="" placeholder='password'  />
            <i class='bx bxs-lock-alt' ></i>
        </div>
        <div className="remember__forgot">
            <label htmlFor="">
                <input type="checkbox" name="" id="" /> remember me
            </label>
            <Link>forgot password</Link>
        </div>
        <button type='submit' className='form__btrn'>Login</button>
        <div className="register__link">
            <p>don't have an account <Link>register</Link></p>
        </div>
    </form>
    <div className="LOGUP">
        <button onClick={()=> data.setMode(!data.mode)}>Sign up</button>
    </div>
</div>
  )
}

export default Sinneupp