import Head from "next/head";

import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #ddd"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Head>
      <title>Next.js App with Redux</title>
    </Head>

    <Header />
    {props.children}
  </div>
);

export default Layout;
