import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  //map instead of for loop
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;

/*
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  //map instead of for loop
  const videoItems = props.videos.map((video) => {
    return <VideoListItem video={video} />
  });

  /*
  var array = [1, 2, 3];
  array.map
  array.map(function(number) { return number * 2});
  array.map(function(number) { return '<div>' + number + '</div>' });
  */
/*
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
      //{props.videos.length}
    </ul>
  );
};

export default VideoList;
*/
