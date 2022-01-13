import type { NextPage } from 'next';
import { useTranslation } from 'react-i18next';
import { useApolloClient, gql, useQuery } from '@apollo/client';

import { i18n, Language } from '../lib/i18n';

const SAMPLE_QUERY = gql`
    query SampleQuery {
        sayBye
        sayHello
    }

`

const IndexPage: NextPage = () => {
  const [t] = useTranslation('common');
  const apolloClient = useApolloClient();

  const handleClick: React.MouseEventHandler = () => {
    const currentLanguage = i18n.language;

    i18n.changeLanguage(
      currentLanguage === Language.EN ? Language.RU : Language.EN,
    );
  };

  const {
    data,
  } = useQuery(SAMPLE_QUERY)

  console.log(data, 'data')

  return (
    <div>
      <p
        dangerouslySetInnerHTML={{
          __html: t('greetings', { version: apolloClient.version }),
        }}
      />

      <button onClick={handleClick}>Change language</button>
    </div>
  );
};

export default IndexPage;
