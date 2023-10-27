import React from 'react'
import { useState } from 'react'
import './post.css'
import { useNavigate } from 'react-router-dom'
const Post = ({datas}) => {
  let datas_values=datas;
  const navigate=useNavigate()
    let rating,review,movie
    let newpost
    function input_rating(e){
    rating=e.target.value
    }
    const [values,setValues]=useState(JSON.parse(localStorage.getItem('Posts'))!=null?JSON.parse(localStorage.getItem('Posts')):datas_values);
    function input_review(e){
        review=e.target.value
        
    }
    function input_movie(e){
        movie=e.target.value
    }
    
    function handle_submit(e){
      e.preventDefault()
    }
 function submitted(){
     newpost={movie:movie,review:review,rating:rating}
     const id=values.length?values[values.length-1].id+1:1;
      if ((movie===undefined && review===undefined && rating===undefined) || (movie.length===0 && review.length===0 && rating.length===0)){
        navigate('/')
        }
        else{
          const displaypost={id,movie:newpost.movie,review:newpost.review,rating:newpost.rating}
        const allposts=[...values,displaypost]
        localStorage.setItem('Posts',JSON.stringify(allposts))
        setValues(allposts)
        navigate('/')
      }
    }
    
  return (
    <>
  
    <div className='body_content'>
    <form onSubmit={handle_submit} id='form'>
    <label>Movie</label>
    <input id="input" value={movie} type='text' onChange={input_movie} required/><br/>
    <label>Review</label>
    <textarea  className='review' value={review} type='text' onChange={input_review} required/><br/>
    <label>Rating</label>
    <input id="input" value={rating} type='text' onChange={input_rating} required/><br/>
    <button onClick={submitted} id='submit'>Submit</button>
    </form></div>
     </>
  )
}
export default Post;
