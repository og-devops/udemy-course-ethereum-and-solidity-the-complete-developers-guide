import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  //const video = props.video;
  //const onVideoSelect = props.onVideoSelect;
  const imageURL = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageURL} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;

/*
import React from 'react';

const VideoListItem = ({video}) => {
  console.log(video);

  return <li>Video</li>;
};

export default VideoListItem
*/

/*
import React from 'react';

const VideoListItem = (props) => {
  const video = props.video;

  return <li>Video</li>
};

export default VideoListItem
*/
