import Video from "./Video"
import { useState } from "react"


function VideoInfo({video}){

    const [upVote,setUpVote] = useState(video.upvotes)
    const [downVote, setDownVote] =useState(video.downvotes)

    function like(){
        setUpVote(upVote + 1)
    }
    
    function dislike(){
        setDownVote(downVote + 1)
    }

    return(
        <>
        <h1>{video.title}</h1>
        <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <div>
                <button onClick={()=>like()}>{upVote} 👍</button>
                <button onClick={()=>dislike()}>{downVote} 👎</button>
            </div>
        </>
    )
}

export default VideoInfo