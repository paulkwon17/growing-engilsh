import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { throttle } from 'lodash';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useState, useRef, useEffect, useMemo } from 'react';
import { ToastContainer } from 'react-toastify';

import { Footer, NavigationBar } from '@components/blocks';
import { HIDE_NAV_PAGE_LIST, PAGE_TYPE } from '@constants/app';
import globalStyles from '@styles/globalStyles';

import 'react-toastify/dist/ReactToastify.css';
import { fontConfig } from '@styles/typography';

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
  const hiddenNav = HIDE_NAV_PAGE_LIST.includes(pathname);

  const [visible, setVisible] = useState(true);
  const beforeScrollY = useRef(0);

  const showNav = () => {
    if (hiddenNav) {
      return false;
    }
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
      <Global styles={globalStyles({ scrollBlock: hiddenNav })} />
      {showNav() && <NavigationBar pageType={pathname.split('/')[1]} visible={visible} />}
      <main className={fontConfig.className}>
        <MainContainer showNav={showNav() && visible}>
          <ToastContainer />
          {/* @ts-expect-error Async Server Component */}
          <Component {...pageProps} />
        </MainContainer>
      </main>
      <Footer hidden={hiddenNav} />
    </QueryClientProvider>
  );
}
