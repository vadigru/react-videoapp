import React from "react";
import Player from "../player/player.jsx";

// import {LINKS} from "../../const.js";
import "./play-view.scss";

const PlayView = () => {
  return (
    <div className={`play-view`}>
      <ul className={`play-view__menu menu`}>
        <li className={`menu__item`}><button className={`btn`}>PLAY_VIEW-1</button></li>
        <li className={`menu__item`}><button className={`btn`}>PLAY_VIEW-2</button></li>
      </ul>
      <Player />
    </div>
  );
};

export default PlayView;
