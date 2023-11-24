import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import REG_EXP from '../constants/regExp';
import API_URL from '../constants/apiUrl';
import { logIn } from '../store/reducers';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [idValue, setIdValue] = useState('');
  const [isIdValid, setIsIdValid] = useState(false);
  const [showIdErrorMessage, setShowIdErrorMessage] = useState(false);

  const [pwdValue, setPwdValue] = useState('');
  const [isPwdValid, setIsPwdValid] = useState(false);
  const [showPwdErrorMessage, setShowPwdErrorMessage] = useState(false);

  const [submitBtnAble, setSubmitBtnAble] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  /**
   *
   * @description isIdValid, isPwdValid 값에 따라 로그인 버튼 활성화 결정
   */
  useEffect(() => {
    setSubmitBtnAble(isIdValid && isPwdValid);
  }, [isIdValid, isPwdValid]);

  /**
   *
   * @param {*} idInput 입력한 id값
   * @description 입력한 id값의 유효성 검사 결과에 따라 isIdValid, showIdErrorMessage 상태를 변경하는 함수
   */
  const idValidTest = idInput => {
    const isValid = REG_EXP.idAndPwd.test(idInput);
    setIsIdValid(isValid);
    setShowIdErrorMessage(!isValid);
  };

  /**
   *
   * @param {*} pwdInput 입력한 password값
   * @description 입력한 password값의 유효성 검사 결과에 따라 isPwdValid, showPwdErrorMessage 상태를 변경하는 함수
   */
  const pwdValidTest = pwdInput => {
    const isValid = REG_EXP.idAndPwd.test(pwdInput);
    setIsPwdValid(isValid);
    setShowPwdErrorMessage(!isValid);
  };

  const handleIdChange = event => {
    setIdValue(event.target.value);
    idValidTest(event.target.value);
  };

  const handlePwdChange = event => {
    setPwdValue(event.target.value);
    pwdValidTest(event.target.value);
  };

  /**
   *
   * @description axios 라이브러리로 로그인 요청을 보내는 함수
   */
  const loginRequest = async () => {
    const url = API_URL.login;
    const data = {
      id: idValue,
      pw: pwdValue
    };
    await axios
      .post(url, data)
      .then(response => {
        setTimeout(() => {
          dispatch(logIn());
          navigate('/');
          localStorage.setItem('token', response.data.result.AccessToken);
          localStorage.setItem('username', response.data.result.username);
        }, 1500);
      })
      .catch(error => {
        setTimeout(() => {
          setShowLoading(false);
          setIdValue('');
          setPwdValue('');
          setIsIdValid(false);
          setIsPwdValid(false);
          alert(error.response.data.message);
        }, 1500);
      });
  };

  /**
   *
   * @param {*} event
   * @description 로그인 버튼이 눌렸을 때 기본 이벤트를 막고, 로그인 요청 함수를 호출하는 함수
   */
  const handleSubmitBtn = event => {
    event.preventDefault();
    setSubmitBtnAble(false);
    setShowLoading(true);
    loginRequest();
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmitBtn}>
        <LoginLabel>
          아이디와 비밀번호를
          <br />
          입력해주세요
        </LoginLabel>
        <Label htmlFor='id'>
          아이디
          <Input
            type='text'
            id='id'
            value={idValue}
            placeholder='영문자 또는 숫자로 이루어진 아이디를 입력해주세요.'
            onChange={handleIdChange}
          />
        </Label>
        {showIdErrorMessage && (
          <ErrorMessage>올바른 아이디를 입력해주세요.</ErrorMessage>
        )}
        <Label htmlFor='password'>
          비밀번호
          <Input
            type='password'
            id='password'
            value={pwdValue}
            placeholder='영문자 또는 숫자로 이루어진 비밀번호를 입력해주세요.'
            onChange={handlePwdChange}
          />
        </Label>
        {showPwdErrorMessage && (
          <ErrorMessage>올바른 비밀번호를 입력해주세요.</ErrorMessage>
        )}
        <SubmitBtn
          type='submit'
          value={showLoading ? 'Loading...' : '확인'}
          disabled={!submitBtnAble}
        />
      </LoginForm>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 560px;
  padding: 40px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 30px;
`;

const LoginLabel = styled.h1`
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

const Input = styled.input`
  border-radius: 4px;
  border: 1px solid lightGray;
  height: 26px;
  padding: 6px 4px;
  margin-top: 8px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin: 4px 0px;
`;

const SubmitBtn = styled.input`
  height: 40px;
  padding: 6px;
  margin-top: 8px;
  border-radius: 50px;
  border: none;
  background-color: ${({ disabled }) => (disabled ? 'Gainsboro' : '#22254a')};
  color: ${({ disabled }) => (disabled ? 'black' : 'white')};
`;

export default Login;
