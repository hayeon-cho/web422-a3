import { useState, useEffect } from "react";

import NavMenu from "../components/NavMenu";
import VideoListing from "../components/VideoListing";

function HomePage() {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/videos")
      .then(res => res.json())
      .then(res => setVideoList(res));
  }, []);
  return (
    <div>
      <NavMenu />
      <VideoListing videoList={videoList} />
    </div>
  );
}

export default HomePage;
