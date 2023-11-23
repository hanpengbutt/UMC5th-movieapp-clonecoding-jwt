import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { logIn, logOut } from '../../store/reducers';
import API_URL from '../../constants/apiUrl';

function LoginControl() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const url = API_URL.token;
    const data = {
      headers: {
        Authorization: token
      }
    };
    async function fetchData() {
      await axios
        .get(url, data)
        .then(response => {
          setUserName(response.data.result.name);
          dispatch(logIn());
        })
        .catch(error => {
          if (error.response.status === 419) {
            alert('로그인 정보가 만료되었습니다.');
          }
          localStorage.removeItem('token');
          dispatch(logOut());
        });
    }
    fetchData();
  }, [isLoggedIn]);

  const handleClick = () => {
    if (!isLoggedIn) navigation('/login');
    else {
      localStorage.removeItem('token');
      dispatch(logOut());
    }
  };

  return (
    <LoginContainer>
      <LoginBtn type='button' onClick={handleClick}>
        {isLoggedIn ? '로그아웃' : '로그인'}
      </LoginBtn>
      <LoginGreet>
        {isLoggedIn ? `${userName} 님 환영합니다!` : '로그인 해주세요!'}
      </LoginGreet>
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
