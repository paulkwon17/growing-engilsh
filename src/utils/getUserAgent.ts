export const isAndroid = () => {
  const userAgent = navigator?.userAgent.toLowerCase();
  return userAgent.includes('android');
};

export const isIOS = () => {
  const userAgent = navigator?.userAgent.toLowerCase();
  return userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('ipod');
};

export const isMobile = () => {
  return isAndroid() || isIOS();
};
