import React, { useEffect, useState } from 'react'
import { useParams,Link ,useNavigate} from 'react-router-dom'

function ViewStory() {
  const {id , tot}=useParams();
  const [story,setStory] = useState(null);
  const navigate=useNavigate();
  useEffect (()=>{
    fetch(`http://localhost:3000/story/${id}`)
    .then(data=>data.json())
    .then(data=>setStory(data))
    .catch(err=>console.log(err))
  },[id]);

  if(id > tot || id <=0){
    navigate('/');
  }


  return (
    <div>
      {story ? <div className='d-flex justify-content-center align-items-center'>
        <div className="d-flex ">
          <div className="d-flex align-items-center mb-3" style={{ width: "100%", padding: "10px" }}>
            <img
              src={story.user.profilePic}
              alt="profilepic"
              style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "10px" }}
            />
           <strong>{story.user.username}</strong> 
          </div>
          
        </div>
        <div >
          <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}` } ><i className="bi bi-arrow-left-circle-fill"></i></Link>
          <img className =" vh-100" src={story.image} alt="story" />
          <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}><i className="bi bi-arrow-right-circle-fill"></i></Link>
        </div>
      </div> : 

        <div>Loading Nowww</div>}
    </div>
  )
}

export default ViewStory