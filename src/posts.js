import React from 'react'
import './posts.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
const Posts = ({datas}) => {
  let datas_values=datas;
  const navigate=useNavigate()
  let values= JSON.parse(localStorage.getItem('Posts'))!=null?JSON.parse(localStorage.getItem('Posts')):datas_values 
   const handleDelete=(id)=>{
    let allposts=values.filter(post=>post.id!==id)
     localStorage.setItem('Posts',JSON.stringify(allposts))
     navigate('/')
  }

  const {id}=useParams();

  let post=values.find(post=>(post.id).toString()===id?post:console.log())
  return (
    
   <main className='Postpage'>
    <article className='post'>
      <div className='box'>
      {post &&
      <div className='values'>
      <h2>{post.movie}</h2>
      <p>{post.review}</p>
      <p>{post.rating}</p>
      <div className='buttons'>
      <button onClick={()=>handleDelete(post.id)} className='Delete_Post'>Delete Post</button>
      <Link to={`/editpost/${id}`}>
      <button className='Update_Button'>Edit</button></Link>
      </div>
      </div>
      
      }
      </div>
      {!post&&
      <>
      <h2>Page Not found</h2>
      <Link to='/'>visit Homepage</Link>
      </>}
    </article>
   </main>
  )
}

export default Posts