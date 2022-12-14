import { useContext } from 'react';
import { ModalContext } from '../../../Common/Modal/ModalContext';
import { LanternContent } from '../types';
import { LanternText, LanternWrapper, LANTERN_DIAMETER } from './styles';

const LanternProfile = ({ name, year, text }: Omit<LanternContent, 'xPos'>) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{year}</h3>
      <p>{text}</p>
    </div>
  );
};

const Lantern = ({ name, year, text, xPos, index }: Props) => {
  const { setContent } = useContext(ModalContext);

  return (
    <LanternWrapper
      onClick={() =>
        setContent(<LanternProfile name={name} year={year} text={text} />)
      }
      style={{
        animationDelay: `${Math.random() * index}s`,
        left: `${xPos}px`,
        top: `${index * (LANTERN_DIAMETER + 50)}px`,
      }}>
      <LanternText>{name}</LanternText>
      <LanternText>{year}</LanternText>
    </LanternWrapper>
  );
};

export type Props = LanternContent & { index: number };

export default Lantern;
