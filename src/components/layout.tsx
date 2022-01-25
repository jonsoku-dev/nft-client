import { FC, useCallback, useEffect, useState } from 'react';
import { useApolloClient, useQuery } from '@apollo/client';
import { IS_LOGGED_IN } from '../lib/apollo';

export interface LayoutProps {
}


const Layout: FC<LayoutProps> = ({ children }) => {
  const apolloClient = useApolloClient();
  const { data, loading, error } = useQuery(IS_LOGGED_IN);
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);


  const handleClickLogin = useCallback(() => {
    window.localStorage.setItem('token', 'hey!');
    apolloClient.cache.writeQuery({
      query: IS_LOGGED_IN,
      data: {
        isLoggedIn: true,
      },
    });
  }, []);

  if (!hasMounted) {
    return null;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (!data?.isLoggedIn) {
    return <div>
      <h1>Not LoggedIn!</h1>
      <button onClick={handleClickLogin}>LoggedIn
      </button>
    </div>;
  }

  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;