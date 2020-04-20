import React from 'react';
import {TodoItem} from 'components/Item';

function TodoListing(props) {
  const {items = []} = props;
  return (
    <div>
      {items.map((item,idx)=>{
        return <TodoItem key={idx} data={item}/>
      })}
    </div>
  );
}

export default TodoListing;