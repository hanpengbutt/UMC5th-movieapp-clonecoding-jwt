import { Link } from 'react-router-dom';
import styled from 'styled-components';

function NotFound() {
  return (
    <NoticeContainer>
      <H1>해당 페이지를 찾지 못했습니다.</H1>
      <div>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</div>
      <Link to='/'>
        <MoveToMain>메인 페이지로 이동</MoveToMain>
      </Link>
    </NoticeContainer>
  );
}

export default NotFound;

const NoticeContainer = styled.div`
  height: 80px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
`;

const H1 = styled.h1`
  font-family: 'Pretendard-SemiBold';
  font-size: 24px;
  line-hieght: 30px;
`;

const MoveToMain = styled.div`
  color: tomato;
`;
