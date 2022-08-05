import styled, { css } from 'styled-components';
import lantern from '../../../Assets/lantern.png';

export const LANTERN_DIAMETER = 175;

const lanternAnimationCss = css`
  @keyframes lantern-movement {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(10px, 5px);
    }
    50% {
      transform: translate(0px, 0);
    }
    75% {
      transform: translate(-10px, 5px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;

export const LanternWrapper = styled.div<{ xPos: number; index: number }>`
  align-items: center;
  background-image: url(${lantern});
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: ${LANTERN_DIAMETER}px;
  justify-content: flex-start;
  padding-top: ${LANTERN_DIAMETER / 5}px;
  box-sizing: border-box;
  left: ${({ xPos }) => `${xPos}px`};
  position: absolute;
  top: ${({ index }) => `${index * (LANTERN_DIAMETER + 50)}px`};
  width: ${LANTERN_DIAMETER}px;

  ${lanternAnimationCss}
  transition: transform 100ms ease-in-out;
  animation-name: lantern-movement;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-delay: ${({ index }) => Math.random() * index}s;
`;

export const LanternText = styled.p`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  text-shadow: 0 0 0.25rem #000, 0 0 0.25rem #000;
`;
