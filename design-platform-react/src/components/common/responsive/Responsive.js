import React from 'react';
import cx from 'classnames';
import css from './Responsive.scss';

const Responsive = ({ children, className, ...rest }) => {
  return (
    <div className={cx(css.common,css.responsive, css[className])} {...rest}>
      { children }
    </div>
  );
};

export default Responsive;