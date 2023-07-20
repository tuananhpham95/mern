import "./appbar.css";
import { BiMenuAltLeft } from "react-icons/bi";
import Avatar from "../Avatar/Avatar";

const Appbar = ({ handleSidebar }) => {
  return (
    <div className="appbar">
      <div className="appbar_wrapper">
        {/* logo */}
        <div className="appbar_logo">
          <img src="./assets/img/shuttle.svg" alt="logo" />
          <p>mernblog</p>
        </div>
        {/* avatar */}
        <div className="appbar_avatar">
          <Avatar />
          <BiMenuAltLeft onClick={handleSidebar} />
        </div>
      </div>
    </div>
  );
};

export default Appbar;
