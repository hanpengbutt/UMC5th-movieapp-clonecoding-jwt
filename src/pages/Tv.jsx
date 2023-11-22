import styled from 'styled-components';
import tvs from '../services/tvDummy';
import TvItem from '../components/content/ContentItem';

function Tv() {
  return (
    <TvContainer>
      {tvs.results.map((item, index) => {
        return (
          <TvItem
            key={index}
            title={item.name}
            poster={item.poster_path}
            voteAverage={item.vote_average}
            overview={item.overview}
            contentType='tv'
          />
        );
      })}
    </TvContainer>
  );
}

const TvContainer = styled.div`
  width: 90vw;
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 20px;
  @media screen and (max-width: 1530px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media screen and (max-width: 1150px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-gap: auto;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default Tv;
