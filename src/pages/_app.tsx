import { throttle } from 'lodash';
import { useState, useRef, useEffect, useMemo } from 'react';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { Footer, NavigationBar } from '@components/blocks';
import { PAGE_TYPE } from '@constants/app';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import globalStyles from '@styles/globalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const MainContainer = styled.div<{ showNav: boolean }>`
  margin-top: ${({ showNav }) => (showNav ? '50px' : '0px')};
  display: flex;
  justify-content: center;
  transition: 0.05s all linear;
  flex: 1;
`;

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 2,
          },
        },
      }),
  );

  const { pathname } = useRouter();
  const [visible, setVisible] = useState(true);
  const beforeScrollY = useRef(0);

  const showNav = () => {
    switch (pathname.split('/')[1]) {
      case PAGE_TYPE.ADMIN:
      case PAGE_TYPE.STUDENT:
      case PAGE_TYPE.TEACHER:
        return true;
      default:
        return false;
    }
  };

  const handleScroll = useMemo(
    () =>
      throttle(() => {
        setVisible(beforeScrollY.current >= window.scrollY);
        beforeScrollY.current = window.scrollY;
      }, 250),
    [beforeScrollY],
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyles} />
      <NavigationBar pageType={pathname.split('/')[1]} visible={visible} />
      <MainContainer showNav={showNav() && visible}>
        <Component {...pageProps} />
      </MainContainer>
      <Footer />
    </QueryClientProvider>
  );
}
