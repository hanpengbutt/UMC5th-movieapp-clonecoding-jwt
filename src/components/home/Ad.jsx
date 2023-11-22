import PropTypes from 'prop-types';
import { ReactComponent as AdImg } from '../../assets/ad.svg';

function Ad({ showAd }) {
  if (!showAd) {
    return null;
  }

  return <AdImg />;
}

Ad.propTypes = {
  showAd: PropTypes.bool.isRequired
};

export default Ad;
