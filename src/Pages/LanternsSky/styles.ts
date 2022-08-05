import styled, { css } from 'styled-components';

export const PageWrapper = styled.div`
  // TODO: Change this when we have the proper background
  background-image: url(https://res.cloudinary.com/ddpsctbpe/image/upload/v1659615974/SPOILER_unknown_skkibu.png);
  background-position: center;
  background-size: cover;
  flex: 1;
  height: 100%;
  position: relative;
  width: 100vw;
`;

const moonAnimationCss = css`
  @keyframes moon-movement {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(2px, 2px);
    }
    50% {
      transform: translate(2px, -2px);
    }
    75% {
      transform: translate(-2px, -2px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;

export const Moon = styled.img`
  height: 10rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 10rem;

  ${moonAnimationCss}
  transition: transform 100ms ease-in-out;
  animation-name: moon-movement;
  animation-duration: 4s;
  animation-iteration-count: infinite;
`;
