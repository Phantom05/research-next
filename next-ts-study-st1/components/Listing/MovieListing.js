import React from 'react';
import { MovieItem } from 'components/Item';


function MovieListing(props) {
  const { items = [] } = props;
// console.log(props);
  return (
    <div>
      {items.map(item=><MovieItem key={item.id} data={item}/>)}
    </div>
  );
}




export default MovieListing;