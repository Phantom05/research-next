import Router from 'next/router';
import styled from 'styled-components';

const ReadMore = ({href}) =>{
  const handleClick = ()=>{
    Router.push(href);
  };
  return(
    <div>
       Click <span onClick={handleClick}> <a>Here</a> </span>to read more
    </div>
  )
};

export default ReadMore;