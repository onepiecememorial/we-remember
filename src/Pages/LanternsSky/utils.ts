import { LANTERN_DIAMETER } from './Lantern/styles';
import { LanternContent, LostNakama } from './types';

export const getRandomPositions = (nakamas: LostNakama[]): LanternContent[] => {
  return nakamas.map(({ name, year, text }) => {
    const maxX = window.innerWidth - LANTERN_DIAMETER;
    const xPos = Math.floor(Math.random() * (maxX + 1) + 0);

    return {
      name,
      year,
      text,
      xPos,
    };
  });
};

export const createChunks = <T extends unknown>(elements: T[]): T[][] => {
  const chunkSize = Math.floor(window.innerHeight / LANTERN_DIAMETER);
  const chunks: T[][] = [];

  for (let i = 0; i < elements.length; i += chunkSize) {
    const chunk = elements.slice(i, i + chunkSize);
    chunks.push(chunk);
  }

  return chunks;
};
