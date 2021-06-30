import "./css/PlaylistPage.css";
import VideoListing from "../components/VideoListing";

function PlaylistPage({ list }) {
  return (
    <div className="Playlist">
      <VideoListing videoList={list} />
    </div>
  );
}
export default PlaylistPage;
