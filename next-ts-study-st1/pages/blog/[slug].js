import { PlainLayout } from 'components/Layout';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router'


// DEBUG: 여기서부터 해보기
const Slug = props => {
  const router = useRouter();
  console.log(props,'slug');
  console.log(router);

  return (
    <PlainLayout>
      <h2>{router.query.slug}</h2>
    </PlainLayout>
  );
}

// Post.getInitialProps = async function (context) {
//   const { id } = context.query;
//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
//   const show = await res.json();

//   console.log(`Fetched show: ${show.name}`);

//   return { show };
// };


export default Slug