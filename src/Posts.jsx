import React, { useEffect, useState } from 'react'

function Posts() {


    const [posts,setposts] = useState([]);

    useEffect(()=>{

        fetch('http://localhost:3000/posts').
        then((data)=>data.json()).
        then((data=>setposts(data))).
        catch(err=>console.log(err))
        
    },[]);


  return (
    <div className='d-flex justify-content-center'>
        {posts.length > 0 ? (
            <div >
                {posts.map((posts)=> (
                    <div className='my-3 ' key={posts.id}>
                        <div className='d-flex'>
                            <img className="dp rounded-circle" src={posts.user.profilePic} alt="profile pic" />
                            <h5>{posts.user.username}</h5>
                            <b className='ms-auto'>...</b>
                        </div>
                        <img className='image' src={posts.image} alt="post" />
                        <div>
                            <i className="bi bi-heart"></i>
                            <i className="bi bi-chat"></i>
                            <i className="bi bi-send"></i>
                        </div>
                        <div>
                            <b>{posts.likes}Likes</b>
                        </div>
                        {posts.caption}
                    </div>
                ))}
            </div>
        ):(
            <div>
                Loading Posts
            </div>
        )}
    </div>
  )
}

export default Posts