import React from 'react';
import { Container } from 'semantic-ui-react'
import Head from 'next/head';
import Header from './Header';

export default props => {
  return (
    <Container>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
      </Head>

      <Header />
        {props.children}

    </Container>
  );
};

/*
import React from 'react';

export default props => {
  return (
    <div>
      <h1>Im a header</h1>
        {props.children}
      <h1>Im a footer</h1>
    </div>
  );
};
*/
