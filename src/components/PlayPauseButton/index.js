import { StyledButton } from './styles';

export default function PlayPauseButton({ isPlaying, ...props }) {
  return <StyledButton {...props}>{isPlaying ? '⏸' : '▶️'}</StyledButton>;
}
