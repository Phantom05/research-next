import React, { useRef, useLayoutEffect } from 'react';
import { HeaderContainer } from 'containers/header';
import { PlainFooter } from 'components/common/footer';
import { useImmer } from 'use-immer';
import cx from 'classnames';
import { PlainTemplateStyle } from './PlainTemplate.style';
import { getElementSize, compareProp } from 'libs/library';
import {useIsomorphicLayoutEffect} from 'libs/utils';

const PlainTemplateState = {
  header: { x: null, y: null },
  children: { x: null, y: null },
  footer: { x: null, y: null },
  isLoad: false,
}

function PlainTemplate(props) {
  const {
    header = <HeaderContainer />,
    footer = <PlainFooter />,
    children
  } = props;

  const [values, setValues] = useImmer(PlainTemplateState);
  const headerRef = useRef();
  const footerRef = useRef();
  const childrenRef = useRef();

  useIsomorphicLayoutEffect(() => {
    console.log(headerRef,'headerRef');
    setTimeout(() => {
      setValues(draft => {
        draft.isLoad = true;
        draft.header = getElementSize(headerRef.current);
        draft.footer = getElementSize(footerRef.current);
        draft.children = getElementSize(childrenRef.current);
      })
    }, 0);
  }, [headerRef,footerRef,childrenRef]);



  console.log('header', values.header);
  console.log('footer', values.footer);


  return (
    <PlainTemplateStyle {...values} className={cx({ isLoad: values.isLoad })} >
      {header &&
        <div
          className={cx('PlainTemplate__header')}
          children={header}
          ref={headerRef}
        />
      }
      {children &&
        <div
          className={cx('PlainTemplate__main', 
          { isLoad: values.isLoad }
          )}
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