import React, { useState, useEffect } from "react";
import { ReactComponent as Mute } from "../../assets/volume.svg";
import { ReactComponent as Volume } from "../../assets/mute.svg";
import { ReactComponent as Play } from "../../assets/play.svg";
import { ReactComponent as Stop } from "../../assets/stop.svg";
import { ReactComponent as Next } from "../../assets/next.svg";
import { ReactComponent as Pause } from "../../assets/pause.svg";
import { ReactComponent as Previous } from "../../assets/previous.svg";
import "./styles.css";

const NowPlayingBar = (props) => {
  const musics = props.musicList;
  const [currentMusic, setCurrentMusic] = useState(musics[props.currentIndex]);
  const [audio, setAudio] = useState(new Audio(currentMusic.url));
  const [playing, setPlaying] = useState(false);

  //Alterna os estados do audio entre tocando e pausado
  const toggle = () => {
    setPlaying(!playing);
  };

  //Reseta a duracao do audio e troca o estado de playing para false
  const stopMusic = () => {
    audio.pause();
    setPlaying(false);
    audio.currentTime = 0;
  };

  //Avanca e retorna na lista de musicas
  const forwardAndBackward = (value) => {
    stopMusic();
    props.setCurrentIndex((prev) => {
      if (prev + value >= props.playlistSize || prev + value <= 0) {
        return 0;
      }
      return prev + value;
    });
  };

  //Quando o index da playlist é atualizado, atualiza o estado da musica atual
  useEffect(() => {
    stopMusic();
    setCurrentMusic(musics[props.currentIndex]);
  }, [props.currentIndex]);

  //Quando a musica atual é alterada, instancia um novo objeto com as informacoes da nova musica
  useEffect(() => {
    setAudio(new Audio(currentMusic.url));
    if (props.currentIndex !== 0) {
      setPlaying(true);
    }
  }, [currentMusic]);

  //Correspondencia entre os estados do audio e os metodos da classe Audio
  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  //Funcoes e estados da barra de progresso
  const [progress, setProgress] = useState(0);
  //Define a porcentagem do progresso da barra de acordo com o tempo da musica
  useEffect(() => {
    const updateProgress = () => {
      const percentage = (audio.currentTime / audio.duration) * 100;
      setProgress(percentage);
    };

    const interval = setInterval(updateProgress, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [audio]);

  //Conversao dos valores do audio para o formato 00:00
  const convertAudioTime = (audioTime) => {
    let minutes = parseInt(audioTime / 60).toFixed(0);
    minutes < 10 && (minutes = "0" + minutes);
    let seconds = parseInt(audioTime % 60).toFixed(0);
    seconds < 10 && (seconds = "0" + seconds);
    return minutes === "NaN" || seconds === "NaN"
      ? "00:00"
      : `${minutes}:${seconds}`;
  };

  //Funcoes de controle do volume
  const [volume, setVolume] = useState(3);
  //Define volume inicial
  audio.volume = volume / 10;

  const handleVolume = (value) => {
    audio.volume = value / 10;
    setVolume(value);
  };

  return (
    <div className="playingContainer">
      <div className="nowPlaying">
        <img src={currentMusic.cover} alt="" />
        <div>
          <label>{currentMusic.title}</label>
          <br />
          <label>{currentMusic.artist}</label>
        </div>
      </div>

      <div className="content">
        <div className="controls">
          <Stop onClick={stopMusic} />
          <Previous onClick={() => forwardAndBackward(-1)} />

          {playing ? (
            <Pause className="pauseAndPlay" onClick={toggle} />
          ) : (
            <Play className="pauseAndPlay" onClick={toggle} />
          )}
          <Next onClick={() => forwardAndBackward(1)} />
          <div className="noContentControl"></div>
        </div>
        <div className="progressBar">
          <label className="time">{convertAudioTime(audio.currentTime)}</label>
          <input
            type="range"
            min={0}
            max={100}
            value={progress}
            onChange={(e) => {
              const newTime = (e.target.value / 100) * audio.duration;
              audio.currentTime = newTime;
              setProgress(e.target.value);
            }}
          />
          <label className="time">{convertAudioTime(audio.duration)}</label>
        </div>
      </div>

      <div className="volumeBox">
        {volume === 0 ? (
          <Mute onClick={() => handleVolume(3)} />
        ) : (
          <Volume onClick={() => handleVolume(0)} />
        )}
        <input
          type="range"
          min={0}
          value={volume}
          max={10}
          onChange={(e) => {
            handleVolume(parseInt(e.target.value));
          }}
        />
        <label>{volume}</label>
      </div>
    </div>
  );
};

export default NowPlayingBar;
