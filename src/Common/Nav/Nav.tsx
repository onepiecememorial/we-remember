import { Link } from 'react-router-dom';
import * as S from './Nav.styled';
import GomuPicture from '../../Assets/gomu.png';

const Nav = () => {
  return (
    <>
      <S.Header>
        <img className='gomu-gomu' src={GomuPicture}/>
        <div className='link-container'>
          <Link className='link' to="/">Home Page</Link>
        </div>
        <div className='link-container'>
          <Link to="/lanterns">Lanterns Page</Link>
        </div>
        <div className='link-container'>
          <Link to="/test">Test Page</Link>
        </div>
      </S.Header>
    </>
  );
};

export default Nav;
