import Avatar from "../Avatar/Avatar";
import "./feed.css";

import React from "react";

const Feed = () => {
  return (
    <div className="feed">
      {/* date */}
      <div className="feed_date">
        <Avatar />
        <p>2/22/2023</p>
      </div>
      {/* img */}
      <div className="feed_img">
        <img src="https://sourse.unsplash.com/random" alt="feed_images" />
      </div>
      {/* content */}
      <div className="feed_content">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
          reiciendis, animi a consequuntur nulla perspiciatis iure labore aut
          officiis voluptates numquam cumque iste!
        </p>
      </div>
    </div>
  );
};

export default Feed;
