import { useState } from 'react';
import Ad from './Ad';

function AdPage() {
  const [isShowAd, setIsShowAd] = useState(true);

  const handleClick = () => {
    setIsShowAd(prevState => !prevState);
  };

  return (
    <div>
      <Ad showAd={isShowAd} />
      <button type='button' onClick={handleClick}>
        {isShowAd ? '광고 안 보기' : '광고 보기'}
      </button>
    </div>
  );
}

export default AdPage;
