import { useEffect,useCallback} from "react";
import { PlainLayout } from "components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import fetch from "isomorphic-unfetch";
import { ReadMore } from "components/ReadMore";
import dynamic from "next/dynamic";
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { countPlusAction, countMinusAction } from 'store/modules/base';

type HomePageProps = {
  shows: Array<ShowArrayTypes>;
};

type ShowArrayTypes = {
  id: number;
  name: string;
};

const HomePage: NextPage<HomePageProps> = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { baseReducer } = useSelector(
    ({ base }) => ({ baseReducer: base })
  );


  const handleClick = useCallback((config) => {
    const { value, type } = config;
    if(type === 'increase'){
      dispatch(countPlusAction());
    }
    if(type === 'decrease'){
      dispatch(countMinusAction());
    }
  },[]);

  useEffect(() => {
    // console.log(props.shows, 'props.shows');
    // 두번재인자가 url 변경하는것 첫번재인자가 router는 변경하는데 query안의 값만 변경
    // router.push('/?counter=10', '/about?counter=10', { shallow: true })
  }, []);

  return (
    <PlainLayout>
      <h1>My Home</h1>
      <button onClick={() => handleClick({ type: "increase", value: 1 })}>
        +
      </button>
      <button onClick={() => handleClick({ type: "decrease", value: -1 })}>
        -
      </button>
      <h2>{baseReducer.count}</h2>
    </PlainLayout>
  );
};

export default HomePage;






// const PostLink = (props) => (
//   <li>
//     <Link href={`/p/[id]`} as={`/p/${props.id}`}>
//       <a>{props.id}</a>
//     </Link>
//   </li>
// );

// function getPosts() {
//   return [
//     { id: "hello-nextjs", title: "Hello Next.js" },
//     { id: "learn-nextjs", title: "Learn Next.js is awesome" },
//     { id: "deploy-nextjs", title: "Deploy apps with ZEIT" },
//   ];
// }