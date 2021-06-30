import "./css/VideoListing.css";
import Video from "./Video";

// const videoList = [
//   {
//     thumbnail: "assets/3-ways-use-coffee.jpg",
//     title: "3 Ways We Use Coffee",
//     stats: "10 minutes ago",
//     creator: {
//       avatar: "assets/profiles/about_to_eat.jpg",
//       name: "About to Eat"
//     },
//     desc: "We make 3 different dishes using coffee and talk about it!"
//   },
//   {
//     thumbnail: "assets/hand-pulled-noodles.jpg",
//     title: "The Hand Ripped Noodles Everyone Should Know How to Make",
//     stats: "1 day ago",
//     creator: {
//       avatar: "assets/profiles/ethan.jpg",
//       name: "Ethan Chlebowski"
//     },
//     desc:
//       "This dish is known as Hot oil-seared Biang Biang noodles. The noodles are stretched than bounced on the work surface."
//   },
//   {
//     thumbnail: "assets/potato-chips.jpg",
//     title: "Making Potato Chips At Home",
//     stats: "4 minutes ago",
//     creator: {
//       avatar: "assets/profiles/andong.jpg",
//       name: "My Name is Andong"
//     },
//     desc:
//       "Classic potato chips or Kettle Style potato chips - no matter what your favorite is, with this home made potato chips recipe your success is guaranteed. But did you know the story and science behind potato chips?"
//   }
// ];

function VideoListing({ videoList }) {
  return (
    <section className="listing-container">
      {videoList.map(video => (
        <Video key={video.id} video={video} />
      ))}
    </section>
  );
}
export default VideoListing;
