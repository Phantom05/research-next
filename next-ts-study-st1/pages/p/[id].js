import { PlainLayout } from 'components/Layout';
import fetch from 'isomorphic-unfetch';

// DEBUG: 여기서부터 해보기
const Post = props => {

  return (
    <PlainLayout>
      <h1>{props.show.name}</h1>
      <p>{props.show.image
        ? <img src={props.show.image.medium} />
        : null}
      </p>
    </PlainLayout>
  );
}

Post.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};


export default Post