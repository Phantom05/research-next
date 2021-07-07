import {css} from 'styled-components';
import {_color,_deviceSize} from 'styles/_common';

export const fontFamily = css`
  font-family:'Noto Sans', sans-serif;
`;
export const color = _color;
export const device = _deviceSize;


export const floatClear = css`
  &:after{
    content:'';
    display:block;
    clear: both;
  }
`;

export const positionCenterCenter = css`
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
`;

export const positionWidthCenter = css`
  position:absolute;
  left:50%;
  transform:translateX(-50%);
`;

export const positionHeightCenter = css`
  position:absolute;
  top:50%;
  transform:translateY(-50%);
`;
export const positionWide = css`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
`;

export const font = (size=14,color='black') => {
  return css`
  color: ${color};
  font-size: ${size}px;
  ${fontFamily};
  & :hover{ color: $clr; } 
  /* @content; */
  `;
};


export const buttonBlue = css`
  background:${color.blue};
  color:${color.white};
  transition:.3s;
  border:0;
  padding:5px 15px;
  border-radius:3px;
  cursor: pointer;
  ${font(16,color.white)};
  &:hover{
    background:${color.blue_hover};
  }
`;

export const buttonWhite = css`
  background:${color.white};
  transition:.3s;
  border:1px solid ${color.blue};
  padding:5px 15px;
  border-radius:3px;
  text-transform: uppercase;
  cursor: pointer;
  ${font(16,color.blue)};
  &:hover{
    /* background:${color.blue_hover}; */
  }
`;

export const buttonPink = css`
  display:inline-block;
  background: ${color.pinkGradient};
  border-radius: 3px;
  border: 0;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
  cursor: pointer;
  text-align:center;
  ${font(15,color.white)};
  &:hover{
    /* background:${color.blue_hover}; */
    background:linear-gradient(45deg, #f16483 30%, #FF8E53 100%);
  }
`;

export const dotdotdot = css`
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
`;



