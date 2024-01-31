import React from 'react'
import './AuDetail.scss'
import { Link, useParams } from 'react-router-dom'
import { adib } from '../../lib/adib';
import { books } from '../../lib/books';

function AuDetail() {
  const { id } = useParams()
  let filBooks = books.filter((thing) => thing.adibId == id)
  let adibFind = adib.find((item) => item.id == id)

  return (
    <div className='AuDetail'>
      <div className="container">
        <nav className="AuDetail__nav">
          <div className="AuDetail__hero">
            <img src={adibFind.img} alt="" />
            <div>
              <span>
                <b>Tavallud sanasi</b>
                <h2>{adibFind.born}</h2>
                <b>{adibFind.city}</b>

              </span>
              <h4 className='line'>-</h4>
              <span>
                <b>Tavallud sanasi</b>
                <h2>{adibFind.olgan}</h2>
                <b>{adibFind.city}</b>

              </span>
            </div>
            {/* <div className="caruusel">
              <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="https://www.sunmattu.net/wp-content/uploads/image-1536.png" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="https://overclockers.ru/st/legacy/blog/427135/443134_O.png" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="https://i.ytimg.com/vi/94G8XBZDHL0/sddefault.jpg" class="d-block w-100" alt="..." />
                  </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div> */}
          </div>
          <div className="AuDetail__inner">
            <h2 className='AuDetail__inner--title'>{adibFind.name}</h2>
            <p className='AuDetail__iAnner--info'>
              {adibFind.des}
            </p>
            <span className='uDetail__iAnner--span '>
              <i> <i className='bi bi-flag'></i> ijodi</i>
              <p>
                {adibFind.creativity}
              </p>
            </span>
            <span className='asarlar__span'>
              <h2 className='asarlar'>asarlar</h2>
              <p>Barchasini ko’rish</p>
            </span>
            <ul className="card__list">
              {
                filBooks && filBooks.map((thing, index) => (
                  <li key={index} className="card__item">
                      <Link to={`/bookDetail/${thing.id}`}><img src={thing.img} alt="" /></Link>
                    <div className="list__card">
                      <h2>{thing.adibName}</h2>
                      <p> ☻ 4.1 • 3400 ta fikrlar</p>
                    </div>
                  </li>
                ))

              }
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default AuDetail