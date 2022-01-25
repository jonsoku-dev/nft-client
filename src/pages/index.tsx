import { useTranslation } from 'react-i18next';
import { gql, useApolloClient, useQuery } from '@apollo/client';

import { i18n, Language } from '../lib/i18n';
import { IS_LOGGED_IN } from '../lib/apollo';
import Layout from '../components/layout';
import { useEffect, useState } from 'react';


const SAMPLE_QUERY = gql`
query GetAllCats {
  getAllCats {
    id
    name
    isGood
    ownerName
    categoryName
  }
}
`;

const IndexPage = () => {
  const [t] = useTranslation('common');
  const apolloClient = useApolloClient();

  const { data: LoggedIn } = useQuery(IS_LOGGED_IN);
  console.log(LoggedIn);
  const handleClick: React.MouseEventHandler = () => {
    const currentLanguage = i18n.language;
    i18n.changeLanguage(
      currentLanguage === Language.EN ? Language.RU : Language.EN,
    );
  };

  const {
    data,
  } = useQuery(SAMPLE_QUERY);


  return (
    <div>
      <p
        dangerouslySetInnerHTML={{
          __html: t('greetings', { version: apolloClient.version }),
        }}
      />

      <button onClick={handleClick}>Change language</button>
      {LoggedIn.isLoggedIn ? <button onClick={() => {
        window.localStorage.removeItem('token');
        apolloClient.cache.writeQuery({
          query: IS_LOGGED_IN,
          data: {
            isLoggedIn: false,
          },
        });
      }}>LoggedOut</button> : <button onClick={() => {
        window.localStorage.setItem('token', 'hey!');
        apolloClient.cache.writeQuery({
          query: IS_LOGGED_IN,
          data: {
            isLoggedIn: true,
          },
        });
      }}>LoggedIn</button>}


    </div>
  );
};

IndexPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default IndexPage;