import { useEffect, useState } from 'react';

const useIsMobile = () => {
  const [userAgent, setUserAgent] = useState('');

  const isAndroid = () => {
    return userAgent.includes('android');
  };

  const isIOS = () => {
    return userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('ipod');
  };

  const isMobile = () => {
    return isAndroid() || isIOS();
  };

  useEffect(() => {
    setUserAgent(navigator?.userAgent.toLowerCase());
  }, []);

  return {
    isAndroid,
    isIOS,
    isMobile,
  };
};

export default useIsMobile;
