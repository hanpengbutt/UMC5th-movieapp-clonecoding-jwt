import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ContentItemDetail from './ContentItemDetail';
import TMDB_IMAGE_BASE_URL from '../../constants/imagePath';

function ContentItem({ title, voteAverage, overview, poster, contentType }) {
  const [detail, setDetail] = useState(false);
  const navigate = useNavigate();
  const handleClickContentItem = () => {
    navigate(`/${contentType}/${title}`, {
      state: { voteAverage, overview, poster }
    });
  };

  return (
    <ContentItemWrapper
      onMouseOver={() => setDetail(true)}
      onMouseOut={() => setDetail(false)}
      onClick={handleClickContentItem}
    >
      <ItemPoster src={TMDB_IMAGE_BASE_URL(poster)} alt='포스터 사진' />
      <ItemInfo>
        <ItemTitle>{title}</ItemTitle>
        <div>{voteAverage}</div>
      </ItemInfo>
      <ContentItemDetail title={title} overview={overview} display={detail} />
    </ContentItemWrapper>
  );
}

ContentItem.propTypes = {
  voteAverage: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  contentType: PropTypes.string.isRequired
};

const ContentItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ItemPoster = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1.5;
  object-fit: cover;
`;

const ItemInfo = styled.div`
  width: 100%;
  aspect-ratio: 2 / 1;
  background-color: #373b69;
  color: white;
  display: flex;
  box-sizing: border-box;
  padding: 14px;
  line-height: 1.4;
  justify-content: space-between;
`;

const ItemTitle = styled.div`
  width: 80%;
  height: 100%;
  word-break: keep-all;
`;

export default ContentItem;
