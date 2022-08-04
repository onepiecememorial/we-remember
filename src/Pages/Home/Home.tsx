import * as S from './Home.styled';
import landing from '../../Assets/landing.png';
import lostNakamas from '../../lost-nakamas.json';

const Home = () => {
  console.log('Lost nakamas data:', lostNakamas);

  return (
    <>
      <S.ImageContainer>
        <img src={landing} alt="" />
      </S.ImageContainer>
    </>
  );
};

export default Home;
