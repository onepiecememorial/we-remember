import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Lantern from '../Lantern';
import { LanternContent } from '../types';
import { ParallaxCenterLayer } from './styles';

const ParallaxGenerator = ({ lanternPages }: Props) => {
  return (
    <Parallax
      pages={lanternPages.length + 2}
      style={{ top: '0', left: '0', height: '100%' }}>
      {lanternPages.map((lanternPage, pageIndex) => (
        <ParallaxCenterLayer
          key={pageIndex}
          offset={pageIndex + 1}
          speed={0.25}>
          <div>
            {lanternPage.map((lantern, index) => (
              <Lantern {...lantern} index={index} key={lantern.name + index} />
            ))}
          </div>
        </ParallaxCenterLayer>
      ))}
    </Parallax>
  );
};

export type Props = {
  lanternPages: LanternContent[][];
};

export default ParallaxGenerator;
