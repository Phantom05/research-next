import PlainLayout from 'components/Layout/PlainLayout';
import withApi from 'helper/withApi';
import { MoviePageApi } from 'lib/api';
import { MovieListing } from 'components/Listing';
import { useRouter } from 'next/router';
import Link from 'next/link';



const Movie = props => {
  const router = useRouter();
  // console.log(router, 'router');
  const { page } = router.query;
  return (
    <PlainLayout>
      <h1>Movie</h1>

      <Link href={`/movie/${+page - 1}`}>
        <button>
          <a>Prev</a>
        </button>
      </Link>

      <Link href={`/movie/${+page + 1}`}>
        <button>
          <a>Next</a>
        </button>
      </Link>

      <MovieListing items={props.data} />
    </PlainLayout>
  )
}

Movie.getInitialProps = async (context) => {
  const { page } = context.query;
  console.log('흠..');
  const res = await fetch(`http://api.tvmaze.com/shows?page=${page}`);
  const data = await res.json();
  return {
    data: data,
  };
}

export default Movie;
