import styled from 'styled-components';

const PlainHeaderComponent = styled.header`

`;
const PlainHeaderLink = styled.a`
  display:inline-block;
  margin-right:15px;
  cursor: pointer;
  &:hover{
    text-decoration:underline;
  }
`

export {
  PlainHeaderComponent,
  PlainHeaderLink
}