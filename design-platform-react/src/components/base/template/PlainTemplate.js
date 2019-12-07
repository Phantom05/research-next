import React, { Component } from 'react';
import styled from 'styled-components';
import cx from 'classnames';
// import {color} from 'styles/utils';

const Styled={
  PlainTemplate:styled.div`
    ${props => props.headerHeight && `border-top:${props.headerHeight}px solid transparent`}
  `,
    Header: styled.div`
      position:fixed;
      top:0;
      left:0;
      width:100%;
      height:${props => props.headerHeight && `${props.headerHeight}px`};
      z-index:101;
      padding-right: inherit;
  `,
  Main:styled.main`
    position:relative;
    ${props=> props.headerHeight ?`height:calc(100vh - ${props.headerHeight}px)`:`height:100vh`};
    ${props=> props.contentBackgroundColor && `background:${props.contentBackgroundColor}`}
    .main{
      ${props=> props.contentPosition === 'heightFull' && `
        height:100%;
      `}
      ${props=> props.contentPosition === 'centerCenter' && `
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%)
      `}
      ${props=> props.contentPosition === 'heightCenter' && `
        position:absolute;
        top:50%;
        transform:translateY(-50%)
      `}
      ${props=> props.contentPosition === 'WidthCenter' && `
        position:absolute;
        left:50%;
        transform:translateX(-50%)
      `}
    }
  `
}
class PlainTemplate extends Component {
  state={
    headerHeight:0
  }
  componentDidMount(){
    if(this.header && this.header.clientHeight){
      this.setState({
        headerHeight:this.header.clientHeight
      });
    }
  }
  render() {
    const {children, header} = this.props;
    return (
      <Styled.PlainTemplate {...this.props} {...this.state}>
        {header &&  <Styled.Header ref={ref=>this.header = ref} children={header} />}
        <Styled.Main {...this.props} {...this.state}>
          <div className={cx('main')}>{children}</div>
        </Styled.Main>
      </Styled.PlainTemplate>
    );
  }
}

export default PlainTemplate;