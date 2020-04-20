import React, {  useRef ,useLayoutEffect} from 'react';
import { HeaderContainer } from 'containers/header';
import { PlainFooter } from 'components/common/footer';
import { useImmer } from 'use-immer';
import cx from 'classnames';
import {PlainTemplateStyle} from './PlainTemplate.style';
import { getElementSize, compareProp } from 'libs/library';

const PlainTemplateState = {
  header   : { x: null, y: null },
  children : { x: null, y: null },
  footer   : { x: null, y: null }
}

function PlainTemplate(props) {
  const {
    header = <HeaderContainer />,
    footer = <PlainFooter />,
    children
  } = props;

  const [values,setValues] = useImmer(PlainTemplateState);
  const headerRef = useRef();
  const footerRef = useRef();
  const childrenRef = useRef();

  useLayoutEffect(()=>{
    console.log(headerRef);
    setValues(draft => {
        
      draft.header     = getElementSize(headerRef.current);
      draft.footer        = getElementSize(footerRef.current);
      draft.children   = getElementSize(childrenRef.current);
      
    })

  },[setValues])


  console.log('header',values.header);
  console.log('footer',values.footer);
  
  return (
    <PlainTemplateStyle {...values}>
      {header &&
        <div 
          className={cx('PlainTemplate__header')} 
          children={header} 
          ref={headerRef} 
        />
      }
      {children &&
        <div 
          className={cx('PlainTemplate__main')} 
          ref={childrenRef} 
          children={children}
        />
      }
      {footer &&
        <div 
          className={cx('PlainTemplate__footer')} 
          children={footer} 
          ref={footerRef} 
        />
      }
    </PlainTemplateStyle>
  );
}

export default PlainTemplate;