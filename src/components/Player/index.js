import { useRef, useState } from 'react';
import { Rnd } from 'react-rnd';
import { CameraVideo, ScreenVideo } from './styles';
import PlayPauseButton from '../PlayPauseButton';
import camera from '../../data/basti-camera.mp4';
import screen from '../../data/basti-screen.mp4';

const CAMERA_VIDEO_RND_DEFAULT = {
  x: 60,
  y: 500,
  width: 320,
  height: 200,
};

const CAMERA_VIDEO_RND_STYLE = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'solid 1px #ddd',
  background: '#f0f0f0',
};

export default function Player() {
  const cameraRef = useRef();
  const screenRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPauseButtonClick = () => {
    if (isPlaying) {
      cameraRef.current.pause();
      screenRef.current.pause();
    } else {
      cameraRef.current.play();
      screenRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <ScreenVideo src={screen} ref={screenRef}></ScreenVideo>
      <Rnd default={CAMERA_VIDEO_RND_DEFAULT} style={CAMERA_VIDEO_RND_STYLE}>
        <CameraVideo src={camera} ref={cameraRef}></CameraVideo>
      </Rnd>
      <PlayPauseButton
        isPlaying={isPlaying}
        onClick={handlePlayPauseButtonClick}
      />
    </>
  );
}
