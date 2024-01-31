import React, { createElement, useRef } from 'react';
import './Search.scss';
import { adib } from '../../lib/adib';

function Search() {
  const FnSearch = useRef();
  const fnSearch__List = useRef();
  let adibfn = adib.slice()
  // adibfn.forEach((i) => {
  //   let newLi = createElement('li')
  //   newLi.innerHTML = `
  //   <div className="home__card">
  //     <img src=${i.img} alt="" />
  //   <div className="card__innerr">
  //     <h3>${i.name}</h3>
  //     <p>${i.age}</p>
  //     <div>
  //       <span> <i className='bi bi-book'></i> ${i.book}</span>
  //       <span> <i className='bi bi-headphones'></i> ${i.audio}</span>
  //     </div>
  //   </div>
  // </div>
  //   `
  //   fnSearch__List.appenChild(newLi)
  // })
  function fnSearch(event) {
    event.preventDefault();
    const strSearch = FnSearch.current.value.toLowerCase(); // Tekshirish uchun, kichik-katta harflarni bir qilish
    const filteredAdib = adibfn.filter(item => item.name.toLowerCase().includes(strSearch));
    console.log(filteredAdib);
  }

  return (
    <>
      <div className="izlash">
        <h2>QIDIRISH</h2>
        <form onSubmit={event => fnSearch(event)} action="#">
          <input type="text" ref={FnSearch} className='input' name="searchTerm" placeholder='Adiblar, kitoblar, audiolar, maqolalar...' />
          <button type='submit'><i className='bi bi-search'> <b>izlash</b></i></button>
        </form>
      </div>
      <ul ref={fnSearch__List} className="fnSearch__List">

      </ul>
    </>
  );
}

export default Search;


