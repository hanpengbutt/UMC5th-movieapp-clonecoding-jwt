import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { logOut } from '../../store/reducers';

function LoginControl() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();

  const navigation = useNavigate();
  const handleClick = () => {
    if (!isLoggedIn) navigation('/login');
    else dispatch(logOut());
  };

  return (
    <LoginContainer>
      <LoginBtn type='button' onClick={handleClick}>
        {isLoggedIn ? '로그아웃' : '로그인'}
      </LoginBtn>
      <LoginGreet>{isLoggedIn ? '환영합니다!' : '로그인 해주세요!'}</LoginGreet>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const LoginBtn = styled.button`
  width: 70px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  border: none;
  margin-right: 6px;
`;

const LoginGreet = styled.div`
  color: white;
`;

export default LoginControl;
