import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { logIn, logOut } from '../../store/reducers';
import API_URL from '../../constants/apiUrl';

function LoginControl() {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const [userName, setUserName] = useState(localStorage.getItem('username'));

  /**
   *
   * @description storage 이벤트 발생 시 토큰이 추가된 경우 로그인, 토큰이 삭제된 경우 로그아웃 처리하는 이벤트 핸들러 등록
   */
  useEffect(() => {
    window.addEventListener('storage', event => {
      if (event.key === 'token') {
        if (event.newValue) {
          dispatch(logIn());
          setUserName(localStorage.getItem('username'));
        } else {
          dispatch(logOut());
        }
      }
    });
  }, []);

  /**
   *
   * @param {*} token 토큰
   * @description 토큰 검증 요청을 보내 유효할 경우 로그인 유지, 유효하지 않을 경우 로그인 정보가 만료됨을 alert로 보내고 localStorage에서 토큰과 사용자 이름을 지우는 함수
   */
  const verificationTokenRequest = async token => {
    const url = API_URL.token;
    const data = {
      headers: {
        Authorization: token
      }
    };
    await axios
      .get(url, data)
      .then(() => {
        dispatch(logIn());
      })
      .catch(error => {
        if (error.response.status === 419) {
          alert('로그인 정보가 만료되었습니다.');
        }
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        window.dispatchEvent(
          new StorageEvent('storage', {
            key: 'token',
            newValue: null
          })
        );
      });
  };

  /**
   *
   * @description 새로고침 시 localStorage에 토큰이 존재할 경우 토큰 검증 요청을 보내는 함수 실행
   */
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    verificationTokenRequest(token);
  }, []);

  /**
   *
   * @description 로그인 버튼 클릭 시 로그인 페이지로 이동, 로그아웃 버튼 클릭 시 localStorage에서 토큰과 사용자 이름을 지우는 함수
   */
  const handleClick = () => {
    if (!isLoggedIn) navigation('/login');
    else {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      window.dispatchEvent(
        new StorageEvent('storage', {
          key: 'token',
          newValue: null
        })
      );
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
