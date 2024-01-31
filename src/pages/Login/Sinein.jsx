import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


let user = {
    email: 'a',
    password: 1
}









function Sinein({ data }) {
    const navigate = useNavigate()
    function fnIn(event) {
        event.preventDefault()
        let a = (event.target.email.value)
        let p = (event.target.password.value)
        if (a == user.email && p == user.password) {
            navigate('/')
            window.sessionStorage.setItem('tokin', 'FYTDRRJDRERSDET')
        }else{
            navigate('/login')
        }
    }
    return (
        <div className='Sinein'>
            <form onSubmit={(event) => fnIn(event)} action="#">
                <h2 className='Sinein__title'>Login</h2>
                <div className="Sinein__box">
                    <input type="text" name="email" id="" placeholder='email' />
                    <i class='bx bxs-user'></i>
                </div>
                <div className="Sinein__box">
                    <input type="password" name="password" id="" placeholder='password' />
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
                <button onClick={() => data.setMode(!data.mode)}>Sign in</button>

            </div>
        </div>
    )
}

export default Sinein