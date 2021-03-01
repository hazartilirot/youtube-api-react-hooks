import React, {useEffect, useState} from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  //const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos();
/*whenever a list of videos changes we want to set the first one by default*/
  useEffect(() => setSelectedVideo(videos[0]), [videos]);

  return (
      <div className="ui container">
        <SearchBar onFormSubmit={search}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo}/>
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={setSelectedVideo} videos={videos}/>
            </div>
          </div>
        </div>
      </div>
  );
};
export default App;