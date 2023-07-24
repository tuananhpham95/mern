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
        <img src="https://source.unsplash.com/random" alt="feed_images" />
      </div>
      {/* content */}
      <div className="feed_content">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum in quos
          consectetur porro amet consequatur natus dicta beatae, inventore
          similique qui aliquam error deserunt velit aspernatur ipsa eaque ipsam
          tenetur temporibus. Aut aliquid culpa provident ipsa eius praesentium,
          quis nam?
        </p>
      </div>
    </div>
  );
};

export default Feed;
