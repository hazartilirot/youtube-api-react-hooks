import React from "react";
import VideoItem from "./VideoItem";

/*We receive props.videos. Instead of destructuring it in a typical way like
const {videos} = props, we as it turned out can do it right in the parenthesis*/
/*What a lovely novelty! Let's use it.*/
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(v => (
    <VideoItem key={v.id.videoId} onVideoSelect={onVideoSelect} video={v} />
  ));
  return <div className="ui relaxed divided list">{renderedList}</div>;
};
export default VideoList;
