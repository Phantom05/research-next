import React from 'react';
import Link from 'next/link';
import {MovieItemStyle} from './MovieItem.style';


function MovieItem(props) {
  // console.log(props.data,'props');
  return (
    <MovieItemStyle>
      <Link href={`/movie/detail/[id]`} as={`/movie/detail/${props.data.id}`}>
        <a className="movieItem__an">{props.data.name}</a>  
      </Link>
    </MovieItemStyle>
  );
}

export default MovieItem;

