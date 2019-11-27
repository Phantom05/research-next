
import Head from 'next/head';
import PlainTemplate from 'components/base/template/PlainTemplate';
import MainHeader from 'components/base/header/MainHeader';
const Index =() =>(
  <PlainTemplate header={<MainHeader/>}>
    <Head>
      <title>
        Index 페이지
      </title>
    </Head>
    <style jsx>
      {`
        h2{
          color:green
        }
      `}
    </style>
    <h2>Home</h2>
  </PlainTemplate>
);

export default Index;