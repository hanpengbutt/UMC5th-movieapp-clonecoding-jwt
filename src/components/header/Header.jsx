import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginControl from './LoginControl';

function Header() {
  return (
    <HeaderWrapper>
      <Link to='/'>
        <img
          style={{ width: '154px', height: '20px' }}
          src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
          alt='로고'
        />
      </Link>
      <Navigator>
        <Link to='/movie'>
          <li>영화</li>
        </Link>
        <Link to='/tv'>
          <li>TV 프로그램</li>
        </Link>
        <Link to='/celebirity'>
          <li>인물</li>
        </Link>
      </Navigator>
      <LoginControl />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0px 40px;
  box-sizing: border-box;
`;

const Navigator = styled.ul`
  width: 240px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1em;
  color: white;
`;

export default Header;
