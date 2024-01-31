import React from 'react'
import './Books.scss'
import Hero from '../../components/Hero/Hero'
// import Search from '../../components/search/Search'
import { books } from '../../lib/books'
import { Link, useParams } from 'react-router-dom'
import BooksCard from '../../components/BooksCard/BooksCard'
// import { adib } from '../../lib/adib'
// import { adib } from '../../lib/adib'
function Books() {
  //   const fnSearch = (event) => {
  //     event.preventDefault();

  //     const searchTerm = event.target.elements.searchTerm.value;

  //     console.log( adib.filter((item) => item.name.includes(searchTerm)));
  // }
  return (
    <section className='Books'>
      <Hero />
      {/* <div className="izlash">
    <h2>QIDIRISH</h2>
        <form onSubmit={fnSearch} action="#">
            <input type="text" className='input' name="searchTerm" placeholder='Adiblar, kitoblar, audiolar, maqolalar...' />
            <button type='submit'><i className='bi bi-search'> <b>izlash</b></i></button>
        </form>
  </div> */}
      <div className="container">
        <ul className="books__list">
          {
            books && books.map((item, k) => (
              <li key={k} className="books__item">
                <BooksCard item={item} />
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default Books