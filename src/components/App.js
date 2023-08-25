import video from "../data/video.js";
import Video from "./Video.js";
import VideoInfo from "./VideoInfo.js";
import CommentSection from "./CommentSection.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video video={video} />
      <VideoInfo video={video} />
      <CommentSection comments={video.comments} />
    </div>
  );
}

export default App;
