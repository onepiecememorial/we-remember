import * as S from './Home.styled';
import landing from '../../Assets/landing.png';

const Home = () => {
  return (
    <>
      <S.ImageContainer>
        <h1 className="center">Page deployed 🏴‍☠️!</h1>
        <img src={landing} alt="" />
      </S.ImageContainer>
    </>
  );
};

export default Home;
