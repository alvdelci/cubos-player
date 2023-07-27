import React, { useState } from "react";
import { ReactComponent as Play } from "../../assets/play.svg";
import "./styles.css";

const MusicCard = ({ setCurrentIndex, ...props }) => {
  const [showPlaySection, setShowPlaySection] = useState(false);
  const handleDisplay = () => {
    setShowPlaySection(!showPlaySection);
  };

  return (
    <div className="cardContainer">
      <div
        className="playSection"
        onMouseLeave={handleDisplay}
        onClick={() => {
          setCurrentIndex(
            props.id - 1 < 0 || props.id - 1 > props.playlistSize
              ? 0
              : props.id - 1
          );
        }}
        style={{ display: showPlaySection ? "flex" : "none" }}
      >
        <Play />
      </div>
      <img onMouseOver={handleDisplay} src={props.banner} alt="" />
      <label>{props.title}</label>
      <span>{props.description}</span>
    </div>
  );
};

export default MusicCard;
