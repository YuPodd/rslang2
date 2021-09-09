import React from "react";
import main_video from "../../assets/main_video.mp4";

export default function Video() {

  return (
    <div className="video-wrapper">
      <video controls={true} className="main_video">
        <source src={main_video} type="video/mp4"></source>
      </video>
    </div>
  );
}
