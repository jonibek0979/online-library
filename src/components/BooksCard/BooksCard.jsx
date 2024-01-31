import React from 'react'
import { Link } from 'react-router-dom'

function BooksCard({ item }) {
  return (
    <div className="item__card">
      <Link to={`/bookDetail/${item.id}`}>
        <img src={item.img} alt="" />
      </Link>
      <h3>{item.name}</h3>
      <p>{item.adibName}</p>
      <h6>sdhfugyryg</h6>
    </div>
  )
}

export default BooksCard