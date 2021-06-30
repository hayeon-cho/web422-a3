// import css
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./css/VideoDetailsPage.css";

// import icons
import { GoThumbsdown, GoThumbsup } from "react-icons/go";

function VideoDetailsPage({ list, setList }) {
  const [video, setVideo] = useState({});
  const [likeType, setLikeType] = useState("");
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  const { id } = useParams("id");
  useEffect(() => {
    fetch(`http://localhost:3000/videos/${id}`)
      .then(res => res.json())
      .then(res => {
        setVideo(res);
        setLike(res.likes);
        setDisLike(res.dislikes);
      });
  }, [id]);
  const handleClick = (isLike = false) => {
    if (isLike) {
      if (likeType !== "like") {
        if (likeType !== "") {
          setDisLike(dislike - 1);
        }
        setLikeType("like");
        setLike(like + 1);
      }
    } else {
      if (likeType !== "dislike") {
        if (likeType !== "") {
          setLike(like - 1);
        }
        setLikeType("dislike");
        setDisLike(dislike + 1);
      }
    }
  };
  const handleSave = () => {
    if (video.id && !list.map(e => e.id).includes(video.id)) {
      setList([...list, video]);
      window.alert("Saved!");
    }
  };
  return (
    <div>
      <section className="video-player-container">
        <iframe
          width="800"
          height="450"
          src={video.link}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className="title">{video.title}</p>
        <div className="stats">
          <p>
            <span>512K views</span>
            &nbsp;&bull;&nbsp;
            <span>{video.date_posted}</span>
          </p>
          <ul className="links">
            <li
              className={likeType === "like" ? "pressed" : ""}
              onClick={() => handleClick(true)}
            >
              <GoThumbsup />
              &nbsp;&nbsp;
              <span>{like}</span>
            </li>
            <li
              className={likeType === "dislike" ? "pressed" : ""}
              onClick={() => handleClick()}
            >
              <GoThumbsdown />
              &nbsp;&nbsp;
              <span>{dislike}</span>
            </li>
          </ul>
        </div>
        <div className="video-details">
          <div>
            <p className="creator">
              <img
                src={`/${video.profile_photo}`}
                className="creator-profile-photo"
                alt="creator"
              />
              <span>{video.author}</span>
            </p>
            <p className="desc">{video.description}</p>
          </div>
          <div className="col-right">
            <button className="btn btn-secondary" onClick={handleSave}>
              ADD TO PLAYLIST
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default VideoDetailsPage;
