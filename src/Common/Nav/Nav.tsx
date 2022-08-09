import { Link } from 'react-router-dom';
import * as S from './Nav.styled';

const Nav = () => {
  return (
    <div>
      <S.Header>This is the common app header</S.Header>

      <div>
        <Link to="/">Go to home page</Link>
      </div>
      <div>
        <Link to="/lanterns">Go lanterns page</Link>
      </div>
      <div>
        <Link to="/poneglyph">Go poneglyph page</Link>
      </div>
    </div>
  );
};

export default Nav;
