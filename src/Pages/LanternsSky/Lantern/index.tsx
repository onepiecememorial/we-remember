import { LanternContent } from '../types';
import { LanternText, LanternWrapper } from './styles';

const Lantern = ({ name, year, xPos, index }: Props) => {
  return (
    <LanternWrapper xPos={xPos} index={index}>
      <LanternText>{name}</LanternText>
      <LanternText>{year}</LanternText>
    </LanternWrapper>
  );
};

export type Props = LanternContent & { index: number };

export default Lantern;
