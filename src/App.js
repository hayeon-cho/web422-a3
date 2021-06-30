// Name:           Hayeon Cho
// Student Number: 121074199
// Email:          hcho54@myseneca.ca

import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

// page imports
import HomePage from "./pages/HomePage";
import PlaylistPage from "./pages/PlaylistPage";
import VideoDetailsPage from "./pages/VideoDetailsPage";

function App() {
  const [list, setList] = useState([]);
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route
        path="/videos/:id"
        render={() => <VideoDetailsPage list={list} setList={setList} />}
      />
      <Route path="/videos" render={() => <PlaylistPage list={list} />} />
      {/* <h1
        style={{
          textDecoration: "underline",
          textAlign: "center",
          marginBottom: "60px"
        }}
      >
        Example of the Video component{" "}
      </h1>
      <Video />

      <h1
        style={{
          textDecoration: "underline",
          textAlign: "center",
          margin: "60px 0px"
        }}
      >
        {" "}
        Example of the VideoDetailsPage component{" "}
      </h1>
      <VideoDetailsPage /> */}
    </Switch>
  );
}

export default App;
