import React, { useState } from "react";
import Header from "./components/Header";
import MusicCard from "./components/MusicCard";
import NowPlayingBar from "./components/NowPlayingBar";

import { musics } from "./musics.js";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Header />
      <main>
        <h2>The Best Playlist</h2>
        <div className="playlists">
          {musics.map((music) => {
            return (
              <MusicCard
                key={music.id}
                id={music.id}
                banner={music.cover}
                title={music.title}
                description={music.description}
                setCurrentIndex={setCurrentIndex}
                playlistSize={musics.length}
              />
            );
          })}
        </div>
      </main>
      <NowPlayingBar
        playlistSize={musics.length}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        musicList={musics}
      />
    </>
  );
}

export default App;
