import { Footer, NavigationBar } from '@components/blocks';
import { PAGE_TYPE } from '@constants/app/pageType';
import { css, Global } from '@emotion/react';
import globalStyles from '@styles/globalStyles';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useState, useRef, useEffect, useMemo } from 'react';
import { throttle } from 'lodash';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
      <div css={styles.main(showNav() && visible)}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </QueryClientProvider>
  );
}

const styles = {
  main: (showNav: boolean) => css`
    margin-top: ${showNav ? '50px' : '0px'};
    display: flex;
    justify-content: center;
    transition: 0.05s all linear;
    flex: 1;
  `,
};
