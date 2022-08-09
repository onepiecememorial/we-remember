import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { memo } from 'react';
import Lantern from '../Lantern';
import { LanternContent } from '../types';
import { ParallaxCenterLayer } from './styles';

const ParallaxGenerator = ({ lanternPages }: Props) => {
  return (
    <Parallax pages={lanternPages.length + 1}>
      {lanternPages.map((lanternPage, pageIndex) => (
        <ParallaxCenterLayer
          key={pageIndex}
          offset={pageIndex + 1}
          speed={0.15}>
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

export default memo(ParallaxGenerator);
