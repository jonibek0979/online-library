import './Home.scss'
import Hero from '../../components/Hero/Hero'
import { Link, useParams } from 'react-router-dom'
import { adib } from '../../lib/adib'
// import { render } from '@testing-library/react'
import { useState } from 'react'

let category = []
function Home() {
  // const locatin = useLocation().pathname
  // console.log(locatin)
  const { type } = useParams()
  const [render,setRender] = useState(true)
  adib.forEach((item) => {
    if (!category.includes(item.type)) {
      category.push(item.type);
    }
  })

  //   const fnSearch = (event) => {
  //     event.preventDefault();

  //     const searchTerm = event.target.elements.searchTerm.value;

  //     console.log( adib.filter((item) => item.name.includes(searchTerm)));
  // }
  let LocData = []
  if (window.localStorage.getItem('LocData')) {
    LocData = JSON.parse(window.localStorage.getItem('LocData'))
  }
  function fnSetItem(id) {
    if (LocData.find((i) => i.id == id)) {
      window.localStorage.setItem('LocData', JSON.stringify(LocData.filter((k) => k.id != id)))
      setRender(!render)
    } else {
      LocData.push(adib.find((item) => item.id == id))
      window.localStorage.setItem('LocData', JSON.stringify(LocData))
      setRender(!render)

    }
  }

console.log(!render);











  return (
    <div className='home'>
      <nav className="home__nav container">
        <Hero />
        {/* <div className="izlash">
    <h2>QIDIRISH</h2>
        <form onSubmit={fnSearch} action="#">
            <input type="text" className='input' name="searchTerm" placeholder='Adiblar, kitoblar, audiolar, maqolalar...' />
            <button type='submit'><i className='bi bi-search'> <b>izlash</b></i></button>
        </form>
  </div> */}

        <div className="home__hero">
          <h2>Asosiy kategoriyalar</h2>
          <ul className="home__hero--list">
            {
              category.length > 1 && category.map((item, index) => (
                <li key={index} className="home__hero--item ">
                  <Link to={`/home/${item}`} className="home__hero--link ">{item} </Link>
                </li>

              ))
            }
          </ul>
          <ul className="home---list">
            {
              adib && type ? adib.filter(k => k.type == type).map((item, index) => (
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
                        <span> <i className={LocData.find(i=> i.id == item.id)? "bi bi-heart-fill": "bi bi-heart"} onClick={()=> fnSetItem(item.id)}></i></span>
                      </div>
                    </div>
                  </div>
                </li>
              )) :
                adib?.map((item, index) => (
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
                          <span> <i className={LocData.find(i=> i.id == item.id)? "bi bi-heart-fill": "bi bi-heart"} onClick={()=> fnSetItem(item.id)}></i></span>

                        </div>
                      </div>
                    </div>
                  </li>
                ))
            }
          </ul>
        
        </div>
      </nav>
    </div>
  )
}

export default Home