import { useMemo } from 'react';
import moon from '../../Assets/moon.png';
import Modal from '../../Common/Modal';
import { ModalContentProvider } from '../../Common/Modal/ModalContext';
import lostNakamas from '../../lost-nakamas.json';
import ParallaxGenerator from './ParallaxGenerator';
import { Moon, PageWrapper } from './styles';
import { createChunks, getRandomPositions } from './utils';

const LanternsSky = () => {
  const lanternPages = useMemo(
    () => createChunks(getRandomPositions(lostNakamas)),
    [lostNakamas],
  );

  return (
    <ModalContentProvider>
      <PageWrapper>
        <Moon src={moon} />
        <ParallaxGenerator lanternPages={lanternPages} />
      </PageWrapper>

      <Modal />
    </ModalContentProvider>
  );
};

export default LanternsSky;
