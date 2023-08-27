import React from 'react';

import styles from './StartButton.module.css';
import {GameStatus} from "@/core/utils/enums";
import {useGameContext} from "@/core/context/GameContext";
import StartTimer from "@/core/components/StartTimer";
import Pause from "@/core/layout/Pause";
import OptionsButton from "@/core/components/OptionsButton";
import ScoreDisplay from "@/core/components/ScoreDisplay";

const StartButton: React.FC = () => {
  const {currentGameStatus, setCurrentGameStatus, showStartTimer, showPauseInterface, showOptionsMenu} = useGameContext();
  let rise = currentGameStatus !== GameStatus.Paused ? {} : {zIndex: 11};

  if (currentGameStatus === GameStatus.InGame || currentGameStatus === GameStatus.Paused) {
    return (
      <>
        {showStartTimer ? <StartTimer/> : <></>}
        {showPauseInterface && !showOptionsMenu ? <Pause/> : <></>}
        <div className={styles.container} style={rise}>
          <button className={styles.pauseBtn} onClick={() => setCurrentGameStatus('pause')} style={rise}>
            {currentGameStatus === GameStatus.Paused ? 'RESUME' : 'PAUSE'}
          </button>
          <hr style={rise}/>
          <button className={styles.restartBtn} onClick={() => setCurrentGameStatus( 'restart')} style={rise}>
            RESTART
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      {showStartTimer ? <StartTimer/> : <></>}
      <button className={styles.btn} onClick={() => setCurrentGameStatus( 'start')}>START</button>
    </>
  );
}

export default StartButton;
