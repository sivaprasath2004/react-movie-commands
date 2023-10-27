import React from 'react'
import './Home.css'
import star from './icons/star.png'
import { Link } from 'react-router-dom'
import {FaMobileAlt,FaTabletAlt,FaLaptop} from 'react-icons/fa'
const Home = ({datas,width}) => {
  let datas_values=datas;
  let values =JSON.parse(localStorage.getItem('Posts'))!=null?JSON.parse(localStorage.getItem('Posts')):datas_values;
  return (
    <>
    <div className={`commands`}>
    <div className='window_size_icon'>
        <header>Movie Commands</header>
        <h5>
        {width<768?<FaMobileAlt/>
        :width<992?<FaTabletAlt/>
    :<FaLaptop/>}</h5>
    </div>

     {values.map((value)=>(
      <Link to={`post/${value.id}`} id='a'><div id='Content_box'>
    <p key={value.id} id={`contents`}><span id='movie'>{value.movie?(value.movie.length>=20?value.movie.slice(0,22)+'...':value.movie):'Not specify'}</span><br/><span id='review'>{value.review?(value.review.length>=20?value.review.slice(0,22)+'...':value.review):"Not specify"}</span><br/><img src={star} alt='rating Icon'/><span id='rating'> {value.rating?(value.rating.length>=20?value.rating.slice(0,22)+'...':value.rating):'Not specify'}</span></p>
    </div></Link>))}
    </div></>
)
}

export default Home



    
 