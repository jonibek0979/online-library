import React, { useState } from 'react'
import './Profil.scss'
import profil from '../../assets/awatar/profile__photo.png'
import { Link } from 'react-router-dom'

function Profil() {

    const [action, setAction] = useState(window.localStorage.getItem('action') || 'book')
    const [data, setData] = useState(JSON.parse(window.localStorage.getItem('LocData')) || [])
    function fnSetAction(value) {
        window.localStorage.setItem('action', value)
        setAction(value);
    }
    return (
        <section className='Profil' >
            <div className="container ">
                <div className="Profil__main">
                    <div className="Profil__photo">
                        <img src={profil} alt="" />
                        <h3>Oltin kitobxon</h3>
                        <p>186 ta kitob o’qigan</p>
                    </div>
                    <div className="Profil__information">
                        <h2>Farruxbek <i>Abdullayev</i> </h2>
                        <h5>Tavallud: <i>February 08, 1999</i> </h5>
                        <h5>Manzili: <i>Jizzax</i> </h5>
                        <h5>Bio:<i> Graphic designer and Developer</i> </h5>
                    </div>
                </div>
                <div className="Profil__wrapper">
                    <div className="Profil__audiyo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/ParkPatriot2015part5-54.jpg" alt="" />
                    </div>
                    <div className="Profil__books">
                        <ul className="Profil__books__list">
                            <li>
                                <button className={action == 'book' ? 'active' : null} onClick={() => fnSetAction('book')}>books
                                <ul className="heart__list">
                            {
                                data && data.map((item, index) => (
                                    <li key={index} className="home---item">
                                        <div className="home__card">
                                            <Link to={`/author/${item.id}`}>
                                                <img src={item.img} alt="" />
                                            </Link>
                                            <div className="card__innerr">
                                                <h3>{item.name}</h3>
                                                <p>{item.age}</p>
                                                <div>
                                                    <span> <i className='bi bi-book'></i> {item.book}</span>
                                                    <span> <i className='bi bi-headphones'></i> {item.audio}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                                </button>

                            </li>
                            <li>
                                <button className={action == 'adib' ? 'active' : null} onClick={() => fnSetAction('adib')}>adib</button>
                            </li>
                        </ul>
                       
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profil