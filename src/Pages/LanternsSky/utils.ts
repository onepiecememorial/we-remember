import { LANTERN_DIAMETER } from './Lantern/styles';
import { LanternContent, LostNakama } from './types';

export const getRandomPositions = (nakamas: LostNakama[]): LanternContent[] => {
  return nakamas.map(({ name, year }) => {
    const xPos = Math.random() * (window.innerWidth - LANTERN_DIAMETER);

    return {
      name,
      year,
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
