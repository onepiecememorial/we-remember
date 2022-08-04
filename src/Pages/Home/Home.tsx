import WelcomeText from './WelcomeText/WelcomeText';
import lostNakamas from '../../lost-nakamas.json';

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
        }}
      />
    </>
  );
};

export default Home;
