import React, { useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'

const EditPost = ({datas}) => {
    let {id}=useParams()
    let datas_values=datas;
    const navigate=useNavigate()
    const values=JSON.parse(localStorage.getItem('Posts'))!==null?JSON.parse(localStorage.getItem('Posts')):datas_values;
    let value=values.find(post=>(post.id).toString()===id)
    let [Movie,setMovie]=useState(value.movie)
    let [Rating,setRating]=useState(value.rating)
    let [Review,setReview]=useState(value.review)
    let array_value=[]
    function handle_submit(e){
        e.preventDefault()
      }
      function Submit(){
        id=Number(id)
        let new_values={id,'movie':Movie,'review':Review,'rating':Rating}
        array_value.push(new_values)
        values.forEach(commands => {
      if(commands.id===id){console.log()}
      else{array_value.push(commands)}
    });
        localStorage.setItem('Posts',JSON.stringify(array_value))
        navigate('/')
    }
      
  return (
    <>
    <div className='body_content'> 
    <form onSubmit={handle_submit} id='form'>
    <label>Movie</label>
    <input id="input" value={Movie} type='text' onChange={(e)=>{setMovie(e.target.value)}} required/><br/>
    <label>Review</label>
    <textarea className='review'  value={Review} type='text' onChange={(e)=>{setReview(e.target.value)}} required/><br/>
    <label>Rating</label>
   <input id="input" className='ratting' value={Rating} type='text' onChange={(e)=>{setRating(e.target.value)}} required/><br/>
    <button  id='submit' onClick={Submit}>Submit</button>
    </form></div>
     </>
  )
}

export default EditPost


