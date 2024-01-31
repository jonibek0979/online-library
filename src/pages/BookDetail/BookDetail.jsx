
import React from 'react'
import './BookDetail.scss'
import { Link, useParams } from 'react-router-dom'
import { books } from '../../lib/books';

function BookDetail() {
  const { id } = useParams()
  let item = (books.find((i) => i.id == id));
  let itemType = item.type
  return (
    <div className='BookDetail'>
      <div className="container">
        <nav className="BookDetail__nav">
          <div className="BookDetail__hero">
            <img src={item.img} alt="" />
            <div>
            </div>
          </div>
          <div className="BookDetail__inner">
            <h2 className='BookDetail__inner--title'>{item.name}</h2>
            <h5 className='BookDetail__inner__h6'>Javlon Jovliyev</h5>
            <span className='information__span'>
              <h5 className='BookDetail__inner__h5'>JSahifalar soni: <b>{item.pageCount}</b></h5>
              <h5 className='BookDetail__inner__h5'>Chop etilgan: <b>{item.year}</b></h5>
              <h5 className='BookDetail__inner__h5'>Janri: <b>{item.type}</b></h5>
              <h5 className='BookDetail__inner__h5'>Nashriyot: <b>{item.nashriyot}</b></h5>
            </span>
            <div className='BookDetail__inner__div'>
              <h3>To’liq ma’lumot</h3>
              <i className='bi bi-arrow-down'></i>
              <hr />
            </div>
            <p className='BookDetail__iAnner--info'>
              {item.des}
            </p>
            <h4 className='BookDetail__iAnner__h4'>Mavjud formatlar</h4>
            <div className="icons">
              <div className="icon">
                <span className='icons__span'>
                  <i className='bi bi-book'></i>
                  <p>qog'oz kitob</p>
                  <h6>{item.price
                  }</h6>
                </span>
                <span className='icons__span'>
                  <i className='bi bi-headphones'></i>
                  <p>qog'oz kitob</p>
                  <h6>27 000</h6>
                </span>
                <span className='icons__span'>
                  <i className='bi bi-phone'></i>
                  <p>qog'oz kitob</p>
                  <h6>27 000</h6>
                </span>
              </div>
              <button className="icons__button">Javonga qo’shish </button>
            </div>
          </div>
        </nav>
        <div className="Muallif__haqida">
          <ul className="Muallif__haqida__list">
            <li className="Muallif__haqida__item">
              <Link>Muallif__haqida</Link>
            </li>
            <li className="Muallif__haqida__item">
              <Link>Muallif__haqida</Link>
            </li>
            <li className="Muallif__haqida__item">
              <Link>Muallif__haqida</Link>
            </li>
          </ul>
          <div className="Muallif__haqida__wrapper">
            <div className="Muallif__haqida__info">
              <p>
                {item.des}

              </p>
            </div>
            <div className="Muallif__haqida__inner">
              <p>
                {item.des}
              </p>
            </div>
          </div>
          <ul className="Muallif__kitoblar__list">
            <li className="Muallif__kitoblar__item">
              <Link>Sizga yoqishi mumkin</Link>
            </li>
            <li className="Muallif__kitoblar__item">
              <Link>Muallif__haqida</Link>
            </li>

          </ul>
        </div>
        <ul className="book__list">
          {
            books && books.filter((thing) => thing.type == itemType).map((item,index) => (
              <li key={index}  className="book__item">
                <Link to={`/bookDetail/${item.id}`}>
                  <img src={item.img} alt="" />
                </Link>
                <div className="book__card">
                  <h3>{item.name}</h3>
                  <p>♥ 4.1 • 3400 ta fikrlar</p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default BookDetail