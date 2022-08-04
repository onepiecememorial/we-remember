import { Link } from 'react-router-dom';
import * as S from './Nav.styled';

const Nav = () => {
  return (
    <>
      <S.Header>This is the common app header</S.Header>

      <div>
        <Link to="/">Go to home page</Link>
      </div>
      <div>
        <Link to="/test">Go to test page</Link>
      </div>
    </>
  );
};

export default Nav;
