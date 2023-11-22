import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import TMDB_IMAGE_BASE_URL from '../constants/imagePath';

function ContentDetail() {
  const { title } = useParams();
  const { state } = useLocation();
  return (
    <MovieDetailWrapper>
      <Poster src={TMDB_IMAGE_BASE_URL(state.poster)} alt='포스터 사진' />
      <Title>{title}</Title>
    </MovieDetailWrapper>
  );
}

const MovieDetailWrapper = styled.div`
  display: flex;
`;

const Poster = styled.img`
  width: 260px;
  margin-right: 10px;
`;

const Title = styled.div`
  color: white;
`;

export default ContentDetail;
