import styled from 'styled-components';

export const PlainTemplateStyle = styled.div`
  &{
    .PlainTemplate__header{
      position:fixed;
      left:0;
      top:0;
      width:100%;
      z-index:500
    }
    .PlainTemplate__main{
      ${({ header }) => header.y && `margin-top:${header.y}px; height:calc(100% - ${header.y}px)`};
      ${({ footer }) => footer.y && `margin-bottom:${footer.y}px; height:calc(100% - ${footer.y}px)`};
    }
    .PlainTemplate__footer{
      position:fixed;
      left:0;
      bottom:0;
      width:100%;
      z-index:500
    }
    
  }
`