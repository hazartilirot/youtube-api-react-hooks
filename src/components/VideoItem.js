import "./VideoItem.css";
import React from "react";
/*IMPORTANT we don't want to execute onVideoSelect function directly. If we
typed onVideoSelect(video) it'd be executed straightaway. An arrow function
helps us to pass a function as a reference. It'll be only executed once a
container is clicked.*/
const VideoItem = ({ video, onVideoSelect }) => (
  <div onClick={() => onVideoSelect(video)} className="video-item item">
    <img
      src={video.snippet.thumbnails.medium.url}
      alt={video.snippet.title}
      className="ui image"
    />
    <div className="content">
      <div className="header">{video.snippet.title}</div>
    </div>
  </div>
);
export default VideoItem;
