import "./profilelayout.css";
import Appbar from "../../components/Appbar/Appbar";
import SideBar from "../../components/SideBar/SideBar";
import { useState } from "react";
import Feed from "../../components/Feed/Feed";
import Profile from "../../components/Profile/Profile";

const ProfileLayout = () => {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="profilelayout">
      {/* appbar */}
      <Appbar handleSidebar={handleSidebar} />
      {/* sidebar */}

      <div
        className={
          sidebar ? "profilelayout_sidebar open" : "profilelayout_sidebar"
        }
      >
        <SideBar />
      </div>
      {/* content */}
      <div className="profilelayout_content">
        {/* feed */}
        <div className="profilelayout_content-feed">
          <Feed />
        </div>
        {/* profile */}
        <div className="profilelayout_content-profile">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
