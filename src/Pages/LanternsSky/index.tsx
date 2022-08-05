import { useMemo } from 'react';
import Modal from '../../Common/Modal';
import { ModalContentProvider } from '../../Common/Modal/ModalContext';
import lostNakamas from '../../lost-nakamas.json';
import ParallaxGenerator from './ParallaxGenerator';
import { PageWrapper } from './styles';
import { createChunks, getRandomPositions } from './utils';

const LanternsSky = () => {
  const lanternPages = useMemo(
    () => createChunks(getRandomPositions(lostNakamas)),
    [lostNakamas],
  );

  return (
    <ModalContentProvider>
      <PageWrapper>
        <ParallaxGenerator lanternPages={lanternPages} />
      </PageWrapper>

      <Modal />
    </ModalContentProvider>
  );
};

export default LanternsSky;
