import React from "react"
import "./blog.css"
import { AiOutlineClockCircle } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom"

export const Card = ({ posts }) => {
  // create file garnebelema
  const PublicFlo = "https://bloghub-r8yq.onrender.com/images/"
  return (
    <>
      <section className='blog'>
        <div className='container grid3'>
          {posts.map((item) => (
            <div className='box boxItems' key={item.id}>
              {/* first ma yo  <div className='img'>{item.photo && <img src={item.cover} alt='' />}</div>*/}
              <div className='img'>{item.photo && <img src={PublicFlo + item.photo} alt='' />}</div>
              <div className='details'>
                {/* <div className='tag'>
                  <AiOutlineTags className='icon' />
                  {item.categories.map((c) => (
                    <a href='/'>#{c.name}</a>
                  ))}
                </div> */}
                <Link to={`/post/${item._id}`}>
                  <h3>{item.title}</h3>
                </Link>
                <p>{item.desc.slice(0, 180)}...</p>
                <div className='date'>
                  <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{new Date(item.createdAt).toDateString()}</label>
                  <AiOutlineUser className='icon' /> <label htmlFor=''>{item.username}</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
