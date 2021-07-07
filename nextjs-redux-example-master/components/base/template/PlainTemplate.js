import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import cx from 'classnames';
import { useImmer } from 'use-immer';
import { PlainFooter } from 'components/common/footer';
import { getElementSize } from 'libs/library';
import { HeaderContainer } from 'containers/header';
import { PlainTemplateStyle } from './PlainTemplate.style';
import { useIsomorphicLayoutEffect,useIsMounted } from 'libs/utils';

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
  const isMounted = useIsMounted();
  
  useLayoutEffect(() => {

    setValues(draft => {
      draft.isLoad = true;
      draft.header = getElementSize(headerRef.current);
      draft.footer = getElementSize(footerRef.current);
      draft.children = getElementSize(childrenRef.current);
    })
  }, [headerRef, footerRef, childrenRef]);


  useEffect(() => {
    if (isMounted) {
      setValues(draft => {
        draft.isLoad = true;
        draft.header = getElementSize(headerRef.current);
        draft.footer = getElementSize(footerRef.current);
        draft.children = getElementSize(childrenRef.current);
      })
    }
  }, [isMounted]);

  
  return (
    <PlainTemplateStyle {...values} >
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