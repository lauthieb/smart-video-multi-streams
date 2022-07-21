import styled from 'styled-components';

const COMMON_ATTRS = { playsInline: true, loop: true };

const ScreenVideo = styled.video.attrs(COMMON_ATTRS)`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const CameraVideo = styled.video.attrs(COMMON_ATTRS)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export { ScreenVideo, CameraVideo };
