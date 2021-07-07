import styled from 'styled-components';

const PlainHeaderStyled = styled.header`
  &{
    border-bottom:1px solid #ececec;
    /* background:black; */
    .header__an{
      color:white;
      display:inline-block;
      padding:20px;
      color:black;
      text-decoration:none;
      &:hover{
        opacity:0.6;
        text-decoration:underline;
      }
    }
  }
`
export default PlainHeaderStyled;