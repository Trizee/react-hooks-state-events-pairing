import { useState } from "react"

function CommentSection({comments}){

const [show,setShow] = useState('false')


const commentsSection = comments.map(individualComments => 
    <>
    <h3>{individualComments.user}</h3>
    <p>{individualComments.comment}</p>
    </>
)

return(
    <div>
    <button onClick={()=>setShow(!show)}>{show ? 'Hide Comments' : 'Show Comments'}</button>
    <div className="comment">
     {show ? commentsSection : null}
    </div>
    </div>
)

}


export default CommentSection