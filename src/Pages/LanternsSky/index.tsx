import lostNakamas from '../../lost-nakamas.json';
import ParallaxGenerator from './ParallaxGenerator';
import { PageWrapper } from './styles';
import { createChunks, getRandomPositions } from './utils';

const LanternsSky = () => {
  const lanternPages = createChunks(getRandomPositions(lostNakamas));

  return (
    <PageWrapper>
      <ParallaxGenerator lanternPages={lanternPages} />
    </PageWrapper>
  );
};

export default LanternsSky;
