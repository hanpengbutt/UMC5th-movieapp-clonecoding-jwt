import styled from 'styled-components';
import PropTypes from 'prop-types';

function ContentItemDetail({ display, title, overview }) {
  return (
    <ItemDetail display={display}>
      <ItemDetailTitle>{title}</ItemDetailTitle>
      <ItemDetailOverview>{overview}</ItemDetailOverview>
    </ItemDetail>
  );
}

ContentItemDetail.propTypes = {
  display: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired
};

const ItemDetail = styled.div`
  display: ${props => (props.display ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  box-sizing: border-box;
  padding: 20px 14px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.4;
`;

const ItemDetailTitle = styled.div`
  padding: 10px 0px;
  cursor: default;
`;

const ItemDetailOverview = styled.div`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  padding-top: 2px;
  cursor: default;
`;

export default ContentItemDetail;
