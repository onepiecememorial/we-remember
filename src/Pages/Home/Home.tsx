import * as S from './Home.styled';
import landing from '../../Assets/landing.png';
import lostNakamas from '../../lost-nakamas.json';
import WelcomeText from './WelcomeText/WelcomeText';

const Home = () => {
  console.log('Lost nakamas data:', lostNakamas);

  return (
    <>
      <WelcomeText />
      <div
        style={{
          width: '100%',
          height: '400px',
          backgroundColor: 'green',
        }}></div>
    </>
  );
};

export default Home;
