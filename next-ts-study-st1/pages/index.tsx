import { useEffect } from 'react';
import { PlainLayout } from 'components/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import fetch from 'isomorphic-unfetch';
import { ReadMore } from 'components/ReadMore';
import dynamic from 'next/dynamic';
import { NextPage } from 'next';


// const DynamicComponentsWithCustomLoading = dynamic(
//   () => import('components/Header/PlainHeader'),
//   { ssr: false }
// )


const PostLink = props => (
  <li>
    <Link href={`/p/[id]`} as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

function getPosts() {
  return [
    { id: "hello-nextjs", title: "Hello Next.js" },
    { id: "learn-nextjs", title: "Learn Next.js is awesome" },
    { id: "deploy-nextjs", title: "Deploy apps with ZEIT" },
  ]
}

type HomePageProps = {
  shows: Array<ShowArrayTypes>;
}

type ShowArrayTypes = {
  id:number;
  name:string;
}

const HomePage: NextPage<HomePageProps> = props => {
  const router = useRouter();

  useEffect(() => {
    console.log(props.shows, 'props.shows');
    // 두번재인자가 url 변경하는것 첫번재인자가 router는 변경하는데 query안의 값만 변경
    // router.push('/?counter=10', '/about?counter=10', { shallow: true })
  }, []);

  useEffect(() => {
    console.log(router.query);
  }, [router.query.counter]);


  return (
    <PlainLayout>
      {/* <DynamicComponentsWithCustomLoading /> */}
      <h1>My Blog</h1>
      <ul>
        {getPosts().map(post => (
          <PostLink id={post.id} key={post.id} />
        ))}
      </ul>

      <ul>
        {props.shows.map(show => (
          <li key={show.id}>
            <Link href="/p/[id]" as={`/p/${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <ReadMore href="/about" />
    </PlainLayout>
  );
}

HomePage.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
}

export default HomePage;


